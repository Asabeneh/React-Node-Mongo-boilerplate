import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import setAuthToken from '../../utils/setAuthToken';
import auth from '../../auth';

class Navbar extends Component {
  signOut = () => {
    if (localStorage.getItem ('jwtToken')) {
      localStorage.removeItem ('jwtToken');
      setAuthToken (false);
      return <Redirect to="/signin" />;
    }
  };
  render () {
    const {isAuthenticated, user} = auth;
    const authLinks = (
      <React.Fragment>
        <li className="nav-item">
          <Link className="nav-link" to="/students">
            Students
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/students/add">
            Add Student
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/users">
            <i class="fas fa-users" />
          </Link>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={this.signOut}>
            <img
              src={user.avatar}
              alt={user.name}
              title={user.name}
              className="rounded-circle"
              style={{width: '25px', marginRight: '5px'}}
            />
            <i class="fas fa-sign-out-alt" title="sign out" />
          </a>
        </li>
      </React.Fragment>
    );

    const guestLinks = (
      <React.Fragment>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signin">
            Sign In
          </Link>
        </li>
      </React.Fragment>
    );
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Integrify
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {localStorage.getItem ('jwtToken') ? authLinks : guestLinks}
          </ul>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
