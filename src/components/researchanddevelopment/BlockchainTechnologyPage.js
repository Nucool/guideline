import React from "react";

const BlockchainTechnologyPage = () => {
  let marginBox = {
    marginLeft: 20,
    marginBottom: 30
  };
  let imageDiv = {
    width: 700,
    textAlign: "center"
  };
  let imageDiv900 = {
    width: 900,
    textAlign: "left"
  };
  let imageDivLeft = {
    width: 700,
    textAlign: "left"
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h2>Blockchain Technology</h2>
          <div style={marginBox}>
            <h4>
              <ul>
                <li>
                  <b>Architecture Diagram</b>
                </li>
              </ul>
            </h4>
            <div style={{ width: 900, position: "relative" }}>
              <img
                alt="asis"
                style={{ width: 900 }}
                src={process.env.PUBLIC_URL + "/images/blockchain/arch.jpg"}
              />
            </div>
          </div>
          <div style={marginBox}>
            <ul>
              <li>
                <h4>
                  <b>เป้าหมาย</b>
                </h4>
              </li>
              <ul>
                <li>
                  ศึกษา New Technology/New Programming Language คาดหวังว่าจะมี
                  จำนวน New Technology/New Programming Language ไม่ต่ำกว่า 3
                  จำนวน
                </li>
              </ul>
            </ul>
            <ul>
              <li>
                <h4>
                  <b>โครงการพัฒนา</b>
                </h4>
              </li>
              <ul>
                <li>
                  สร้าง Project Blockchain บันทึกข้อมูลงานเคลม
                  ของทุกบริษัทประกันภัย ลง blockchain และ
                  สามารถดูข้อมูลที่บันทึกอยู่ใน blockchain NewTechnology
                  ที่คาดหวังจะใช้{" "}
                  <span style={{ color: "red" }}>
                    <b>Solidity, Ganache, Drizzle Framework</b>
                  </span>
                </li>
                <li>
                  ในด้าน Business คาดหวังดังนี้
                  <ul>
                    <li>
                      1 สามารถสร้าง Token ชื่อ CLM เพื่อใช้ในการดำเนินการ
                      Services ต่างๆ ได้
                    </li>
                    <li>2 สามารถบันทึกข้อมูลการเกิดเหตุลง blockchain ได้</li>
                    <li>
                      3 สามารถค้นหาข้อมูลการเกิดเหตุ จากป้ายทะเบียนรถ หรือ
                      เลขตัวถัง โดยการดำเนินการ จะเสีย 1 CLM ต่อการค้นหาข้อมูล
                    </li>
                  </ul>
                </li>
              </ul>
            </ul>
            <ul>
              <li>
                <h4>
                  <b>ผลการดำเนินงาน</b>
                </h4>
              </li>
              <ul>
                <li>
                  New Technology
                  <ul>
                    <li>
                      <a
                        href="https://solidity.readthedocs.io/en/v0.5.11/"
                        target="_blank"
                      >
                        Solidity -> (Programming language write smartcontact)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.trufflesuite.com/docs/ganache/quickstart"
                        target="_blank"
                      >
                        Ganache -> (ganache-cli provide blockchain ethereum)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.trufflesuite.com/drizzle"
                        target="_blank"
                      >
                        Drizzle Framework -> (Framework wrap web3 and connect
                        blockchain by truffle team)
                      </a>
                    </li>
                    <li>
                      <a href="https://reactjs.org/" target="_blank">
                        React JS -> (A JavaScript library for building user
                        interfaces)
                      </a>
                    </li>
                    <li>
                      <a href="https://metamask.io/" target="_blank">
                        Metamask -> (wallet)
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </ul>
            <ul>
              <li>
                <h4>
                  <b>สรุปผล</b>
                </h4>
              </li>
              <ul>
                <li>
                  <span
                    className="glyphicon glyphicon-remove"
                    style={{ color: "red", paddingRight: 5 }}
                  ></span>
                  เจอปัญหาค่อนข้างเยอะ เพราะ ในโครงการได้ใช้ MetaMask
                  เป็นเครื่องมือจัดการ wallet ให้
                </li>
                <li>
                  <span
                    className="glyphicon glyphicon-remove"
                    style={{ color: "red", paddingRight: 5 }}
                  ></span>
                  ถ้าจะใช้ MetaMask Mobile ยังเป็น Beta version ต้องทำ
                  Application และ blockchain เป็น SSL (https)
                </li>
                <li>
                  <span
                    className="glyphicon glyphicon-ok"
                    style={{ color: "green", paddingRight: 5 }}
                  ></span>
                  ภาพรวมโครงการ พัฒนาได้สำเร็จ สามารถใช้ Solidity, Ganache,
                  Drizzle Framework และ อื่นๆ ในการพัฒนาโครงการนี้ได้
                  ตรงไปตามเป้าหมาย New Technology/New Programming Language
                  ไม่ต่ำกว่า 3 จำนวน
                </li>
                <li>
                  <span
                    className="glyphicon glyphicon-ok"
                    style={{ color: "green", paddingRight: 5 }}
                  ></span>
                  สามารถสร้าง Token ชื่อ CLM เพื่อใช้ในการดำเนินการ Services
                  ต่างๆ ได้
                </li>
                <li>
                  <span
                    className="glyphicon glyphicon-ok"
                    style={{ color: "green", paddingRight: 5 }}
                  ></span>
                  สามารถบันทึกข้อมูลการเกิดเหตุลง blockchain ได้
                </li>
                <li>
                  <span
                    className="glyphicon glyphicon-ok"
                    style={{ color: "green", paddingRight: 5 }}
                  ></span>
                  สามารถค้นหาข้อมูลการเกิดเหตุ จากป้ายทะเบียนรถ หรือ เลขตัวถัง
                  โดยการดำเนินการ จะเสีย 1 CLM ต่อการค้นหาข้อมูล
                </li>
                <li>
                  <span
                    className="glyphicon glyphicon-ok"
                    style={{ color: "green", paddingRight: 5 }}
                  ></span>
                  ภาพอธิบายภาพรวมของโครงการ
                  <ul>
                    <li>
                      <b>ความสามารถของเหรียญ</b>
                      <div style={imageDiv}>
                        <img
                          alt="exchange"
                          style={{ width: 450 }}
                          src={
                            process.env.PUBLIC_URL +
                            "/images/blockchain/exchange1.jpg"
                          }
                        />
                      </div>
                      <br />
                    </li>
                    <li>
                      <b>Scenario 1 : Exchange CLM Coin</b>
                      <div style={imageDiv}>
                        <img
                          alt="exchange2"
                          style={{ width: 900 }}
                          src={
                            process.env.PUBLIC_URL +
                            "/images/blockchain/exchange2.jpg"
                          }
                        />
                      </div>
                      <br />
                    </li>
                    <li>
                      <b>Scenario 2 : Search accident information</b>
                      <div style={imageDiv}>
                        <img
                          alt="stat3"
                          style={{ width: 900 }}
                          src={
                            process.env.PUBLIC_URL +
                            "/images/blockchain/exchange3.jpg"
                          }
                        />
                      </div>
                      <br />
                    </li>
                  </ul>
                </li>
              </ul>
            </ul>
            <ul>
              <li>
                <h4>
                  <b>ต่อยอดในอนาคต/ปรับปรุงเพิ่มเติม</b>
                </h4>
              </li>
              <ul>
                <li>
                  <span
                    className="glyphicon glyphicon-wrench"
                    style={{ color: "orange", paddingRight: 7 }}
                  ></span>
                  พัฒนาโดยหวังพึ่ง Metamask เป็น wallet เพื่อใช้บน Mobile Application  แต่ Metamask Mobile ยังเป็น version beta เลยมีข้อจำกันหลายอย่าง
                </li>
                <li>
                  <span
                    className="glyphicon glyphicon-wrench"
                    style={{ color: "orange", paddingRight: 7 }}
                  ></span>
                  ได้มีการ deploy smart contactsไปที่ TestNet (Ropsten) เลยได้รู้ว่าถ้าเป็น blockchain ที่เป็น Consensus POW จะต้องรอการ commit block (ค่อนข้างใช้เวลารอนาน 1-5 นาที)
                </li>
                <li>
                  <span
                    className="glyphicon glyphicon-tags"
                    style={{ color: "green", paddingRight: 7 }}
                  ></span>
                  สามารถนำเหรียญ ไปในด้านต่างๆ ที่จะสามารถเปิดเผยข้อมูลที่ได้รับอนุญาตแล้ว เช่น ข้อมูลการเกิดเหตุ, ประเมิณความเสียหาย
                </li>
              </ul>
            </ul>
            <ul>
              <li>
                <h4>
                  <b>ตัวอย่างหน้าจอระบบ</b>
                </h4>
              </li>
              <ul>
                <li>
                  Login Page
                  <div style={imageDiv900}>
                    <img
                      alt="stat3"
                      style={{ width: 400 }}
                      src={
                        process.env.PUBLIC_URL +
                        "/images/blockchain/blockchain1.jpg"
                      }
                    />
                    <span
                      className="glyphicon glyphicon-arrow-right"
                      style={{ color: "orange", paddingRight: 7, paddingLeft: 7 }}
                    ></span>
                    <img
                      alt="stat3"
                      style={{ width: 400 }}
                      src={
                        process.env.PUBLIC_URL +
                        "/images/blockchain/blockchain2.jpg"
                      }
                    />
                  </div>
                </li>
                <li>
                  Home Page
                  <div style={imageDiv900}>
                    <img
                      alt="stat3"
                      style={{ width: 300 }}
                      src={
                        process.env.PUBLIC_URL +
                        "/images/blockchain/blockchain3.jpg"
                      }
                    />
                  </div>
                </li>
                <li>
                  Exchange CLM Coin Page
                  <div style={imageDiv900}>
                    <img
                      alt="stat3"
                      style={{ width: 200 }}
                      src={
                        process.env.PUBLIC_URL +
                        "/images/blockchain/blockchain4.jpg"
                      }
                    />
                    <span
                      className="glyphicon glyphicon-arrow-right"
                      style={{ color: "orange", paddingRight: 7, paddingLeft: 7 }}
                    ></span>
                    <img
                      alt="stat3"
                      style={{ width: 300 }}
                      src={
                        process.env.PUBLIC_URL +
                        "/images/blockchain/blockchain5.jpg"
                      }
                    />
                    <span
                      className="glyphicon glyphicon-arrow-right"
                      style={{ color: "orange", paddingRight: 7, paddingLeft: 7 }}
                    ></span>
                    <img
                      alt="stat3"
                      style={{ width: 200 }}
                      src={
                        process.env.PUBLIC_URL +
                        "/images/blockchain/blockchain6.jpg"
                      }
                    />
                  </div>
                </li>
                <li>
                  Search accident information Page
                  <div style={imageDiv900}>
                    <img
                      alt="stat3"
                      style={{ width: 200 }}
                      src={
                        process.env.PUBLIC_URL +
                        "/images/blockchain/blockchain7.jpg"
                      }
                    />
                    <span
                      className="glyphicon glyphicon-arrow-right"
                      style={{ color: "orange", paddingRight: 7, paddingLeft: 7 }}
                    ></span>
                    <img
                      alt="stat3"
                      style={{ width: 300 }}
                      src={
                        process.env.PUBLIC_URL +
                        "/images/blockchain/blockchain8.jpg"
                      }
                    />
                    <span
                      className="glyphicon glyphicon-arrow-right"
                      style={{ color: "orange", paddingRight: 7, paddingLeft: 7 }}
                    ></span>
                    <img
                      alt="stat3"
                      style={{ width: 200 }}
                      src={
                        process.env.PUBLIC_URL +
                        "/images/blockchain/blockchain9.jpg"
                      }
                    />
                  </div>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div >
  );
};

export default BlockchainTechnologyPage;
