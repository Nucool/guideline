import React from 'react'
import { Link } from 'react-router-dom'

const RunningServicesPage = () => {
  let marginBox = {
    marginLeft: 20,
    marginBottom: 30
  }
  let imageDiv = {
    width: 700,
    textAlign: "center"
  }
  let imageDivLeft = {
    width: 700,
    textAlign: "left"
  }
  let imageDiv800 = {
    width: 800,
    textAlign: "center"
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h2>RunningServices</h2>
          <div style={marginBox}>
            <h4>
              <ul>
                <li><b>As is</b></li>
              </ul>
            </h4>
            <div style={imageDivLeft}>
              <img alt="asis" style={{width:300}} src={process.env.PUBLIC_URL + "/images/runningservices/r1.jpg"} />
            </div>
          </div>
          <div style={marginBox}>
            <h4>
              <ul>
                <li><b>As is -> CR add log generate running no</b></li>
              </ul>
            </h4>
            <div style={imageDiv}>
              <img alt="asis1" style={{width:900}} src={process.env.PUBLIC_URL + "/images/runningservices/r2.jpg"} />
            </div>
          </div>
          <div style={marginBox}>
            <h4>
              <ul>
                <li><b>To be -> CR add log generate running no </b></li>
              </ul>
            </h4>
            <div style={imageDiv}>
              <img alt="asis1" style={{width:900}} src={process.env.PUBLIC_URL + "/images/runningservices/r3.jpg"} />
            </div>
          </div>
          <div style={marginBox}>
            <h4>
              <ul>
                <li><b>Implement Process </b></li>
              </ul>
            </h4>
            <div style={imageDivLeft}>
              <div style={{marginLeft:30}}>
                <ul>
                  <li>
                    <b>Requirement</b>
                    <ul>
                      <li>สามารถสร้างเลข Runing ได้ตาม Format ที่กำหนด (eg. [C]-[T]-[YY][N])</li>
                      <li>สามารถ Running ตามปีได้</li>
                      <li>สามารถเก็บ log ในการ Running ได้</li>
                      <li>รองรับการ Request ซ้ำกรณี เกิด Timeout ได้</li>
                    </ul>
                  </li>
                  <li>
                    <b>Building Software</b>
                    <ul>
                      <li>TDD (Unit Testing)<span className="glyphicon glyphicon-ok" style={{color:'green', paddingLeft: 5}}></span></li>
                      <li>Codebase<span className="glyphicon glyphicon-time" style={{color:'#f0ad4e', paddingLeft: 5}}></span></li>
                      <li>Config Env.<span className="glyphicon glyphicon-time" style={{color:'#f0ad4e', paddingLeft: 5}}></span></li>
                    </ul>
                  </li>
                  <li>
                    <b>Development and Deployment Process</b>
                    <ul>
                      <li>[Develop] -> [Unit Test] -> [Build Artifacts] -> [Deploy] -> [Regression] <span className="glyphicon glyphicon-ok" style={{color:'green', paddingLeft: 5}}></span></li>
                      <li>Software Stack Develop (NodeJS, Javascript, Prometheus)<span className="glyphicon glyphicon-time" style={{color:'#f0ad4e', paddingLeft: 5}}></span></li>
                      <li>Software Stack Test (Jest, Sinon)<span className="glyphicon glyphicon-ok" style={{color:'green', paddingLeft: 5}}></span></li>
                      <li>Software Stack Deployment (DockerFile, DockerCompose)<span className="glyphicon glyphicon-time" style={{color:'#f0ad4e', paddingLeft: 5}}></span></li>
                    </ul>
                  </li>
                  <li>
                    <b>Monitoring</b>
                    <ul>
                      <li>Transaction Monitoring (Prometheus, Grafana)<span className="glyphicon glyphicon-time" style={{color:'#f0ad4e', paddingLeft: 5}}></span></li>
                    </ul>
                  </li>
                  <li>
                    <b>Testing</b>
                    <ul>
                      <li>Performance Testing (Jmeter)<span className="glyphicon glyphicon-ok" style={{color:'green', paddingLeft: 5}}></span></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div style={marginBox}>
            <h4>
              <ul>
                <li><b>Result</b></li>
              </ul>
            </h4>
            <div style={imageDiv}>
              <img alt="result1" style={{width:900}} src={process.env.PUBLIC_URL + "/images/runningservices/jmeterCLI1001con.jpg"} />
            </div>
            <br/>
            <div style={imageDiv}>
              <img alt="result2" style={{width:900}} src={process.env.PUBLIC_URL + "/images/runningservices/jmeterCLI1001data.jpg"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RunningServicesPage
