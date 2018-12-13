import React, { Component } from 'react';

import './App.css';
import Students from './components/Students';
import AddStudent from './components/AddStudent';

class App extends Component {

  // state ={
  //   students:[]
  // }
  
  // addStudents = (obj) =>{
  //   const students = this.state.students.slice();
  //  const newstudent=  students.push(obj);
  //   this.setState({students:newstudent})
  // }
  render() {
    return (
      <div className="App">
       <h1>React with Node</h1>
       <AddStudent  />
       <Students />
       
      </div>
    );
  }
}

export default App;
