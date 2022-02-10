class AuthController {
  sendOtp(req, res) {
    // const { phone } = req.body;
    console.log(req.body)

    // if (!phone) {
    //   res.status(400).json({
    //     message: "Phone field is Required",
    //   });
    // }

    res.send("hello from otp");
  }
}

module.exports = new AuthController();
