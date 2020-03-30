import React from 'react'

const CostEstimationPage = () => {
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
                    <h2>Cost Estimation</h2>
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
                                Optimize model ให้มีความแม่นยำกว่านี้ และแยกประเภทของบาดแผล
                    </li>
                                <li>
                                Mobile app เพิ่ม ข้อมูลระดับความเสียหาย และค่าเสียหายโดยประมาณ จากการ detect damage
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
                                <li>แยกระดับของบาดแผล จากข้อมูล ณ ปัจจุบัน ออกเป็น สามระดับ low, medium, high จากประเภทของบาทแผล
                                </li>
                                <li>Create a dataset</li>
                                <li>Reseach about hyperparameters for train a model</li>
                                <li>Train and evaluate model</li>
                                <li>Add cost estimate by level of damage on api</li>
                                <li>Add damage detail and cost on mobile ui</li>
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
                                จากข้อมูลประเภทของบาดแผลแบ่งออกเป็น สามระดับ
                      <ul>
                                        <li>Low = A, E, K, M, O</li>
                                        <li>Medium = B, C, F, G, L, T</li>
                                        <li>High = D, H, I, J, N, Q, R
                                            <div>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 300 }}
                                                    src={process.env.PUBLIC_URL + "/images/costestimation/1.PNG"}
                                                />
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li>Create a dataset 100 each of type (80% for train and 20% for validate dataset)
                                            <div>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 600 }}
                                                    src={process.env.PUBLIC_URL + "/images/costestimation/2.PNG"}
                                                />
                                            </div>
                                </li>
                                <li>จำนวน model ที่ train จาก hyperparameters ที่แตกต่างกันทั้งหมด
                                            <div>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 300 }}
                                                    src={process.env.PUBLIC_URL + "/images/costestimation/3.PNG"}
                                                />
                                            </div>
                                </li>
                                <li>Result detection of mask_rcnn_car_0160_resnet101_all_1st.h5
                                            <div>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 600 }}
                                                    src={process.env.PUBLIC_URL + "/images/costestimation/4.jpg"}
                                                />
                                            </div>
                                            <div style={{marginTop:10}}>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 600 }}
                                                    src={process.env.PUBLIC_URL + "/images/costestimation/12.jpg"}
                                                />
                                            </div>
                                            <div style={{marginTop:10}}>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 600 }}
                                                    src={process.env.PUBLIC_URL + "/images/costestimation/10.jpg"}
                                                />
                                            </div>
                                            <div style={{marginTop:10}}>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 600 }}
                                                    src={process.env.PUBLIC_URL + "/images/costestimation/9.jpg"}
                                                />
                                            </div>
                                            <div style={{marginTop:10}}>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 600 }}
                                                    src={process.env.PUBLIC_URL + "/images/costestimation/6.jpg"}
                                                />
                                            </div>
                                            <div style={{marginTop:10}}>
                                                <img
                                                    alt="asis"
                                                    style={{ width: 600 }}
                                                    src={process.env.PUBLIC_URL + "/images/costestimation/7.jpg"}
                                                />
                                            </div>
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
                                        src={process.env.PUBLIC_URL + "/images/costestimation/mobile_1.jpg"}
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
                                    เพิ่ม dataset ของประเภทบาดแผลอื่นๆ
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
                                        ความแม่นยำของ ในการ predict ของ model ยังไม่ได้ในระดับที่น่าพอใจถึงแม้จะเพิ่มจำนวนของ dataset แล้ว
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span
                                            className="glyphicon glyphicon-wrench"
                                            style={{ color: "orange", paddingRight: 5 }}
                                        ></span>
                                        ใช้เวลานานกับการทำ dataset
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span
                                            className="glyphicon glyphicon-wrench"
                                            style={{ color: "orange", paddingRight: 5 }}
                                        ></span>
                                        รูปบางรูปไม่สามารถ mask ได้เนื่องจากหาบาดแผลไม่เจอ
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

export default CostEstimationPage