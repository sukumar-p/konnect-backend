let mongoose = require('mongoose');
//  let  objectId = mongoose.Schema.objectId;


let loginDetails = new mongoose.Schema({
    Email : String,
    Password : String,
    Name:String,
    Designation : String,
    EmpId : Number,
    DateOfJoining : Date,
    feedback : [{
        senderEmail : String,
        SenderName : String,
       comments : String,
       overalExprericne :[{
           good : String,
           bad : String,
           average : String
       }]

    }]
    
})

let registerModel = mongoose.model('EmployeeDetails',loginDetails);
module.exports = registerModel;