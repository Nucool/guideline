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
  return(
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
              </ul>
            </li>
            { team.map(item => <TeamTable key={item.name} {...item} />)}
            <li>Knowledge Sharing
              <ul>
                <li><Link to="/githubPages">GitHub Pages</Link></li>
                <li><a href="https://github.com/arunsawad/research_technology" target="_blank" >Research Technology</a></li>
                <li><a href="https://github.com/arunsawad/prototype_microservice" target="_blank" >Prototype Microservice</a></li>
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
