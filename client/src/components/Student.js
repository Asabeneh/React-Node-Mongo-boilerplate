import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Student extends Component {
 
  render() {
      const {name, age} = this.props.student;
    return (
      <div>
          <h4>Student Name:{name}</h4>
          <h5>Student age:{age}</h5>
        
      </div>
    )
  }
}

export default Student
