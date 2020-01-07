import React from 'react'

const CarWoundedPredictionPage = () => {
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
                    <h2>Car wounded prediction</h2>
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
                                src={process.env.PUBLIC_URL + "/images/carwounded/dp1.jpg"}
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
                                    สร้าง Project Car Wounded Prediction นำข้อมูลจากระบบ bike prodiction (ข้อมูลรถประกัน) มาวิเคราะห์ ความน่าจะเป็นที่จะเกิดการเสียชีวิต จากข้อมูล ประเภทรถ, สีรถ, เพศ, อายุ -- NewTechnology
                      ที่คาดหวังจะใช้{" "}
                                    <span style={{ color: "red" }}>
                                        <b>Pandas, DecisionTreeClassifier, KNeighborClassifier, RandomForestClassifier</b>
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
                                                href="https://pandas.pydata.org/"
                                                target="_blank"
                                            >
                                                Pandas (python)
                          </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.datacamp.com/community/tutorials/decision-tree-classification-python"
                                                target="_blank"
                                            >
                                                DecisionTreeClassifier
                          </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.datacamp.com/community/tutorials/k-nearest-neighbor-classification-scikit-learn"
                                                target="_blank"
                                            >
                                                KNeighborsClassifier
                          </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.datacamp.com/community/tutorials/random-forests-classifier-python"
                                                target="_blank"
                                            >
                                                RandomForestClassifier
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
                                    <div>
                                        <span
                                            className="glyphicon glyphicon-remove"
                                            style={{ color: "red", paddingRight: 5 }}
                                        ></span>
                                        ข้อมูลจำนวนมากไม่มีความถูกต้อง และ ไม่สามารถนำมาเป็นข้อมูลสำหรับใช้ Traning Model ได้
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span
                                            className="glyphicon glyphicon-ok"
                                            style={{ color: "green", paddingRight: 5 }}
                                        ></span>
                                        ดูข้อมูลเชิงสถิติ เพื่อจะทำมาวิเคราะห์
                                    </div>
                                    <img
                                        alt="asis"
                                        style={{ width: 900 }}
                                        src={process.env.PUBLIC_URL + "/images/carwounded/dp4.jpg"}
                                    />
                                </li>
                                <li>
                                    <div>
                                        <span
                                            className="glyphicon glyphicon-ok"
                                            style={{ color: "green", paddingRight: 5 }}
                                        ></span>
                                        ดูข้อมูล mean ของยี่ห้อรถยนต์ ที่เกิดอุบัติเหตุ
                                    </div>
                                    <img
                                        alt="asis"
                                        style={{ width: 900 }} 
                                        src={process.env.PUBLIC_URL + "/images/carwounded/dp5.jpg"}
                                    />
                                </li>
                                <li>
                                    <div>
                                        <span
                                            className="glyphicon glyphicon-ok"
                                            style={{ color: "green", paddingRight: 5 }}
                                        ></span>
                                        แบ่งข้อมูลที่ 50 % ที่เกิดความเสียหายถึงชีวิต
                                    </div>
                                    <img
                                        alt="asis"
                                        style={{ width: 900 }} 
                                        src={process.env.PUBLIC_URL + "/images/carwounded/dp6.jpg"}
                                    />
                                </li>
                                <li>
                                    <div>
                                        <span
                                            className="glyphicon glyphicon-ok"
                                            style={{ color: "green", paddingRight: 5 }}
                                        ></span>
                                        นำข้อมูลชุดทดสอบ เพื่อหาความแม่นยำของ model ผลเป็นดังรูป
                                    </div>
                                    <img
                                        alt="asis"
                                        style={{ width: 900 }} 
                                        src={process.env.PUBLIC_URL + "/images/carwounded/dp7.jpg"}
                                    />
                                </li>
                                <li>
                                    <span
                                        className="glyphicon glyphicon-ok"
                                        style={{ color: "green", paddingRight: 5 }}
                                    ></span>
                                    ภาพรวมโครงการ พัฒนาได้สำเร็จ สามารถใช้ DecisionTreeClassifier, KNeighborClassifier, RandomForestClassifier ในการพัฒนาโครงการนี้ได้
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
                                    ทำขึ้นเพื่อเป็นต้นแบบ และ แนวทางการเรียนรู้เกี่ยวกับ data science
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
                                        src={process.env.PUBLIC_URL + "/images/carwounded/dp2.jpg"}
                                    />
                                </li>
                                <li>
                                    <img
                                        alt="asis"
                                        style={{ width: 600 }}
                                        src={process.env.PUBLIC_URL + "/images/carwounded/dp3.jpg"}
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

export default CarWoundedPredictionPage