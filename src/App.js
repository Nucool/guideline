import React, { Component } from 'react';
import { Switch, Route, Redirect, Link, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Public from './components/pages/Public'
import GuidelinePage from './components/guideline/GuidelinePage'
import ImplementConceptPage from './components/microservices/ImplementConceptPage'
import MonolithicToMicroservicesPage from './components/microservices/MonolithicToMicroservicesPage'
import ScrumPage from './components/scrum/ScrumPage'
import GitHubPages from './components/knowledgesharing/GitHubPages'
import CallCenterCCPage from './components/businessprocess/CallCenterCCPage'
import SourceControlPage from './components/sourceControl/SourceControlPage'

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
      <Switch>
        <Public exact path="/" component={GuidelinePage} {...props} />
        <Public exact path="/microservices" component={ImplementConceptPage} {...props} />
        <Public exact path="/ScrumPage" component={ScrumPage} {...props} />
        <Public exact path="/GitHubPages" component={GitHubPages} {...props} />
        <Public exact path="/CallCenterCCPage" component={CallCenterCCPage} {...props} />SourceControlPage
        <Public exact path="/MonolithicToMicroservicesPage" component={MonolithicToMicroservicesPage} {...props} />
        <Public exact path="/SourceControlPage" component={SourceControlPage} {...props} />
      </Switch>
    </div>
  </Router>
)

class App extends Component {
  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

export default App;
