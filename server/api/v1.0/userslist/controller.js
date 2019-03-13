// let mongoose = require('mongoose');
/* let UserService = require('./service'); */
// let jwt = require('jsonwebtoken');
// let config = require('../../../config/config');

let usersCollection = require('../login/model')

let useradd = (req,res)=>{
    console.log(req.body);
    usersCollection.find({ Name : { $exists: true } })

        .then(
            (response)=>{
                // console.log(response)
                res.status(200).json({ status : true , message :"Success"  , addDetails:response});
            }
        )
        .catch(
            (error)=>{

                res.status(500).json({ status : false , message :"Error while creating userlist , please do again"   })
            }
        )
            
    
}






    






module.exports = {
    useradd
}