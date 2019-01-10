import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import TextInputField from '../shared/TextInputField';
import axios from 'axios';

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {},
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const {name, email, password, password2} = this.state;
    const data = {name, email, password, password2};
    axios
      .post('/api/users/signup', data)
      .then(res => {
        this.setState({
          errors: {},
        });
        this.props.history.push('/signin');
      })
      .catch(err => {
        this.setState({
          errors: err.response.data,
        });
      });
  };
  render() {
    const {errors} = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">Create an account</p>

            <form onSubmit={this.handleSubmit}>
              <TextInputField
                name="name"
                placeholder="First Name"
                value={this.state.name}
                onChange={this.handleChange}
                error={errors.name}
              />
              <TextInputField
                name="email"
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
                info="Use an email connected with a gravatar image."
                error={errors.email}
              />
              <TextInputField
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                error={errors.password}
              />
              <TextInputField
                name="password2"
                type="password"
                placeholder="Confirm password"
                value={this.state.password2}
                onChange={this.handleChange}
                error={errors.password2}
              />
              <input
                type="submit"
                className="btn btn-info btn-block mt-4"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {};

export default withRouter(SignUp);
