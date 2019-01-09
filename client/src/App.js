import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Students from './components/Students';
import AddStudent from './components/AddStudent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Header from './components/Header';
import './App.css';


class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/students/add" component={AddStudent} />
            <Route path="/students" component={Students} />
          </Switch>

        </div>

      </BrowserRouter>
    );
  }
}

export default App;
