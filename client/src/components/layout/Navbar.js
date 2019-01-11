import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import setAuthToken from '../../utils/setAuthToken';

class Navbar extends Component {
  handleLogout = () => {
    if (localStorage.getItem ('jwtToken')) {
      localStorage.removeItem ('jwtToken');
      setAuthToken (false);
      this.props.history.push ('/login');
    }
  };
  render () {
    const {isAuthenticated, user} = this.props;
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
          <small>{user.name}</small>
          <a href="#" className="nav-link" onClick={this.handleLogout}>
            <img
              src={user.avatar}
              alt={user.name}
              title={user.name}
              className="rounded-circle"
              style={{width: '25px', marginRight: '5px'}}
            />
            Logout
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
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
