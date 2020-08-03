import React from 'react'
import { Link } from 'react-router-dom'

const team = [
  {
    name: "DepSecOps"
  },
  {
    name: "Software Architecture"
  }
]

const TeamTable = (props) => {
  return (
    <li>{props.name} Team
      <ul>
        <li>Mission</li>
        <li>New member process</li>
        <li>Team members</li>
        <li>Responsibiity</li>
        <li>Objectives</li>
        <li>Project on team</li>
      </ul>
    </li>
  )
}

const GuidelinePage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h2>Research and Development Technical Team</h2>
          <ul>
            <li>General
              <ul>
                <li><Link to="/microservices">Microservice implement concept</Link></li>
                <li><Link to="/MonolithicToMicroservicesPage">Monolithic To Microservices</Link></li>
                <li><Link to="/SourceControlPage">Source Control</Link></li>
                <li><Link to="/WhyMiCroservicesPage">Why Microservices</Link></li>
                <li><Link to="/RunningServicesPage">Running Services</Link></li>
                <li><Link to="/MasterDataServicesPage">MasterData Services</Link></li>
                <li><Link to="/UnitTestPage">Unit Test</Link></li>
                {/* <li><Link to="/ProjectOnTeamPage">Project On Team</Link></li> */}
              </ul>
            </li>
            <li>Research and Development Team
              <ul>
                <li><Link to="/ProjectOnTeamPage">Project On Team</Link></li>
              </ul>
            </li>
            <li>Knowledge Sharing
              <ul>
                <li><Link to="/githubPages">GitHub Pages</Link></li>
                <li><a href="https://github.com/arunsawad/research_technology" target="_blank" rel="noopener noreferrer" >Research Technology</a></li>
                <li><a href="https://github.com/arunsawad/prototype_microservice" target="_blank" rel="noopener noreferrer" >Prototype Microservice</a></li>
              </ul>
            </li>
            <li>Research and Development Project
              <ul>
                <li>
                  2019
                  <ul>
                    <li><Link to="/MonitoringRealtimePage">Monitoring Realtime</Link></li>
                    <li><Link to="/MonitoringRealtimeProductPage">Monitoring Realtime Product</Link></li>
                    <li><Link to="/BlockchainTechnologyPage">Blockchain Technology</Link></li>
                    <li><Link to="/DataVisualizationPage">Data Visualization</Link></li>
                    <li><Link to="/CarWoundedPredictionPage">Car Wounded Prediction</Link></li>
                  </ul>
                </li>
                <li>
                  2020
                  <ul>
                    <li><Link to="/CarDamageDetectionPage">Car Damage Detection</Link></li>
                    <li><Link to="/CostEstimationPage">Cost Estimation</Link></li>
                    <li><Link to="/DrivingAnalyticPage">Driving Analytic</Link></li>
                    <li><Link to="/Cosmos04Page">ChromeExtension, CarDamageDetection Mobile and Web application (Cosmos)</Link></li>
                    <li><Link to="/SnapPOCPage">Snap API POC</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>Business Process
              <ul>
                <li><Link to="/CallCenterCCPage">Call Center</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GuidelinePage
