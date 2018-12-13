import React, { Component } from 'react'
import axios from 'axios'
import Student from './Student';
class Students extends Component {
    state = {
        students:[]
    }
    componentDidMount () {
        axios.get('/students').then((response) => {
            console.log(response);
            this.setState({
                students:response.data
            })
        })
    }
renderStudents = () => {
    let students = this.state.students;
    return students.map((student) => {
        return <Student key={student._id} student = {student}/>
    })
}
  render() {
      
    return (
      <div>
        <h1>Students</h1>
        <p>{this.state.students.length}</p>
       {this.renderStudents()}

      </div>
    )
  }
}

export default Students
