const Student = require('../models/student');
module.exports = {
    showStudents:showStudents,
    showSingleStudent:showSingleStudent,
    addStudent:addStudent,
    editStudent:editStudent,
    deleteStudent:deleteStudent
}

function showStudents (req, res) {
  Student.find ({}, (err, students) => {
    if (err) {
      res.status (404).send ('Data was not found');
    }
    res.json (students);
  });
}

function showSingleStudent (req, res) {
  const _id = req.params.id;
  Student.find ({_id}, (err, student) => {
    console.log (student);

    if (err) {
      res.status (404).send ('An error');
    }
    if (student.length < 1) {
      res.send ('A student with that id was not found');
    }
    res.json (student);
  });
}

function addStudent (req, res) {
  const newStudent = new Student (req.body);
  newStudent
    .save ()
    .then (() => {
      console.log ('Data is saved');
    })
    .catch (err => console.log ('Error', err));
  res.send ('A new student has been added');
}

function editStudent (req, res) {
  const _id = req.params.id;
  Student.findOne ({_id}, (err, student) => {
    (student.name = req.body.name), (student.age = req.body.age);
    student.save (err => {
      if (err) {
        res.status (404).send (err);
      }
      console.log ('Saved');
      res.send ('Student has been updated');
    });
  });
}

function deleteStudent (req, res) {
  const _id = req.params.id;
  Student.findByIdAndRemove ({_id}, (err, student) => {
    if (err) {
      res.status (404).send ('Unable to delete');
    }
    res.send (`A student with id ${_id} has been removed.`);
  });
}
