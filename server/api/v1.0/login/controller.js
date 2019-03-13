// let mongoose = require('mongoose');
/* let UserService = require('./service'); */
// let jwt = require('jsonwebtoken');
// let config = require('../../../config/config');

let loginCollection = require('./model')

let loginadd = (req, res) => {
    console.log(req.body)
    loginCollection.findOne({ Email: req.body.email, Password: req.body.password })
    
        .then(
            (response) => {
                console.log(response)

                if (response != null) {
                    res.status(200).json({ status: true, message: "Success", addDetails: response });

                }
                else {
                    res.status(200).json({ status: false, message: "Wrong Credentials" });

                }
            }
        )
        .catch(
            (error) => {

                res.status(500).json({ status: false, message: "Error while creating add , please again" })
            }
        )
}










module.exports = {
    loginadd
}