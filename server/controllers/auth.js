const otpService = require("../services/otp");

const HashService = require("../services/Hash");

const UserService = require("../services/user");

const TokenService = require("../services/token");

const UserDto = require("../dtos/user");

class AuthController {
  async sendOtp(req, res) {
    const { phone } = req.body;
    if (!phone) {
      res.status(400).json({ message: "Phone field is required!" });
    }
    //otp
    const otp = await otpService.generateOtp();

    //hash
    const ttl = 1000 * 60 * 2; //2min

    const expires = Date.now() + ttl;

    //combine hash of phone otp and expire time
    const data = `${phone}.${otp}.${expires}`;

    const hash = HashService.hashOtp(data);

    try {
      // await otpService.sendBySms(phone, otp);
      return res.status(200).json({
        hash: `${hash}.${expires}`,
        phone,
        otp,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error sending OTP!" });
    }
  }

  async verifyOtp(req, res) {
    const { otp, hash, phone } = req.body;

    if (!otp || !hash || !phone) {
      return res.status(400).json({ message: "all field required!" });
    }

    const [hashOtp, expires] = hash.split(".");

    if (Date.now() > +expires) {
      res.status(400).json({ message: "OTP expired!" });
    }

    const data = `${phone}.${otp}.${expires}`;

    const isValid = otpService.verifyOtp(hashOtp, data);

    if (!isValid) {
      return res.status(400).json({ message: "Invalid OTP!" });
    }

    let user;

    try {
      user = await UserService.findUser({ phone });
      if (!user) {
        user = await UserService.createUser({ phone });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Db error" });
    }

    const { accessToken, refreshToken } = TokenService.generateToken({
      _id: user._id,
      activated: false,
    });

    await TokenService.storeRefreshToken(refreshToken, user._id);

    res.cookie("refreshToken", refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    res.cookie("accessToken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    const userData = new UserDto(user);

    res.json({ auth: true, user: userData });
  }
}

module.exports = new AuthController();
