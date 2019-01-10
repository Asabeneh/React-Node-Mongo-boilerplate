import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Student from './Student';
class Students extends Component {
  state = {
    students: [],
  };
  componentDidMount () {
    axios.get ('/api/students').then (response => {
      console.log (response);
      this.setState ({
        students: response.data,
      });
    });
  }
  renderStudents = () => {
    let students = this.state.students;
    return students.map (student => {
      return <Student key={student._id} student={student} />;
    });
  };
  render () {
    return (
      <div>
        <p>{this.state.students.length}</p>
        <ul className="list-group">
          {this.renderStudents ()}
        </ul>

      </div>
    );
  }
}

export default Students;
