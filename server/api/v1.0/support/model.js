let mongoose = require('mongoose');
let ObjectId = mongoose.SchemaTypes.ObjectId;
let Schema = new mongoose.Schema({
    comment: { type: String },
    
}, {
        timestamps: true
    });

module.exports = mongoose.model('sample', Schema);