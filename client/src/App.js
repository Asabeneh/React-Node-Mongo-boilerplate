import React, {Component} from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter,
} from 'react-router-dom';
import axios from 'axios';
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
import auth from './auth';

class App extends Component {
  state = {
    students: [],
  };
  componentDidMount () {
    this.getStudentsFromServer ();
    if (localStorage.getItem ('jwtToken')) {
      setAuthToken (localStorage.getItem ('jwtToken'));
      auth.isAuthenticated = true;
      auth.user = jwt_decode (localStorage.getItem ('jwtToken'));
      // this.setState ({
      //   isAuthenticated: true,
      //   user: jwt_decode (localStorage.getItem ('jwtToken')),
      // });
    }
  }
  getStudentsFromServer = () => {
    axios.get ('/api/students').then (response => {
      console.log (response);
      this.setState ({
        students: response.data,
      });
    });
  };

  render () {
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Switch>
            <PrivateRoute path="/students/add" component={AddStudent} />
            <PrivateRoute
              path="/students"
              component={props => (
                <Students
                  students={this.state.students}
                  getStudentsFromServer={this.getStudentsFromServer}
                />
              )}
            />
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
