let express=require('express')
let router=express.Router();

let userListController = require('./controller');


router.get('/userlist',userListController.useradd);



module.exports=router;