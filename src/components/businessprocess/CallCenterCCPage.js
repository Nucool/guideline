import React from 'react'
import { Link } from 'react-router-dom'

const CallCenterCCPage = () => {
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
    textAlign: "left"
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h2>Call Center</h2>
          <div style={marginBox}>
            <h4>Type-A (Insurance Only)</h4>
            <div style={imageDiv}>
              <img alt="CallCenter Type-A" src={process.env.PUBLIC_URL + "/images/callcenterType-A.jpg"} />
            </div>
          </div>
          <div style={marginBox}>
            <h4>Type-B (Insurance Only)</h4>
            <div style={imageDiv}>
              <img alt="CallCenter Type-B" src={process.env.PUBLIC_URL + "/images/callcenterType-B.jpg"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallCenterCCPage
