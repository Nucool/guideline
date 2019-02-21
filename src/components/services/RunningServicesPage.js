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
                      <li>TDD (Unit Testing)</li>
                      <li>Codebase</li>
                      <li>Config Env.</li>
                    </ul>
                  </li>
                  <li>
                    <b>Development and Deployment Process</b>
                    <ul>
                      <li>[Develop] -> [Unit Test] -> [Build Artifacts] -> [Deploy] -> [Regression]</li>
                      <li>Software Stack Develop (NodeJS, Javascript, Prometheus)</li>
                      <li>Software Stack Test (Jest, Sinon)</li>
                      <li>Software Stack Deployment (DockerFile, DockerCompose)</li>
                    </ul>
                  </li>
                  <li>
                    <b>Monitoring</b>
                    <ul>
                      <li>Transaction Monitoring (Prometheus, Grafana)</li>
                    </ul>
                  </li>
                  <li>
                    <b>Testing</b>
                    <ul>
                      <li>Proformance Testing</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RunningServicesPage
