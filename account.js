var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var AccountSchema = new Schema({
    Number: {
            type: String,
            required: true
    },
    TotalServices: {
        type: Number
    },
    TotalBill: {
        type: Number
    }
});
 
module.exports = mongoose.model('Account', AccountSchema);