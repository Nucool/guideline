import React from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
//import spreadsheet from '../../spreadsheet'

class ProjectOnTeamPage extends React.Component {

  constructor(props){
    super(props)

  }

  componentDidMount() {
    // 1. Load the JavaScript client library.
    window.gapi.load("client", this.initClient);
  }

  onLoad = (data, error) => {
    // if (data) {
    //   const cars = data.cars;
    //   this.setState({ cars });
    // } else {
    //   this.setState({ error });
    // }
  };

  initClient = () => {
    // 2. Initialize the JavaScript client library.
    console.log('initClient ProjectOnTeamPage')
    console.log('initClient config', config)
    window.gapi.client
    .init({
      apiKey: config.apiKey,
      clientId: config.clientId,
      // Your API key will be automatically added to the Discovery Document URLs.
      discoveryDocs: config.discoveryDocs
    })
    .then(() => {
      // 3. Initialize and make the API request.
      window.gapi.client.load("sheets", "v4", () => {
        window.gapi.client.sheets.spreadsheets.values
          .get({
            spreadsheetId: config.spreadsheetId,
            range: "Sheet1!A4:T"
          })
          .then(
            response => {
              console.log('test')
            }
          );
      });
    });
  };

  render () {
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
            <h2>Project On Team</h2>
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
}

// const Project = () => {
//   let marginBox = {
//     marginLeft: 20,
//     marginBottom: 30
//   }
//   let imageDiv = {
//     width: 700,
//     textAlign: "center"
//   }
//   let imageDiv800 = {
//     width: 800,
//     textAlign: "center"
//   }
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-sm-12">
//           <h2>Source Control</h2>
//           <div style={marginBox}>
//             <h4>Concept</h4>
//             <div style={imageDiv}>
//               <img alt="SourceControlPage" src={process.env.PUBLIC_URL + "/images/sourceControlPage.jpg"} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

export default ProjectOnTeamPage
