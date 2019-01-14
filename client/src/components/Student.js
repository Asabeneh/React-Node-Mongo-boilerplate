import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import auth from '../auth';

export class Student extends Component {
  deleteStudent = id => {
    axios
      .delete (`/api/students/${id}`)
      .then (res => {
        this.props.getStudentsFromServer ();
      })
      .catch (err => console.log (err));
  };
  render () {
    const {_id, name, age} = this.props.student;
    console.log (auth.user.userId);
    return (
      <li className="list-group-item">
        <h4>Student Name:{name}</h4>
        <h5>Student age:{age}</h5>
        <button className="btn btn-primary">Edit</button> {' '}
        <button
          className="btn btn-danger"
          onClick={() => this.deleteStudent (_id)}
        >
          Delete
        </button>

      </li>
    );
  }
}

export default Student;
