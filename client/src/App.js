import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Students from './components/Students';
import AddStudent from './components/AddStudent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Header from './components/Header';
import './App.css';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Navbar from './components/layout/Navbar';

class App extends Component {
  state = {
    isAuthenticated: false,
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/students/add" component={AddStudent} />
            <Route path="/students" component={Students} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
