const crypto = require("crypto");

const HashService = require("../services/Hash");

const smsSid = process.env.SMS_SID;

const smsAuthToken = process.env.SMS_AUTH_TOKEN;

const twilio = require("twilio")(smsSid, smsAuthToken, {
  lazyLoading: true,
});

class otpService {
  async generateOtp() {
    const otp = crypto.randomInt(1000, 9999);
    return otp;
  }

  async sendBySms(phone, otp) {
    return await twilio.messages.create({
      to: phone,
      from: process.env.SMS_FROM_NUMBER,
      body: `Your coderHouse OTP is ${otp}`,
    });
  }

  verifyOtp(hashOtp, data) {
    let computedHash = HashService.hashOtp(data);

    return computedHash === hashOtp;
  }
}

module.exports = new otpService();
