const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const StudentSchema = new Schema ({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const Student = mongoose.model ('Student', StudentSchema);
module.exports = Student;
