import React from 'react'

const CarDamageDetectionPage = () => {
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
                    <h2>Car Damage Detection</h2>
                    <div style={marginBox}>
                        <h4>
                            <ul>
                                <li>
                                    <b>Architecture Diagram</b>
                                </li>
                            </ul>
                        </h4>
                        <div style={{ width: 900, position: "relative", textAlign: 'center' }}>
                            <img
                                alt="asis"
                                style={{ width: 700 }}
                                src={process.env.PUBLIC_URL + "/images/cardamagedetection/overview.png"}
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
                                    ศึกษา New Technology เพื่อนำมา จับภาพบาดแผลของรถ เพื่อประเมินความเสียหาย และราคา
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
                                    สร้าง Model Car Damage Detection โดยใช้นำ data set จากระบบมา train ต่อจาก base model ของ{" "}
                                    <span style={{ color: "red" }}>
                                        <b>Mask RCNN</b>
                                    </span>
                                </li>
                                <li>สร้าง API สำหรับการรอรับการเรียกใช้งาน  Car Damage Detection</li>
                                <li>สร้าง  <span style={{ color: "red" }}>
                                    <b>Mobile app (Fultter)</b></span> เพื่อเรียกใช้งาน  Car Damage Detection</li>
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
                                    Mask RCNN
                      <ul>
                                        <li>
                                            ติดตั้ง Python3, Keras and TensorFlow  เพื่อใช้งาน Mask RCNN
                                        </li>
                                        <li>
                                            ทดสอบ Model ของ Cocodataset.org<br />
                                            <img
                                                alt="asis"
                                                style={{ width: 900 }}
                                                src={process.env.PUBLIC_URL + "/images/cardamagedetection/c1.png"}
                                            />
                                        </li>
                                        <li style={{ marginTop: '15px' }}>
                                            สร้าง data set สำหรับการระบุบาดแผล<br />
                                            <div>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 900 }}
                                                    src={process.env.PUBLIC_URL + "/images/cardamagedetection/c2.png"}
                                                />
                                            </div>
                                            <div style={{ marginLeft: '50px', marginTop: '20px' }}>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 500 }}
                                                    src={process.env.PUBLIC_URL + "/images/cardamagedetection/c3.png"}
                                                />
                                            </div>
                                        </li>
                                        <li style={{ marginTop: '15px' }}>
                                            Train model โดยใช้ GPU GTX 1080
                                            <div>
                                                model.train(dataset_train, dataset_val,
                                                learning_rate=config.LEARNING_RATE,
                                                epochs=1,
                                                layers='heads')
                                            </div>
                                            <div>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 900 }}
                                                    src={process.env.PUBLIC_URL + "/images/cardamagedetection/c4.png"}
                                                />
                                            </div>
                                        </li>
                                        <li style={{ marginTop: '15px' }}>
                                            ทดสอบ Model ที่ Train เสร็จแล้ว
                                            <div>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 900 }}
                                                    src={process.env.PUBLIC_URL + "/images/cardamagedetection/c5.png"}
                                                />
                                                <img
                                                    alt="asis"
                                                    style={{ width: 900 }}
                                                    src={process.env.PUBLIC_URL + "/images/cardamagedetection/c6.png"}
                                                />
                                                <img
                                                    alt="asis"
                                                    style={{ width: 900 }}
                                                    src={process.env.PUBLIC_URL + "/images/cardamagedetection/c7.png"}
                                                />
                                            </div>
                                        </li>
                                    </ul>
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
                                Flutter
                                <li>
                                    <img
                                        alt="asis"
                                        style={{ width: 300, border: 'solid 1px black' }}
                                        src={process.env.PUBLIC_URL + "/images/cardamagedetection/m_2.jpg"}
                                    />

                                    <img
                                        alt="asis"
                                        style={{ width: 300, border: 'solid 1px black', marginLeft: '10px' }}
                                        src={process.env.PUBLIC_URL + "/images/cardamagedetection/m_3.jpg"}
                                    />
                                    <img
                                        alt="asis"
                                        style={{ width: 300, border: 'solid 1px black', marginLeft: '10px' }}
                                        src={process.env.PUBLIC_URL + "/images/cardamagedetection/m_4.jpg"}
                                    />
                                </li>
                                <li>
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
                                    Optimize model ให้มีความแม่นยำกว่านี้ และแยกประเภทของบาดแผล
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
                                        ใช้เวลาในการเตรียม data set นาน
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span
                                            className="glyphicon glyphicon-wrench"
                                            style={{ color: "orange", paddingRight: 5 }}
                                        ></span>
                                        CPU/GPU ใน laptop ประสิทธิภาพไม่เพียงพอต่อการ train model
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span
                                            className="glyphicon glyphicon-wrench"
                                            style={{ color: "orange", paddingRight: 5 }}
                                        ></span>
                                        model ยังมีความแม่นยำของการระบุบาดแผลน้อยเกินไป อาจเกิดขึ้นจากหลายๆ สาเหตุ data set น้อยเกินไป หรือ การตั้งค่าของการ train
                                    </div>
                                </li>
                            </ul>
                        </ul>
                        <ul>
                            <li>
                                <h4>
                                    <b>สิ่งที่ทีมคาดหวัง</b>
                                </h4>
                            </li>
                            <ul> 
                                <li style={{paddingTop:10, color:'red'}}><b>Claim Di Cloud (Cosmos)</b><br/><br/>
                                    <img
                                        alt="asis"
                                        style={{ width: 900, marginLeft: '10px' }}
                                        src={process.env.PUBLIC_URL + "/images/cardamagedetection/ClaimDiCloud3.jpg"}
                                    />
                                </li>
                                <li style={{color:'red'}}><b>Sale Package</b><br/><br/>
                                    <img
                                        alt="asis"
                                        style={{ width: 900, border: 'solid 1px black', marginLeft: '10px' }}
                                        src={process.env.PUBLIC_URL + "/images/cardamagedetection/ClaimDiCloud.jpg"}
                                    /><br/><br/><br/><br/><br/><br/>
                                </li>
                            </ul>
                        </ul>


                    </div>
                </div>
            </div>
        </div >
    )
}

export default CarDamageDetectionPage