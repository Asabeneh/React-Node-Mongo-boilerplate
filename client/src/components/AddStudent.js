import React, {Component} from 'react';
import axios from 'axios'
class AddStudent extends Component {
  state = {
    name: '',
    age: '',
  }
  handleChange = (e) => {
      this.setState({
          [e.target.name]:e.target.value
      })
  }
  handleSubmit = (e) => {
      e.preventDefault();
     console.log (this.state);
axios
  .post ('/students', this.state)
  .then (response => {
    console.log (response);
  })
  .catch (err => console.log (err));

 
  }
  render () {
    return (
      <div>
        <form onSubmit = {this.handleSubmit} method="POST">
          <input type="text" 
          name="name" 
          value={this.state.name}
          onChange = {this.handleChange}
           />
           <input type="text" 
          name="age" 
          value={this.state.age}
          onChange = {this.handleChange}
           />
          <button>Add Student</button>

        </form>

      </div>
    );
  }
}

export default AddStudent;
