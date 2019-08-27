import React from 'react'

const GitHubPages = () => {
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
          <h2>GitHub Pages</h2>

          <div style={marginBox}>
            สามารถนำมาใช้เป็น Hosting สำหรับทำ Prototype แบบง่ายๆ ได้
          </div>
          <div style={marginBox}>
            <h4>Implement</h4>
            <div style={{marginLeft:30}}>
              <ul>
                <li><b>npm gh-pages</b></li>
              </ul>
            </div>
          </div>
          <div style={marginBox}>
            <h4>Concept</h4>
            <div style={imageDiv}>
              <img alt="GitHubPages" width="700px" src={process.env.PUBLIC_URL + "/images/githubpages.jpg"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GitHubPages
