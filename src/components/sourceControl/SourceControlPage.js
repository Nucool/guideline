import React from 'react'
import { Link } from 'react-router-dom'

const SourceControlPage = () => {
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
          <h2>Source Control</h2>
          <div style={marginBox}>
            <h4>Concept</h4>
            <div style={imageDiv}>
              <img alt="SourceControlPage" src={process.env.PUBLIC_URL + "/images/sourceControlPage.jpg"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SourceControlPage
