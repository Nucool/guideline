import React from 'react'

const CallCenterCCPage = () => {
  let marginBox = {
    marginLeft: 20,
    marginBottom: 30
  }
  let imageDiv = {
    width: 700,
    textAlign: "center"
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h2>Call Center</h2>
          <div style={marginBox}>
            <h4>
              <ul>
                <li><b>Type-A (Insurance Only)</b></li>
              </ul>
            </h4>
            <div style={imageDiv}>
              <img alt="CallCenter Type-A" src={process.env.PUBLIC_URL + "/images/callcenterType-A.jpg"} />
            </div>
          </div>
          <div style={marginBox}>
            <h4>
              <ul>
                <li><b>Type-B (Insurance - Claim Di CallCenter & Insurance Surveyor)</b></li>
              </ul>
            </h4>
            <div style={imageDiv}>
              <img alt="CallCenter Type-B" src={process.env.PUBLIC_URL + "/images/callcenterType-B.jpg"} />
            </div>
          </div>
          <div style={marginBox}>
            <h4>
              <ul>
                <li><b>Type-C (Insurance - Claim Di CallCenter & Claim Di Surveyor)</b></li>
              </ul>
            </h4>
            <div style={imageDiv}>
              <img alt="CallCenter Type-C" src={process.env.PUBLIC_URL + "/images/callcenterType-C.jpg"} />
            </div>
          </div>
          <div style={marginBox}>
            <h4>
              <ul>
                <li><b>Type-D (Insurance - Claim Di CallCenter & Insurance Surveyor & Claim Di Surveyor)</b></li>
              </ul>
            </h4>
            <div style={imageDiv}>
              <img alt="CallCenter Type-D" src={process.env.PUBLIC_URL + "/images/callcenterType-D.jpg"} />
            </div>
          </div>
          <div style={marginBox}>
            <h4>
              <ul>
                <li><b>CallCenter Business Process Flow</b></li>
              </ul>
            </h4>
            <div style={imageDiv}>
              <img alt="CallCenter Business Process Flow" src={process.env.PUBLIC_URL + "/images/callcenterbusinessprocessflow.jpg"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CallCenterCCPage
