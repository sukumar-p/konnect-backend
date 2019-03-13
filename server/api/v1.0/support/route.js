let express = require('express');

let router = express.Router();



let SupportController = require('./controller');



router.post('/add', SupportController.add);
router.get('/get-all-by-user',SupportController.getAllByUser);






module.exports = router;