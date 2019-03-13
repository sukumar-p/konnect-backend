let express=require('express')
let router=express.Router();

let feedbackController = require('./controller')

router.post('/feedbackdetails',feedbackController.feedbackadd)


module.exports=router;