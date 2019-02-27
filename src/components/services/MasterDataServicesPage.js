import React from 'react'

const MasterDataServicesPage = () => {
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
          <h2>MasterDataServices</h2>
            <div style={marginBox}>
              <h4>
                <ul>
                  <li><b>Comming Soon</b></li>
                </ul>
              </h4>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MasterDataServicesPage
