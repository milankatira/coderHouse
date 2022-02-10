const router=require('express').Router();
const Authcontroller=require('./controllers/auth')
router.post('/api/send-otp',Authcontroller.sendOtp)

module.exports=router;