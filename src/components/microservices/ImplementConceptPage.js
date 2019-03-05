import React from 'react'
import { Link } from 'react-router-dom'

const ImplementConceptPage = () => {
  let marginBox = {
    marginLeft: 20,
    marginBottom: 30
  }
  let imageDiv = {
    width: 700,
    textAlign: "center"
  }
  let imageDiv800 = {
    width: 800,
    textAlign: "center"
  }
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <h2>Microservice Implement Concept</h2>

            <div style={marginBox}>
              <h4>Work Process - Methodology Agile</h4>
              <div style={{marginLeft:30}}>
                <p><b>Scrum Framework</b> <Link to="/scrumPage" style={{marginLeft:50}}>acitivity</Link> </p>
                <div style={imageDiv}>
                  <img alt="Scrum Framework" width="700px" src="https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/2017-05/ScrumFrameworkTest.png" />
                  Reference : <a href="https://www.scrum.org/resources/scrum-framework-poster">https://www.scrum.org/resources/scrum-framework-poster</a>
                </div>
              </div>
            </div>

            <div style={marginBox}>
              <h4>Building Software - The twelve-factor App </h4>
              <div style={{marginLeft:30}}>
                <ul>
                  <li><b>The Twelve Factors</b>
                    <ul>
                      <li><b>I. Codebase</b></li>
                      <li><b>II. Dependencies</b></li>
                      <li><b>III. Config</b></li>
                      <li><b>IV. Backing services</b></li>
                      <li><b>V. Build, release, run</b></li>
                      <li><b>VI. Processes</b></li>
                      <li><b>VII. Port binding</b></li>
                      <li><b>VIII. Concurrency</b></li>
                      <li><b>IX. Disposability</b></li>
                      <li><b>X. Dev/prod parity</b></li>
                      <li><b>XI. Logs</b></li>
                      <li><b>XII. Admin processes</b></li>
                    </ul>
                  </li>

                </ul>
                Reference : <a href="https://12factor.net/">https://12factor.net/</a>
              </div>
            </div>

            <div style={marginBox}>
              <h4>Development and Deployment Process</h4>
              <div style={{marginLeft:30}}>
                <ul>
                  <li><b>Development</b>
                    <div style={imageDiv}>
                      <img alt="Flow Development" width="700px" src={process.env.PUBLIC_URL + "/images/flow-development.jpg"} />
                    </div>
                  </li>
                  <li><b>Pipeline</b>
                    <ul>
                      <li><b>1. Develop</b> (Pull-Request -> Code Review -> Merge)</li>
                      <li><b>2. Unit Test</b></li>
                      <li><b>3. Scan OWASP</b></li>
                      <li><b>4. Scan Analysis</b></li>
                      <li><b>5. Quality Gate</b></li>
                      <li><b>6. Build</b></li>
                      <li><b>7. Deploy</b></li>
                      <li><b>8. Regression Test</b></li>
                      <li><b>9. Performance Test</b></li>
                    </ul>
                  </li>
                </ul>
                <div style={imageDiv800}>
                  <img alt="Microservice Testing" width="800px" src={process.env.PUBLIC_URL + "/images/pipeline.jpg"} />
                </div>
              </div>
            </div>

            <div style={marginBox}>
              <h4>Monitoring</h4>
              <div style={{marginLeft:30}}>
                <ul>
                  <li><b>Server</b>
                    <ul>
                      <li><b>System Events</b></li>
                        <li><b>Logs as event streams</b></li>
                    </ul>
                  </li>
                  <li><b>Software</b>
                    <ul>
                      <li><b>Application Metrics</b></li>
                      <li><b>Platfrom Metrics</b></li>
                    </ul>
                  </li>
                  <li><b>Request/Response</b></li>
                  <li><b>Monitoring Tools</b>
                    <ul>
                      <li><b>Prometheus</b></li>
                      <li><b>Grafana</b></li>
                      <li><b>Apache Kafka</b></li>
                      <li><b>Zipkin</b></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div style={marginBox}>
              <h4>Testing - (Martinfowler articles)</h4>
              <div style={{marginLeft:30}}>
                <ul>
                  <li><b>Unit Testing</b> - exercise the smallest pieces of testable software in the application to determine whether they behave as expected.
                    <ul>
                      <li><b>Unit - Solitary</b></li>
                      <li><b>Unit - Sociable</b></li>
                    </ul>
                  </li>
                  <li><b>Integration Testing</b> - verify the communication paths and interactions between components to detect interface defects.
                    <ul>
                      <li><b>Gateway integration test</b></li>
                      <li><b>Persistence integration test</b></li>
                    </ul>
                  </li>
                  <li><b>Component Testing</b> - limit the scope of the exercised software to aportion of the system under test, manipulating the system through internal code interfaces and using test doubles to isolate the code under test from other components.
                    <ul>
                      <li><b>Tests communicate with the microservice</b></li>
                      <li><b>Isolate the microservice from external services</b></li>
                      <li><b>Replacing an external datastore with an in-memory implementation</b></li>
                    </ul>
                  </li>
                  <li><b>Contract Testing</b> - verify interactions at the boundary of an external service asserting that it meets the contract expected by a consuming service.
                    <ul>
                      <li><b>The sum of all consumer contract tests</b></li>
                    </ul>
                  </li>
                  <li><b>End-To-End Testing</b> - verify that a system meets external requirements and achieves its goals, testing the entire system, from end to end.
                    <ul>
                      <li><b>The test boundary for end-to-end tests</b></li>
                    </ul>
                  </li>
                </ul>
                <div style={imageDiv}>
                  <img alt="Microservice Testing" width="700px" src={process.env.PUBLIC_URL + "/images/microservice-testing.jpg"} />
                  Reference : <a href="https://martinfowler.com/articles/microservice-testing/#conclusion-summary">https://martinfowler.com/articles/microservice-testing/#conclusion-summary</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ImplementConceptPage
