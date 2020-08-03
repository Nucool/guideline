import React from 'react'

const SnapPOCPage = () => {
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
                    <h2>Snap Api POC</h2>
                    <div style={marginBox}>
                        <ul>
                            <li>
                                <h4>
                                    <b>เป้าหมาย</b>
                                </h4>
                            </li>
                            <ul>
                                <li>
                                    ทำความเข้าใจเกี่ยวกับ Snap Api
                    </li>
                                <li>
                                    ทดสอบ Snap Api ในเรื่องของ Usablility
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
                                <li>iOS Application โดยใช้ React Native Expo</li>
                                <li>Integration with Snap Api (PreSign, Upload, Analyze, View)</li>
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
                                    Api workflow
                                            <div>
                                        <img
                                            alt="asis"
                                            style={{ width: 400 }}
                                            src={process.env.PUBLIC_URL + "/images/snapapipoc/snap_api.jpeg"}
                                        />
                                    </div>
                                </li>
                                <li>
                                    ตัวอย่างหน้าจอ PreSign
                                            <div>
                                        <img
                                            alt="asis"
                                            style={{ width: 300 }}
                                            src={process.env.PUBLIC_URL + "/images/snapapipoc/snap1.jpg"}
                                        />
                                        <img
                                            alt="asis"
                                            style={{ width: 300, border: 'solid 1px gray', marginLeft: '20px' }}
                                            src={process.env.PUBLIC_URL + "/images/snapapipoc/snap2.jpg"}
                                        />
                                    </div>
                                    <div>
                                        <img
                                            alt="asis"
                                            style={{ width: 620, marginTop: '20px' }}
                                            src={process.env.PUBLIC_URL + "/images/snapapipoc/snapapi1.jpg"}
                                        />
                                    </div>
                                </li>
                                <li>
                                    ตัวอย่างหน้าจอ Upload
                                            <div>
                                        <img
                                            alt="asis"
                                            style={{ width: 300, border: 'solid 1px gray' }}
                                            src={process.env.PUBLIC_URL + "/images/snapapipoc/snap3.jpg"}
                                        />
                                    </div>
                                </li>
                                <li>
                                    ตัวอย่างหน้าจอ Analyze
                                            <div>
                                        <img
                                            alt="asis"
                                            style={{ width: 300, border: 'solid 1px gray' }}
                                            src={process.env.PUBLIC_URL + "/images/snapapipoc/snap4.jpg"}
                                        />
                                    </div>
                                    <div>
                                        <img
                                            alt="asis"
                                            style={{ width: 620, marginTop: '20px' }}
                                            src={process.env.PUBLIC_URL + "/images/snapapipoc/snapapi2.jpg"}
                                        />
                                    </div>
                                </li>
                                <li>
                                    ตัวอย่างหน้าจอ View
                                            <div>
                                        <img
                                            alt="asis"
                                            style={{ width: 300, border: 'solid 1px gray' }}
                                            src={process.env.PUBLIC_URL + "/images/snapapipoc/snap5.jpg"}
                                        />
                                    </div>
                                    <div>
                                        <img
                                            alt="asis"
                                            style={{ width: 620, marginTop: '20px' }}
                                            src={process.env.PUBLIC_URL + "/images/snapapipoc/snapapi3.jpg"}
                                        />
                                    </div>
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
                                        มีความสะดวก และ ง่ายต่อการใช้งาน เพราะ Postman ที่ได้มา ค่อนข้างละเอียดง่ายต่อ developer
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        ในขั้นตอนการ Analyze ต้องส่งข้อมูลเกี่ยวกับรูปภาพ เพื่อที่จะใช้เก็บลงใน Snap Api และ Blockchain ถ้าไม่ได้จากตอนถ่ายภาพ หรือ มีการเปลี่ยนแปลง Exif ของรูปก่อน จะขาดความน่าเชื่อถือของ รูปนั้นๆ
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        React Native Expo เขียนง่ายสำหรับ developer ที่พัฒนา web มา เหมาะสุดในการทำ Mobile Applcation สำหรับ POC หรือ MVP
                                    </div>
                                </li>
                                <li>

                                    <div>
                                        <img
                                            alt="asis"
                                            style={{ width: 800, marginTop: '20px' }}
                                            src={process.env.PUBLIC_URL + "/images/snapapipoc/snapusecase.jpg"}
                                        />
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

export default SnapPOCPage