import React, { useState } from "react";
import styles from "./StepAvatar.module.css";
import Card from "../../../components/common/card/Card";
import Button from "../../../components/common/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setAvatar } from "../../../store/activateSlice";
import {setAuth} from '../../../store/authSlice';
import { activate } from "../../../api/routes";
const StepAvatar = ({ onNext }) => {
  const dispatch = useDispatch();
  const { name, avatar } = useSelector((state) => state.activate);
  const [image, setImage] = useState("/images/monkey-avatar.png");

  const nextStep = async () => {
    // onNext();
    try {
      const { data } = await activate({ name, avatar });
      console.log(data);

      if(data.auth){
        dispatch(setAuth(data));
      }

    } catch (err) {
      console.log(err);
    }
  };

  function captureImage(e) {
    const file = e.target.files[0];

    if (!e.target.files[0].name.match(/.(jpg|jpeg|png|gif)$/i))
      alert("not an image");
    else {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function () {
        setImage(reader.result);
        dispatch(setAvatar(reader.result));
      };
    }
  }
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title={`okay ${name}`} logo="monkey-emoji">
          <p className={styles.subHeading}>How`s this photo?</p>
          <div className={styles.avatarWrapper}>
            <img className={styles.avatarImage} src={image} alt="avatar" />
          </div>

          <div>
            <input
              onChange={captureImage}
              id="avatarInput"
              type="file"
              className={styles.avatarInput}
            />

            <label className={styles.avatarLabel} htmlFor="avatarInput">
              Choose a different photo
            </label>
          </div>
          <div className={styles.activeButtonWrapper}>
            <Button text="Next" icon="arrow-forward" onClick={(e)=>nextStep()} />
          </div>
        </Card>
      </div>
    </>
  );
};

export default StepAvatar;
