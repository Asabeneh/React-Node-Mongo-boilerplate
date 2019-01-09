import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Student extends Component {
 
  render() {
      const {name, age} = this.props.student;
    return (
      <li className="list-group-item">
          <h4>Student Name:{name}</h4>
          <h5>Student age:{age}</h5>
        
      </li>
    )
  }
}

export default Student
