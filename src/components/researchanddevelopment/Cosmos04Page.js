import React from 'react'

const Cosmos04Page = () => {
    let marginBox = {
        marginLeft: 20,
        marginBottom: 30
    }
    let imageDiv = {
        width: 700,
        textAlign: "center"
    }
    let imageDiv900 = {
        width: 900,
        textAlign: "left"
    };
    let imageDivLeft = {
        width: 700,
        textAlign: "left"
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <h2>ChromeExtension, CarDamageDetection Mobile and Web application (Cosmos)</h2>
                    <div style={marginBox}>
                        <ul>
                            <li>
                                <h4>
                                    <b>เป้าหมาย</b>
                                </h4>
                            </li>
                            <ul>
                                <li>
                                    Car damage detection
                                    <ul>
                                        <li>Develop a API</li>
                                        <li>Develop a chrome extension</li>
                                        <li>Develop a mobile application</li>
                                        <li>Develop a web application</li>
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
                                    Chrome extension
                                            <div>
                                        <img
                                            alt="asis"
                                            style={{ width: 600, border: 'solid 1px black' }}
                                            src={process.env.PUBLIC_URL + "/images/cosmos04/1.png"}
                                        />
                                    </div>
                                    <div className="text-center"
                                        style={{ width: 600, marginBottom: 15 }}><b>เปิด chrome extension ขึ้นมา</b></div>
                                    <div>
                                        <img
                                            alt="asis"
                                            style={{ width: 600, border: 'solid 1px black' }}
                                            src={process.env.PUBLIC_URL + "/images/cosmos04/2.png"}
                                        />
                                    </div>
                                    <div className="text-center"
                                        style={{ width: 600, marginBottom: 15 }}><b>แสดงรูปภาพทั้งหมดของงานนี้ ที่มีอยู่</b></div>
                                    <div>
                                        <img
                                            alt="asis"
                                            style={{ width: 600, border: 'solid 1px black' }}
                                            src={process.env.PUBLIC_URL + "/images/cosmos04/3.png"}
                                        />
                                    </div>
                                    <div className="text-center"
                                        style={{ width: 600, marginBottom: 15 }}><b>เลือกรูปที่ต้องการ</b></div>
                                    <div>
                                        <img
                                            alt="asis"
                                            style={{ width: 600, border: 'solid 1px black' }}
                                            src={process.env.PUBLIC_URL + "/images/cosmos04/4.png"}
                                        />
                                    </div>
                                    <div className="text-center"
                                        style={{ width: 600, marginBottom: 15 }}><b>ผลจากการ detect</b></div>
                                    <div>
                                        <img
                                            alt="asis"
                                            style={{ width: 600, border: 'solid 1px black' }}
                                            src={process.env.PUBLIC_URL + "/images/cosmos04/5.png"}
                                        />
                                    </div>
                                    <div className="text-center"
                                        style={{ width: 600, marginBottom: 15 }}><b>คลิกที่รูปเล็กเพื่อแสดงภาพเต็ม</b></div>
                                </li>
                                <li>
                                    Mobile Application
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ width: 400 }}>
                                            <div>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 300, border: 'solid 1px black' }}
                                                    src={process.env.PUBLIC_URL + "/images/cosmos04/6.png"}
                                                />
                                            </div>
                                            <div className="text-center"
                                                style={{ width: 300, marginBottom: 15 }}><b>หน้า Home</b></div>

                                        </div>
                                        <div style={{ width: 400 }}>
                                            <div>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 300, border: 'solid 1px black' }}
                                                    src={process.env.PUBLIC_URL + "/images/cosmos04/7.png"}
                                                />
                                            </div>
                                            <div className="text-center"
                                                style={{ width: 300, marginBottom: 15 }}><b>หน้า list งาน</b></div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ width: 400 }}>
                                            <div>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 300, border: 'solid 1px black' }}
                                                    src={process.env.PUBLIC_URL + "/images/cosmos04/8.png"}
                                                />
                                            </div>
                                            <div className="text-center"
                                                style={{ width: 300, marginBottom: 15 }}><b>สร้างงาน</b></div>

                                        </div>
                                        <div style={{ width: 400 }}>
                                            <div>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 300, border: 'solid 1px black' }}
                                                    src={process.env.PUBLIC_URL + "/images/cosmos04/9.png"}
                                                />
                                            </div>
                                            <div className="text-center"
                                                style={{ width: 300, marginBottom: 15 }}><b>สร้างงาน (2)</b></div>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex' }}>
                                        <div style={{ width: 400 }}>
                                            <div>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 300, border: 'solid 1px black' }}
                                                    src={process.env.PUBLIC_URL + "/images/cosmos04/10.png"}
                                                />
                                            </div>
                                            <div className="text-center"
                                                style={{ width: 300, marginBottom: 15 }}><b>เลือกรูป หรือถ่ายรูปที่จะ detect</b></div>

                                        </div>
                                        <div style={{ width: 400 }}>
                                            <div>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 300, border: 'solid 1px black' }}
                                                    src={process.env.PUBLIC_URL + "/images/cosmos04/11.png"}
                                                />
                                            </div>
                                            <div className="text-center"
                                                style={{ width: 300, marginBottom: 15 }}><b>ผลการ detect</b></div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ width: 400 }}>
                                            <div>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 300, border: 'solid 1px black' }}
                                                    src={process.env.PUBLIC_URL + "/images/cosmos04/12.png"}
                                                />
                                            </div>
                                            <div className="text-center"
                                                style={{ width: 300, marginBottom: 15 }}><b>กลับมาหน้ารายการ</b></div>

                                        </div>
                                        <div style={{ width: 400 }}>
                                            <div>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 300, border: 'solid 1px black' }}
                                                    src={process.env.PUBLIC_URL + "/images/cosmos04/13.png"}
                                                />
                                            </div>
                                            <div className="text-center"
                                                style={{ width: 300, marginBottom: 15 }}><b>รายละเอียดงานที่เคยสร้าง</b></div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    Web Application
                                    <div>
                                        <img
                                            alt="asis"
                                            style={{ width: 700, border: 'solid 1px black' }}
                                            src={process.env.PUBLIC_URL + "/images/cosmos04/web_cosmos_01.jpg"}
                                        />
                                    </div>
                                    <div className="text-center"
                                        style={{ width: 700, marginBottom: 15 }}><b>แสดงงานทั้งหมดที่ Mobile ทำรายการเข้ามา</b></div>
                                    <div>
                                        <img
                                            alt="asis"
                                            style={{ width: 700, border: 'solid 1px black' }}
                                            src={process.env.PUBLIC_URL + "/images/cosmos04/web_cosmos_02.jpg"}
                                        />
                                    </div>
                                    <div className="text-center"
                                        style={{ width: 700, marginBottom: 15 }}><b>แสดงรายละเอียดของแต่ละ งาน และ รูปความเสียหาย</b></div>
                                    <div>
                                        <img
                                            alt="asis"
                                            style={{ width: 700, border: 'solid 1px black' }}
                                            src={process.env.PUBLIC_URL + "/images/cosmos04/web_cosmos_03.jpg"}
                                        />
                                    </div>
                                    <div className="text-center"
                                        style={{ width: 700, marginBottom: 15 }}><b>สามารถแก้ไขรายละเอียดความเสียหายได้</b></div>

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
                                <li>Chrome extension
                                    <ul>
                                        <li>
                                            <span
                                                className="glyphicon glyphicon-wrench"
                                                style={{ color: "orange", paddingRight: 7 }}
                                            >
                                            </span>สามารถนำไปใช้กับระบบของ bike เพื่อ detect บาดแผลเบื้องต้นได้
                                        </li>
                                    </ul>
                                </li>

                                <li>Mobile Application
                                    <ul>
                                        <li>
                                            <span
                                                className="glyphicon glyphicon-wrench"
                                                style={{ color: "orange", paddingRight: 7 }}
                                            >
                                            </span>ยังต้องปรับปรุง UX/UI เพิ่มเติม
                                        </li>
                                    </ul>
                                </li>

                                <li>Web Application
    <ul>
                                        <li>
                                            <span
                                                className="glyphicon glyphicon-wrench"
                                                style={{ color: "orange", paddingRight: 7 }}
                                            >
                                            </span>ยังต้องปรับปรุง UX/UI เพิ่มเติม
        </li>
                                    </ul>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cosmos04Page