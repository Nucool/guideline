import React from 'react'
import { Link } from 'react-router-dom'
//http://www.notaboutcode.com/post/18-test-properties/

const UnitTestPage = () => {
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
  let marginTable = {
    marginTop: 10,
    marginBottom: 10
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h2>Unit Test Pages </h2>
          อ้างอิง จาก <a href="http://www.notaboutcode.com/post/18-test-properties/">http://www.notaboutcode.com/post/18-test-properties</a>

        <div style={marginBox}>
          <table border={1} style={marginTable}>
            <thead style={{background:'#f8f5ec'}}>
              <tr>
                <th align="left" style={{padding:5}}>ชนิด</th>
                <th align="left" style={{padding:5}}>สิ่งที่ต้องการเทสต์</th>
                <th align="left" style={{padding:5}}>ตัวอย่างเรื่องที่เทสต์</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td align="left" style={{padding:5}}><strong>Functional Acceptance Testing</strong></td>
                <td align="left" style={{padding:5}}>Functional Requirement ของระบบ</td>
                <td align="left" style={{padding:5}}>ลูกค้าสามารถซื้อของได้</td>
              </tr>

              <tr>
                <td align="left" style={{padding:5}}><strong>System Integration Testing</strong></td>
                <td align="left" style={{padding:5}}>ระบบของเราสามารถทำงานกับระบบอื่นๆ (External Dependencies) ได้ถูกต้องหรือไม่</td>
                <td align="left" style={{padding:5}}>มีการตัดเงินจากบัญชีธนาคารของผู้ใช้อย่างถูกต้อง</td>
              </tr>

              <tr>
                <td align="left" style={{padding:5}}><strong>Component Testing</strong></td>
                <td align="left" style={{padding:5}}>ชิ้นส่วนต่างๆในระบบของเราสามารถทำงานร่วมกันได้ถูกต้อง</td>
                <td align="left" style={{padding:5}}>Ordering Component สามารถส่งคำสั่งที่ถูกต้องไปยัง Mocked Database Component</td>
              </tr>

              <tr style={{ background:'#70f32d'}}>
                <td align="left" style={{padding:5}}><strong>Unit Testing</strong></td>
                <td align="left" style={{padding:5}}>ชิ้นส่วนที่เล็กที่สุดในระบบของเราสามารถทำงานได้ถูกต้อง</td>
                <td align="left" style={{padding:5}}>คลาส Order สามารถคำนวนราคาของคำสั่งซื้อได้ถูกต้อง</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={marginBox}>
          <table border={1} style={marginTable}>
            <thead style={{background:'#f8f5ec'}}>
              <tr>
                <th align="left" style={{padding:5}}>ชนิด</th>
                <th style={{padding:5}}>System Verification</th>
                <th style={{padding:5}}>Automation</th>
                <th style={{padding:5}}>Speed</th>
                <th style={{padding:5}}>Flakiness</th>
                <th style={{padding:5}}>Brittleness</th>
                <th style={{padding:5}}>Failure Isolation</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td align="left" style={{padding:5}}><strong>Functional Acceptance Testing</strong></td>
                <td style={{padding:5}}>สูง</td>
                <td style={{padding:5}}>ยาก</td>
                <td style={{padding:5}}>ช้ามาก</td>
                <td style={{padding:5}}>แย่มาก</td>
                <td style={{padding:5}}>แย่</td>
                <td style={{padding:5}}>แย่มาก</td>
              </tr>

              <tr>
                <td align="left" style={{padding:5}}><strong>System Integration Testing</strong></td>
                <td style={{padding:5}}>สูง</td>
                <td style={{padding:5}}>ยาก</td>
                <td style={{padding:5}}>ช้า</td>
                <td style={{padding:5}}>แย่</td>
                <td style={{padding:5}}>กลาง</td>
                <td style={{padding:5}}>แย่</td>
              </tr>

              <tr>
                <td align="left" style={{padding:5}}><strong>Component Testing</strong></td>
                <td style={{padding:5}}>กลาง</td>
                <td style={{padding:5}}>กลาง</td>
                <td style={{padding:5}}>กลาง</td>
                <td style={{padding:5}}>ดี</td>
                <td style={{padding:5}}>กลาง</td>
                <td style={{padding:5}}>กลาง</td>
              </tr>

              <tr style={{ background:'#70f32d'}}>
                <td align="left" style={{padding:5}}><strong>Unit Testing</strong></td>
                <td style={{padding:5}}>ต่ำ</td>
                <td style={{padding:5}}>ง่าย</td>
                <td style={{padding:5}}>เร็วมาก</td>
                <td style={{padding:5}}>ดี</td>
                <td style={{padding:5}}>ดี</td>
                <td style={{padding:5}}>ดีมาก</td>
              </tr>
            </tbody>
          </table>

        </div>


        <div style={marginBox}>
          <table border={1} style={marginTable}>
            <thead style={{background:'#f8f5ec'}}>
              <tr>
                <th align="left" style={{padding:5}}>คุณสมบัติ</th>
                <th align="left" style={{padding:5}}>ผลกระทบ</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td align="left" style={{padding:5}}>System Verification</td>
                <td align="left" style={{padding:5}}>ความมั่นใจว่าระบบทำงานได้ถูกต้อง</td>
              </tr>

              <tr>
                <td align="left" style={{padding:5}}>Automation</td>
                <td align="left" style={{padding:5}}>ความเร็วในการพัฒนา, Effort ในการเทสต์</td>
              </tr>

              <tr>
                <td align="left" style={{padding:5}}>Speed</td>
                <td align="left" style={{padding:5}}>ความเร็วในการพัฒนา, โค้ดขึ้น Production ได้เร็ว (CD)</td>
              </tr>

              <tr>
                <td align="left" style={{padding:5}}>Flakiness</td>
                <td align="left" style={{padding:5}}>Effort ในการสร้างและดูแลเทสต์, โค้ดขึ้น Production ได้เร็ว (CD)</td>
              </tr>

              <tr>
                <td align="left" style={{padding:5}}>Brittleness</td>
                <td align="left" style={{padding:5}}>ความเร็วในการพัฒนา, Effort ในการสร้างและดูแลเทสต์</td>
              </tr>

              <tr>
                <td align="left" style={{padding:5}}>Failure Isolation</td>
                <td align="left" style={{padding:5}}>Effort ในการแก้บั๊ก</td>
              </tr>
            </tbody>
          </table>

        </div>
        <div style={marginBox}>
          <h4>Method Test Naming</h4>
          <div style={{marginLeft:30}}>
            <ul>
              <li><b>MethodName_Action_Result -> GetAccountProfileByUsernameAndComId_ExcuteByTestCaseSource_AccountProfileActive</b></li>
            </ul>
          </div>
          <h4>How ?</h4>
          <div style={{marginLeft:30}}>
            <ul>
              <li><b>Have</b></li>
              <li><b>Need</b></li>
              <li><b>Returns</b></li>
            </ul>
          </div>
          <h4>Step ?</h4>
          <div style={{marginLeft:30}}>
            <ul>
              <li><b>SetUp</b></li>
              <li><b>Test</b>
                  <ul>
                    <li><b>Expected Result</b></li>
                    <li><b>Excute</b></li>
                    <li><b>Actual Result</b></li>
                  </ul>
              </li>
              <li><b>TearDown</b></li>
            </ul>
          </div>
          <h4>Attribute</h4>
          <div style={{marginLeft:30}}>
            <ul>
              <li><b>Test</b></li>
              <li><b>TestCase( Paramater )</b></li>
              <li><b>TestCaseSource( xxx ref )</b></li>
            </ul>
          </div>
          <h4 style={{color:'red'}}><b>Problem</b></h4>
          <div style={{marginLeft:30}}>
            <ul>
              <li><b>How to mock</b></li>
              <li><b>Standard Code</b></li>
              <li><b>Store Procedure</b></li>
              <li><b>Dependencies Class, Method</b></li>
              <li><b>Business Logic</b></li>
              <li><b>Test Case</b></li>
              <li><b>Structure</b></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}

export default UnitTestPage
