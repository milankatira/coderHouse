class userDto {
  _id;
  phone;
  createdAt;
  activated;

  constructor(user) {
    this._id = user._id;
    this._phone = user._phone;
    this.createdAt = user.createdAt;
    this.activated = user.activated;
  }
}

module.exports=userDto;