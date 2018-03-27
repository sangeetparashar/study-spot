const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseSchema = new Schema(
    {
        code:{type:String},
        start:{type:String},
        end:{type:String},
        location:{type:String},
        days:[]
    }
)

module.exports = mongoose.model('Course', CourseSchema);
