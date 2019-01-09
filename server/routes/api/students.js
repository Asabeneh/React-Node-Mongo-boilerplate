const express = require ('express');
const {
  showStudents,
  showSingleStudent,
  addStudent,
  editStudent,
  deleteStudent,
} = require ('../../controllers/students.controller');
const studentRouter = express.Router ();

studentRouter.get('/',(req, res) => res.send('Check /students route if there student.'))
studentRouter.get ('/students', showStudents);
studentRouter.get('/students/:id',showSingleStudent);
studentRouter.post('/students', addStudent);
studentRouter.put('/students/:id', editStudent);
studentRouter.delete('/students/:id', deleteStudent);


module.exports = studentRouter;

