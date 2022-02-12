class userDto {
  _id;
  phone;
  avatar
  createdAt;
  activated;
  name;

  constructor(user) {
    this._id = user._id;
    this.phone = user.phone;
    this.createdAt = user.createdAt;
    this.avatar=user.avatar? `${process.env.API_URL}${user.avatar}`:null; 
    this.activated = user.activated;
    this.name = user.name;
  }
}

module.exports=userDto;