import React from 'react'

const MonolithicToMicroservicesPage = () => {
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
          <h2>Monolithic To Microservices</h2>
          <div style={marginBox}>
            <h4>
              <ul>
                <li><b>Monolithic</b></li>
              </ul>
            </h4>
            <div style={imageDiv}>
              <img alt="Monolithic" src={process.env.PUBLIC_URL + "/images/bikemonolithic.jpg"} />
            </div>
          </div>
          <div style={marginBox}>
            <h4>
              <ul>
                <li><b>Microservices</b></li>
              </ul>
            </h4>
            <div style={imageDiv}>
            </div>
          </div>
          <div style={marginBox}>
            <h4>
              <ul>
                <li><b>Roadmap Monolithic to Microservices</b></li>
              </ul>
            </h4>
            <div style={imageDiv}>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonolithicToMicroservicesPage
