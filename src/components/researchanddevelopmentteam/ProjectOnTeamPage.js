import React, { useRef } from 'react'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const ProjectOnTeamPage = () => {



    const carDamageDetectionRef = useRef(null)
    const authenticationRef = useRef(null)
    const executeScroll = (ele) => scrollToRef(ele)

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
                    <h2>ProjectOnTeam</h2>
                    <div style={marginBox}>
                        <ul>
                            <li>
                                <h4>
                                    <b>Project</b>
                                </h4>
                            </li>
                            <ul>
                                <li><a onClick={() => executeScroll(carDamageDetectionRef)} style={{ cursor: 'pointer' }}>Garage CarDamageDetection</a></li>
                                <li><a onClick={() => executeScroll(authenticationRef)} style={{ cursor: 'pointer' }}>Authentication Services</a></li>
                            </ul>
                        </ul>
                        <ul>
                            <li>
                                <h4 ref={carDamageDetectionRef}>
                                    <b>Garage CarDamageDetection (Tentative date: 30/06/2020)</b>
                                </h4>
                            </li>
                            <ul>
                                <li>ใช้สำหรับจัดการงานเคลมแห้ง(ทำสีรถ) ระหว่างประกันภัย กับ อู่รถ</li>
                                <li>Bidding ระหว่างอู่นอก</li>
                                <li>As..is</li>
                                <div>
                                    <img
                                        alt="asis"
                                        style={{ width: 800 }}
                                        src={process.env.PUBLIC_URL + "/images/researchanddevelopmentteam/cardamage1.jpg"}
                                    />
                                </div>
                                <li>To..be</li>
                                <div>
                                    <img
                                        alt="asis"
                                        style={{ width: 800 }}
                                        src={process.env.PUBLIC_URL + "/images/researchanddevelopmentteam/cardamage2.jpg"}
                                    />
                                </div>
                                <li>Business Model Canvas</li>
                                <div>
                                    <img
                                        alt="asis"
                                        style={{ width: 800 }}
                                        src={process.env.PUBLIC_URL + "/images/researchanddevelopmentteam/cardamage3.jpg"}
                                    />
                                </div>
                            </ul>
                        </ul>
                        <ul>
                            <li>
                                <h4 ref={authenticationRef}>
                                    <b>Authentication Services (Tentative date: 12/06/2020)</b>
                                </h4>
                            </li>
                            <ul>
                                <li>As..is เวลามี system ใหม่ก็จะทำส่วน Authentication (Login) และ ส่วนจัดการข้อมูลผู้ใช้เอง</li>
                                <div>
                                    <img
                                        alt="asis"
                                        style={{ width: 800 }}
                                        src={process.env.PUBLIC_URL + "/images/researchanddevelopmentteam/auth1.jpg"}
                                    />
                                </div>
                                <li>To..be สร้าง Authentication Services เพื่อให้ทุก system ทั้งที่จะสร้างมาใหม่ และ ของเก่า ปรับมาใช้ที่เดียวกัน เพื่อง่ายต่อการจัดการข้อมูลผู้ใช้งานในระบบ จากที่เดียว</li>
                                <div>
                                    <img
                                        alt="asis"
                                        style={{ width: 800}}
                                        src={process.env.PUBLIC_URL + "/images/researchanddevelopmentteam/auth2.jpg"}
                                    />
                                </div>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProjectOnTeamPage