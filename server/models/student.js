const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
});

const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;
