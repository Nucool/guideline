import React, { Component } from 'react';
import { Switch, Route, Redirect, Link, BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Public from './components/pages/Public'

const Body = () => (
  <div>Body {process.env.PUBLIC_URL} Test</div>
)
const Page1 = () => (
  <div>Page1</div>
)
const Page2 = () => (
  <div>Page2</div>
)

const Routes = props => (
  <Router basename={process.env.PUBLIC_URL}>
    <div>
      <li>
        <Link to="/Page1">Page1</Link>
      </li>
      <Switch>
        <Public exact path="/" component={Body} {...props} />
        <Public exact path="/Page1" component={Page1} {...props} />
        <Public exact path="/Page2" component={Page2} {...props} />
      </Switch>
    </div>
  </Router>
)

class App extends Component {
  render() {
    return (
      <div>Test:{process.env.PUBLIC_URL}
        <Routes />
      </div>
    );
  }
}

export default App;
