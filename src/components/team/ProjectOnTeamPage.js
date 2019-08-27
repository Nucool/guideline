import React from 'react'
import config from '../../config'

class ProjectOnTeamPage extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      tasks: [],
      authName: '',
      isAuth: false,
      authImageUrl: ''
    }
  }

  componentDidMount() {
    // 1. Load the JavaScript client library.
    window.gapi.load("client:auth2", this.initClient);
    console.log('test/')
  }

  onLoadData = async (isAuth) => {
    if(isAuth) {
      const profile = window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile()
      const authName = profile.getName()
      const authImageUrl = profile.getImageUrl()
      let response = await this.getSheetData()
      const data = response.result.values;
      const tasks = data.map(item => ({
        seq: item[0],
        system: item[1],
        feature: item[2],
        status: item[3],
        priority: item[4],
        progressDevelop: item[5],
        progressTest: item[6],
        golive: item[7],
        owner: item[8],
        targetDate: item[9],
        remark: item[10],
        repo: item[11]
      })) || [];

      this.setState(state => ({
        tasks: tasks,
        isAuth: true,
        authName: authName,
        authImageUrl: authImageUrl
      }))
      console.log('data', data)
      console.log('authImageUrl', authImageUrl)
      console.log('data tasks', tasks)
    }
    else {
      this.setState(state => ({
        tasks: [],
        isAuth: false,
        authName: '',
        authImageUrl: ''
      }))
    }
  }

  getSheetData = async () => {
    return new Promise((reslove, reject) => {
      window.gapi.client.load("sheets", "v4", () => {
        window.gapi.client.sheets.spreadsheets.values
        .get({
          spreadsheetId: config.spreadsheetId,
          range: "Project!A2:L"
        })
        .then(
          response => {
            reslove(response);
          }
        );
      });
    })
  }

  initClient = () => {
    // 2. Initialize the JavaScript client library.
    window.gapi.client
    .init({
      apiKey: config.apiKey,
      clientId: config.clientId,
      // Your API key will be automatically added to the Discovery Document URLs.
      discoveryDocs: config.discoveryDocs,
      scope: 'https://www.googleapis.com/auth/spreadsheets.readonly'
    })
    .then(() => {
      // 3. Initialize and make the API request.

      window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.onLoadData);
      let isSign = window.gapi.auth2.getAuthInstance().isSignedIn.get()

      this.onLoadData(isSign)
      console.log('isSign', isSign)
    });
  };

  handleAuthClick() {
    console.log('handleAuthClick')
    window.gapi.auth2.getAuthInstance().signIn();
  }

  handleSignoutClick() {
    console.log('handleSignoutClick')
    window.gapi.auth2.getAuthInstance().signOut();
  }

  getStatusColor(priority) {
    if (priority.toLowerCase() === 'high') {
      return 'label label-danger'
    }
    else if (priority.toLowerCase() === 'medium') {
      return 'label label-warning'
    }
  }

  render () {
    let marginBox = {
      marginLeft: 20,
      marginBottom: 30
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-2">
              <h2>Project On Team</h2>
            </div>
            <div className="col-sm-2 text-left no-padding no-margin">
              <AuthGoogle {...this.state} signIn={this.handleAuthClick} signOut={this.handleSignoutClick}/>
            </div>
            <div style={marginBox}>
              <table className="table table-bordered table-sm ">
                <tbody>
                  <tr>
                    <th>#</th>
                    <th>System</th>
                    <th>Feature</th>
                    <th>Priority</th>
                    <th>Progress [Dev]</th>
                    <th>Progress [Test]</th>
                    <th>Go Live</th>
                    <th>Owner</th>
                    <th>Target Date</th>
                  </tr>
                  {
                    this.state.tasks.map(item =>
                      <tr key={item.seq} className="small">
                        <td>{item.seq}</td>
                        <td>{item.system}</td>
                        <td>{item.feature}</td>
                        <td className="text-center">
                          <span className={this.getStatusColor(item.priority)}>{item.priority}</span>
                        </td>
                        <td>
                          <div className="progress progress-striped active no-margin">
                            <div className="progress-bar progress-bar-success" style={{width:item.progressDevelop}}>{item.progressDevelop}</div>
                          </div>
                        </td>
                        <td>
                          <div className="progress progress-striped active no-margin">
                            <div className="progress-bar progress-bar-success" style={{width:item.progressTest}}>{item.progressTest}</div>
                          </div>
                        </td>
                        <td>{item.golive}</td>
                        <td>{item.owner}</td>
                        <td>{item.targetDate}</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ProjectOnTeamPage

const AuthGoogle = (props) => {
  if(props.isAuth) {
    return (
      <div className="user-panel no-padding">
        <div className="pull-left image">
          <img src={props.authImageUrl} className="img-circle" alt="User" />
        </div>
        <div className="pull-left info no-padding">
          {props.authName} <br/>
          <a href="#top"><i className="fa fa-circle text-success"></i> Online</a>
          <a href="#top" className="btn btn-default btn-flat btn-sm no-margin"  onClick={props.signOut}>Sign out</a>
        </div>
      </div>
    )
  }
  else {
    return (
      <h2>
        <a href="#top" className="btn btn-default btn-flat btn-sm"  onClick={props.signIn}>Authentication</a>
      </h2>
    )
  }
}
