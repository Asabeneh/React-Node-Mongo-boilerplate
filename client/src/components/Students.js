import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Student from './Student';
class Students extends Component {
  renderStudents = () => {
    let students = this.props.students;
    return students.map (student => {
      return (
        <Student
          key={student._id}
          student={student}
          getStudentsFromServer={this.props.getStudentsFromServer}
        />
      );
    });
  };
  render () {
    return (
      <div>
        <p>{this.props.students.length}</p>
        <ul className="list-group">
          {this.renderStudents ()}
        </ul>

      </div>
    );
  }
}

export default Students;
