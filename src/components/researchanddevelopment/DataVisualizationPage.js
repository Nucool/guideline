import React from 'react'

const DataVisualizationPage = () => {
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
                    <h2>Data Visualization</h2>
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
                                src={process.env.PUBLIC_URL + "/images/datavisualization/dv1.jpg"}
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
                                    สร้าง Project Data Visualization แสดงข้อมูลการเปลี่ยนบริษัทประกันภัย เช่น จากประกันภัย A เป็นประกันภัย B -- NewTechnology
                      ที่คาดหวังจะใช้{" "}
                                    <span style={{ color: "red" }}>
                                        <b>Python, Pandas, d3js</b>
                                    </span>
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
                                                href="https://www.python.org/"
                                                target="_blank"
                                            >
                                                Python
                          </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://pandas.pydata.org/"
                                                target="_blank"
                                            >
                                                Pandas (python)
                          </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://d3js.org/"
                                                target="_blank"
                                            >
                                                d3js
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
                                    ตอนแรกจะใช้ข้อมูลเลขตัวถัง แต่ข้อมูลไม่สามารถใช้งานได้ เพราะ ข้อมูลขาดความถูกต้องตามรูป
                                    <img
                                        alt="asis"
                                        style={{ width: 900 }}
                                        src={process.env.PUBLIC_URL + "/images/datavisualization/dv2.jpg"}
                                    />
                                </li>
                                <li>
                                    <span
                                        className="glyphicon glyphicon-remove"
                                        style={{ color: "red", paddingRight: 5 }}
                                    ></span>
                                    ข้อมูลทะเบียนรถมีความหลากหลายในการกรอกข้อมูล เช่น ป้ายแดง กรอกหลากหลาย ไม่สามารถใช้งานได้ และ ข้อมูลทะเบียนระอื่นๆ ต้องทำการ cleansing data ให้พร้อมใช้งาน
                                    <img
                                        alt="asis"
                                        style={{ width: 900 }}
                                        src={process.env.PUBLIC_URL + "/images/datavisualization/dv3.jpg"}
                                    />
                                </li>
                                <li>
                                    <span
                                        className="glyphicon glyphicon-ok"
                                        style={{ color: "green", paddingRight: 5 }}
                                    ></span>
                                    ภาพรวมโครงการ พัฒนาได้สำเร็จ สามารถใช้ Python, Pandas(Python), d3js ในการพัฒนาโครงการนี้ได้
                                    ตรงไปตามเป้าหมาย New Technology/New Programming Language
                                    ไม่ต่ำกว่า 3 จำนวน
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
                                    ต้องขอปรับกระบวนการทำงานเพื่อให้ได้ ข้อมูลที่สามารถใช้ต่อในอนาคตได้
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
                                    <img
                                        alt="asis"
                                        style={{ width: 900 }}
                                        src={process.env.PUBLIC_URL + "/images/datavisualization/dv4.png"}
                                    />
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DataVisualizationPage