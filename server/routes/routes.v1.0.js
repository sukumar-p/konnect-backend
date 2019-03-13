let express = require('express');

let router = express.Router();

// let loginRouter = require('../api/v1/login/route');

let loginRouter = require('../api/v1.0/login/route');
let userRouter = require('../api/v1.0/userslist/route');
let feedbackrouter = require('../api/v1.0/feedback/route');
let SupportRouter=require('../api/v1.0/support/route');

// let submitRouter = require('../api/v1/submitadd/route')


// router.use('/create',loginRouter)

router.use('/Login',loginRouter);

router.use('/UserDetails',userRouter);
router.use('/feedback',feedbackrouter);
router.use('/support',SupportRouter);
module.exports = router;