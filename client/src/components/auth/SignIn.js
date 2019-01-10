import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import TextInputField from '../shared/TextInputField';
class SignIn extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const {email, password} = this.state;
    const data = {email, password};
    axios
      .post('/api/users/signin', data)
      .then(res => {
        this.setState({errors: {}});
        this.props.history.push('/students');
      })
      .catch(err => {
        this.setState({errors: err.response.data});
      });
  };
  render() {
    const {errors} = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign In</h1>
            <p className="lead text-center">Signin to your account</p>

            <form onSubmit={this.handleSubmit}>
              <TextInputField
                name="email"
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
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

SignIn.propTypes = {};

export default withRouter(SignIn);
