const mongoose = require('mongoose');
const Room = require('./Room.js');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        first_name: {type:String, required: true, max:100},
        last_name: {type: String, required:true, max: 100},
        email: {type:String, required:true, max:100},
        subscription: [{type: Schema.ObjectId, ref:'Room', required:true}],
        settings: {type:Array}
    }
)

module.exports = mongoose.model('User', UserSchema);