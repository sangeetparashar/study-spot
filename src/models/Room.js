const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RoomSchema = new Schema(
    {
        id:{type:String},
        building:{type:String},
        rating:{type:String},
        comments:[]
    }
)

module.exports = mongoose.model('Room', RoomSchema);
