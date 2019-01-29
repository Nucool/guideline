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
              </ul>
            </li>
            { team.map(item => <TeamTable key={item.name} {...item} />)}
            <li>Knowledge Sharing
              <ul>
                <li><a href="https://github.com/arunsawad/research_technology" target="_blank" >Research Technology</a></li>
                <li><a href="https://github.com/arunsawad/prototype_microservice" target="_blank" >Prototype Microservice</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GuidelinePage
