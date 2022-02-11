const otpService = require("../services/otp");
const HashService = require("../services/Hash");

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
      await otpService.sendBySms(phone, otp);
      return res.status(200).json({
        hash: `${hash}.${expires}`,
        phone,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Error sending OTP!" });
    }
  }
}

module.exports = new AuthController();
