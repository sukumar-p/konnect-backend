let feedbackcollection = require('../login/model')
let feedbackadd=(req,res)=>{
    console.log(req.body);
    feedbackcollection.find({ Email : req.body.empEmail })
    .then(
      (response)=>{
          console.log(response)
        if(response!=null){
            feedbackcollection.update({Email: req.body.empEmail},{$push:{"feedback": {senderEmail: req.body.youremail,
                SenderName : req.body.yourname,comments : req.body.comments,overalExprericne : {good :req.body.radiobutton.good,
                    bad :req.body.radiobutton.bad,average :req.body.radiobutton.average}}}})
            .then(
                (response)=>{
                    console.log(response);
                    res.status(200).json({ status : true , message :"Success"  , addDetails:response})
                }
            )
            .catch(
                (error)=>{
        
                    res.status(200).json({ status : false , message :"Error while creating  , please do again"   })
                }
            )
        }
        else{
            res.status(500).json({ status : false , message :"syntax error"})
        }
      }
    )

}

module.exports = {
    feedbackadd
}