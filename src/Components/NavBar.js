import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import './NavBar.css';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/users" component={Users}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default NavBar;
