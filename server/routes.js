const router=require('express').Router();
const authController=require('./controllers/auth')
const activateController=require('./controllers/activate');
const auth = require('./middleware/auth');

router.post('/api/send-otp', authController.sendOtp);

router.post('/api/verify-otp', authController.verifyOtp);

router.post('/api/activate',auth,activateController.activate)

module.exports=router;