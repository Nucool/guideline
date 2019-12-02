import React, { Component } from 'react';
import { hot } from 'react-hot-loader'
import { Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Public from './components/pages/Public'
import GuidelinePage from './components/guideline/GuidelinePage'
import ImplementConceptPage from './components/microservices/ImplementConceptPage'
import MonolithicToMicroservicesPage from './components/microservices/MonolithicToMicroservicesPage'
import ScrumPage from './components/scrum/ScrumPage'
import GitHubPages from './components/knowledgesharing/GitHubPages'
import UnitTestPage from './components/knowledgesharing/UnitTestPage'
import CallCenterCCPage from './components/businessprocess/CallCenterCCPage'
import SourceControlPage from './components/sourceControl/SourceControlPage'
import RunningServicesPage from './components/services/RunningServicesPage'
import MasterDataServicesPage from './components/services/MasterDataServicesPage'
import WhyMicroservicesPage from './components/microservices/WhyMicroservicesPage'
import ProjectOnTeamPage from './components/team/ProjectOnTeamPage'
import MonitoringRelatimePage from './components/researchanddevelopment/MonitoringRealtimePage'
import MonitoringRelatimeProductPage from './components/researchanddevelopment/MonitoringRealtimeProductPage'
import BlockchainTechnologyPage from './components/researchanddevelopment/BlockchainTechnologyPage'
import DataVisualizationPage from './components/researchanddevelopment/DataVisualizationPage'

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
        <Public exact path="/RunningServicesPage" component={RunningServicesPage} {...props} />
        <Public exact path="/MasterDataServicesPage" component={MasterDataServicesPage} {...props} />
        <Public exact path="/WhyMicroservicesPage" component={WhyMicroservicesPage} {...props} />
        <Public exact path="/UnitTestPage" component={UnitTestPage} {...props} />
        <Public exact path="/ProjectOnTeamPage" component={ProjectOnTeamPage} {...props} />
        <Public exact path="/MonitoringRealtimePage" component={MonitoringRelatimePage} {...props} />
        <Public exact path="/MonitoringRealtimeProductPage" component={MonitoringRelatimeProductPage} {...props} />
        <Public exact path="/BlockchainTechnologyPage" component={BlockchainTechnologyPage} {...props} />
        <Public exact path="/DataVisualizationPage" component={DataVisualizationPage} {...props} />
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

export default hot(module)(App);
