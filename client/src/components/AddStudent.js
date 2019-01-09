import React, {Component} from 'react';
import axios from 'axios';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from 'reactstrap';
import '../index.css';

class AddStudent extends Component {
  state = {
    name: '',
    age: '',
    errors: {},
  };
  handleChange = e => {
    this.setState ({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault ();
    console.log (this.state);
    let {name, age} = this.state;
    let data = {name, age};
    axios
      .post ('/students', data)
      .then (response => {
        this.setState ({
          errors: {},
        });
        console.log (response);
      })
      .catch (err =>
        this.setState ({
          errors: err.response.data,
        })
      );
    console.log (this.state);
  };
  render () {
    const {errors} = this.state;
    console.log (errors);
    return (
      <div>
        <Form onSubmit={this.handleSubmit} method="POST">
          <FormGroup>
            <Label>Name:</Label>

            <Input
              className="custom-input"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Name"
            />
            <p style={{color: 'red'}}>{errors.name}</p>
          </FormGroup>
          <FormGroup>
            <Label>Age:</Label>
            <Input
              type="text"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
              placeholder="Age"
            />
            <p style={{color: 'red'}}>{errors.age}</p>

          </FormGroup>
          <div>
            <Button color="primary">
              Add Student
            </Button>
          </div>

        </Form>

      </div>
    );
  }
}

export default AddStudent;
