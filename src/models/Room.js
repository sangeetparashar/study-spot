const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RoomSchema = new Schema(
    {
        id:{type:string},
        building:{type:string},
        rating:{type:float},
        comments:[]
    }
)

module.exports = mongoose.model('Room', RoomSchema);
