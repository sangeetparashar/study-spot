const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseSchema = new Schema(
    {
        code:{type:string},
        start:{type:string},
        end:{type:string},
        location:{type:string},
        days:[]
    }
)

module.exports = mongoose.model('Course', CourseSchema);
