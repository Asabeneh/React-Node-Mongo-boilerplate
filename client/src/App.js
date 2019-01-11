import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter,
} from 'react-router-dom';
import Students from './components/Students';
import AddStudent from './components/AddStudent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Header from './components/Header';
import './App.css';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Navbar from './components/layout/Navbar';
import PrivateRoute from './components/shared/PrivateRoute';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';

class App extends Component {
  state = {
    isAuthenticated: false,
    user: {},
  };
  componentDidMount () {
    if (localStorage.getItem ('jwtToken')) {
      setAuthToken (localStorage.getItem ('jwtToken'));
      this.setState ({
        isAuthenticated: true,
        user: jwt_decode (localStorage.getItem ('jwtToken')),
      });
    }
  }

  render () {
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar
            user={this.state.user}
            isAuthenticated={this.state.isAuthenticated}
          />
          <Switch>
            <PrivateRoute path="/students/add" isAuthenticatated = {this.state.isAuthenticated} component={AddStudent} />
            <PrivateRoute path="/students" component={Students} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
