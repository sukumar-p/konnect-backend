let mongoose = require('mongoose');
let ObjectId = mongoose.Types.ObjectId;
let SupportColl = require('./model');

let add=(req,res)=>{
    let body=req.body;
    console.log("body",body)
    SupportColl.create(body).then(
        (response)=>{
            console.log(response);
            res.status(200).json({status : true, message : "data saved succefully", data : null})
        }
    )
    .catch(
        (error)=>{
            res.status(500).json({status : false, message : "erro while creating", data : null})
        }
    )
}

let getAllByUser = (req, res) => {
    let query = req.query;
    SupportColl.find()
    .then(
        (response)=>{
            console.log(response)

            if(response!=null){
                res.status(200).json({status : true, message : "successfully fetched details", data : response})
            }
            else{
                res.status(400).json({status:false, message : "error while fetching", data : null})
            }
        }
    )
    .catch(
        (error)=>{
            res.status(500).json({status : false, message : "eror", data : null})
        }
    )
}


















module.exports = {
    add,
    getAllByUser
}