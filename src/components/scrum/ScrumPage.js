import React from 'react'

const ScrumPage = (props) => {
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
          <h2>Scrum Framework</h2>
          <div style={marginBox}>
            <ul>
              <li>
                <h4>Definitions</h4>
                <ul>
                  <li>
                    <b>User Story:</b>
                    <div >
                      ความต้องการของผู้ใช้ ผลิตภัณฑ์ถูกพัฒนาขึ้นเพื่อแก้ไขปัญหาหรือตอบสนองความต้องการของผู้ใช้
                    </div>
                  </li>
                  <li><b>Acceptance criteria</b></li>
                  <li><b>Product Backlog</b></li>
                  <li><b>Done</b></li>
                </ul>
              </li>
              <li>
                <h4>Actors</h4>
                <ul>
                  <li><b>Product Owner</b></li>
                  <li><b>Developer</b></li>
                  <li><b>Scrum Master</b></li>
                </ul>
              </li>
              <li>
                <h4>Activity</h4>
                <div style={imageDiv}>
                  <img alt="Scrum Framework" width="700px" src="https://2y5da6sqbsf4bertb26n96bz-wpengine.netdna-ssl.com/wp-content/uploads/scrumprocess.jpg" />
                  Reference :
                  <a href="https://www.mimeo.com/blog/three-reasons-scrum-master-certified">
                    https://www.mimeo.com/blog/three-reasons-scrum-master-certified
                  </a>
                </div>
                <ul>
                  <li><b>Sprint Planing</b></li>
                  <li><b>Daily Scrum</b></li>
                  <li><b>Sprint Review</b></li>
                  <li><b>Sprint Retrospective</b></li>
                  <li><b>Product Backlog Refining (Grooming)</b></li>
                  <li><b>Scrum Artifacts</b></li>
                </ul>
              </li>

              <li>
                <h4>Schedule Sprint</h4>
                <ul>
                  <li>
                    <b>sprint -> 2 weeks</b>
                  </li>
                  <div style={imageDiv}>
                    <a href={process.env.PUBLIC_URL + "/images/sprint_2_weeks.jpg"} target="_blank"  rel="noopener noreferrer">
                      <img alt="Sprint 2 weeks" width="800px" src={process.env.PUBLIC_URL + "/images/sprint_2_weeks.jpg"} />
                    </a>
                  </div>
                  <li>
                    <b>sprint -> 1 week</b>
                  </li>
                </ul>
              </li>
              <li>
                Reference :
                <a href="https://www.scrumguides.org/docs/scrumguide/v2017/2017-Scrum-Guide-US.pdf">
                  https://www.scrumguides.org/docs/scrumguide/v2017/2017-Scrum-Guide-US.pdf
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScrumPage
