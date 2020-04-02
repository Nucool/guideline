import React from 'react'

const DrivingAnalyticPage = () => {
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
                    <h2>Driving Analytic</h2>
                    <div style={marginBox}>
                        <h4>
                            <ul>
                                <li>
                                    <b>Architecture Diagram</b>
                                </li>
                            </ul>
                        </h4>
                        <div style={{ width: 700, position: "relative", textAlign: 'center' }}>
                            <img
                                alt="asis"
                                style={{ width: 600 }}
                                src={process.env.PUBLIC_URL + "/images/drivinganalytic/driving_0.jpg"}
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
                                สามารถรองรับ การวิเคราะห์ ข้อมูลการขับขี่รถของ App 360 ได้
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
                                <li>API สำหรับ upload RawData Tracking Location</li>
                                <li>Visualization Process ประมวลผลการขับรถ จาก RawData Tracking Location</li>
                                <li>API สำหรับการดึงข้อมูล Data ที่ผ่านการ Visualization Process แล้ว</li>
                                <li>CI/CD process เพื่อลดการทำงานในการ integration และ deployment</li>
                                <li>Unit Test เพื่อตรวจสอบความถูกต้อง และ การันตีว่า module เดิมจะไม่มีบัค</li>
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
                                API สำหรับ upload RawData Tracking Location
                                            <div>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 600 }}
                                                    src={process.env.PUBLIC_URL + "/images/drivinganalytic/driving_1.jpg"}
                                                />
                                            </div>
                                </li>
                                <li>Visualization Process ประมวลผลการขับรถ จาก RawData Tracking Location
                                            <div>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 600 }}
                                                    src={process.env.PUBLIC_URL + "/images/drivinganalytic/driving_2.jpg"}
                                                />
                                            </div>
                                            <div style={{marginTop:10}}>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 600 }}
                                                    src={process.env.PUBLIC_URL + "/images/drivinganalytic/driving_3.jpg"}
                                                />
                                            </div>
                                            <div style={{marginTop:10}}>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 600 }}
                                                    src={process.env.PUBLIC_URL + "/images/drivinganalytic/driving_4.jpg"}
                                                />
                                            </div>
                                </li>
                                <li>API สำหรับการดึงข้อมูล Data ที่ผ่านการ Visualization Process แล้ว
                                            <div>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 600 }}
                                                    src={process.env.PUBLIC_URL + "/images/drivinganalytic/driving_5.jpg"}
                                                />
                                            </div>
                                </li>
                                <li>CI/CD process เพื่อลดการทำงานในการ integration และ deployment
                                            <div>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 600 }}
                                                    src={process.env.PUBLIC_URL + "/images/drivinganalytic/driving_6.jpg"}
                                                />
                                            </div>
                                </li>
                                <li>Unit Test เพื่อตรวจสอบความถูกต้อง และ การันตีว่า module เดิมจะไม่มีบัค
                                            <div>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 600 }}
                                                    src={process.env.PUBLIC_URL + "/images/drivinganalytic/driving_7.jpg"}
                                                />
                                            </div>
                                            <div style={{marginTop:10}}>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 600 }}
                                                    src={process.env.PUBLIC_URL + "/images/drivinganalytic/driving_8.jpg"}
                                                />
                                            </div>
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
                                    >
                                    </span>
                                    เพิ่มการวิเคราะห์ การขับรถในมุมอื่นๆ เพิ่มเติม
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
                                    <div>
                                        <span
                                            className="glyphicon glyphicon-wrench"
                                            style={{ color: "orange", paddingRight: 5 }}
                                        ></span>
                                        ผลของการวิเคราะห์ ต้องให้ทางทีมที่ใช้งาน ช่วยตรวจสอบความเป็นไปได้ ของข้อมูลเพราะ สูตรที่นำมาประมวลผลมาจากการตั้ง สมมุติฐาน
                                    </div>
                                </li>
                            </ul>
                        </ul>


                    </div>
                </div>
            </div>
        </div >
    )
}

export default DrivingAnalyticPage