import React from 'react'

const MonitoringRealtimePage = () => {
    let marginBox = {
        marginLeft: 20,
        marginBottom: 30
    }
    let imageDiv = {
        width: 700,
        textAlign: "center"
    }
    let imageDivLeft = {
        width: 700,
        textAlign: "left"
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <h2>Monitoring Realtime Product</h2>
                    <div style={marginBox}>
                        <ul>
                            <li><h4><b>เป้าหมาย</b></h4></li>
                            <ul>
                                <li>
                                    พัฒนาระบบ Monitoring เพื่อใช้ตรวจสอบ Operation process แต่ละทีมว่ามีการทำงานอยู่ในข้อกำหนดตามความคาดหวังหรือไม่
                                </li>
                            </ul>
                        </ul>
                        <ul>
                            <li><h4><b>โครงการพัฒนา</b></h4></li>
                            <ul>
                                <li>
                                    สร้าง dashboard เพื่อตรวจสอบงานที่มีสถานะยกเลิก
                                    <ul>
                                        <li>1 แสดงงานยกเลิกแบ่งตามประกันภัย</li>
                                        <li>2 แสดงงานยกเลิกแบ่งตามประเภทงาน</li>
                                        <li>3 แสดงงานยกเลิกบนแผนที่</li>
                                        <li>4 แสดงงานยกเลิกแบ่งตามเขตของจังหวัดกรุงเทพ</li>
                                        <li>5 แสดงงานยกเลิกแบ่งตามเหตุผลการยกเลิกงาน</li>
                                        <li>6 แจ้งเตือนงานยกเลิกเมื่อถึงกำหนดตามจำนวน (Email, LINE)</li>
                                    </ul>
                                </li>
                                <li>
                                    สร้าง dashboard เพื่อแสดงงานเคลม (เคลมสด) ตามแต่ละสถานะ เพื่อตรวจสอบจำนวนงานและเวลาของงานนั่นๆ ที่มาค้างอยู่ในสถานะ ดังกล่าว
                                    <ul>
                                        <li>1 Dashboard Operation Process แสดงข้อมูลในทุกสถานะงาน (เปิดงาน, รับงาน, เริ่มงาน/กำลังเดินทาง, ถึงที่เกิดเหตุ/ปฏิบัติงาน, ส่งงาน/ตรวจสอบข้อมูลเบื้องต้น, Pre-Approved, คีย์งานแล้ว)</li>
                                        <li>2 Dashboard Department Call-Center แสดงข้อมูลสถานะเปิดงาน, งานที่เกิน SLA</li>
                                        <li>3 Dashboard Department Surveyor แสดงข้อมูลสถานะ (รับงาน, เริ่มงาน/กำลังเดินทาง, ถึงที่เกิดเหตุ/ปฏิบัติงาน), งานที่เกิน SLA</li>
                                        <li>4 Dashboard Department Supervisor แสดงข้อมูลสถานะส่งงาน/ตรวจสอบข้อมูลเบื้องต้น, งานที่เกิน SLA</li>
                                        <li>5 Dashboard Department Key แสดงข้อมูลสถานะ Pre-Approved, งานที่เกิน SLA</li>
                                    </ul>
                                </li>
                                <li>
                                    Overview Process
                                    <div style={imageDiv}>
                                    <img alt="stat" style={{ width: 800 }} src={process.env.PUBLIC_URL + "/images/monitorrealtimeproduct/overAllMonitorProcess.jpg"} />
                                     </div><br/>
                                </li>
                            </ul>
                        </ul>
                        <ul>
                            <li><h4><b>ผลการดำเนินงาน และ สรุปผล</b></h4></li>
                            <ul>
                                <li>
                                ปัญหาที่พบระหว่างดำเนินการ
                                    <ul>
                                        <li>
                                            1 ข้อมูล log เดิมที่มีการส่งจากระบบ bike มีไม่เพียงพอต่อการพัฒนา แก้ไขโดยปรับปรุงส่วนของการส่ง log จากระบบ bike และได้ deploy production เรียบร้อยแล้ว
                                        </li>
                                        <li>
                                            2 ยังขาดความรู้ด้านการจัดการ metric data เพื่อที่จะใช้ประโยชน์ให้ได้มากที่สุด แก้ไขเบื้องต้นโดย จัดการแปลงข้อมูลให้มีความเหมาะสมกับความรู้ที่มีอยู่ เพื่อใช้สร้าง dashboard ต่างๆ การแก้ไขระยะยาวต้องศึกษา เรื่อง time series, metric data เพิ่มเติม
                                        </li>
                                        <li>
                                            3 ส่วนของ database ที่ใช้ influxDB เกิดปัญหาระหว่างการบันทึก metric data ทำให้บางกรณี database หยุดการทำงานไป แก้ไขเบื้องต้นโดย ตั้งกำหนดไว้ว่าถ้า database หยุดการทำงานให้ start การทำงานขึ้นมาใหม่ การแก้ไขระยะยาวต้องหาวิธีจัดการส่วนที่ บันทึก metric data
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                สร้าง dashboard เพื่อตรวจสอบงานที่มีสถานะยกเลิก
                                    <ul>
                                        <li>1 แสดงงานยกเลิกแบ่งตามประกันภัย
                                            <div style={imageDiv}>
                                                <img alt="stat" style={{ width: 500 }} src={process.env.PUBLIC_URL + "/images/monitorrealtimeproduct/groupByInsurer.jpg"} />
                                            </div><br/>
                                        </li>
                                        <li>2 แสดงงานยกเลิกแบ่งตามประเภทงาน
                                            <div style={imageDiv}>
                                                <img alt="stat" style={{ width: 500 }} src={process.env.PUBLIC_URL + "/images/monitorrealtimeproduct/groupByTaskType.jpg"} />
                                            </div><br/>
                                        </li>
                                        <li>3 แสดงงานยกเลิกบนแผนที่
                                            <div style={imageDiv}>
                                                <img alt="stat" style={{ width: 500 }} src={process.env.PUBLIC_URL + "/images/monitorrealtimeproduct/onMap.jpg"} />
                                            </div><br/>
                                        </li>
                                        <li>4 แสดงงานยกเลิกแบ่งตามเขตของจังหวัดกรุงเทพ
                                            <div style={imageDiv}>
                                                <img alt="stat" style={{ width: 900 }} src={process.env.PUBLIC_URL + "/images/monitorrealtimeproduct/groupByAumphur.jpg"} />
                                            </div><br/>
                                        </li>
                                        <li>5 แสดงงานยกเลิกแบ่งตามเหตุผลการยกเลิกงาน
                                            <div style={imageDiv}>
                                                <img alt="stat" style={{ width: 900 }} src={process.env.PUBLIC_URL + "/images/monitorrealtimeproduct/taskReason.jpg"} />
                                            </div><br/>
                                            <div style={imageDiv}>
                                                <img alt="stat" style={{ width: 900 }} src={process.env.PUBLIC_URL + "/images/monitorrealtimeproduct/taskReasonDetail.jpg"} />
                                            </div><br/>
                                        </li>
                                        <li>6 แจ้งเตือนงานยกเลิกเมื่อถึงกำหนดตามจำนวน (Email, LINE)
                                            <div style={imageDiv}>
                                                <img alt="stat" style={{ width: 900 }} src={process.env.PUBLIC_URL + "/images/monitorrealtimeproduct/alertEmail.jpg"} />
                                            </div><br/>
                                            <div style={imageDiv}>
                                                <img alt="stat" style={{ width: 900 }} src={process.env.PUBLIC_URL + "/images/monitorrealtimeproduct/alertLine.jpg"} />
                                            </div><br/>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    สร้าง dashboard เพื่อแสดงงานเคลม (เคลมสด) ตามแต่ละสถานะ เพื่อตรวจสอบจำนวนงานและเวลาของงานนั่นๆ ที่มาค้างอยู่ในสถานะ ดังกล่าว
                                    <ul>
                                        <li>1 Dashboard Operation Process แสดงข้อมูลในทุกสถานะงาน (เปิดงาน, รับงาน, เริ่มงาน/กำลังเดินทาง, ถึงที่เกิดเหตุ/ปฏิบัติงาน, ส่งงาน/ตรวจสอบข้อมูลเบื้องต้น, Pre-Approved, คีย์งานแล้ว)
                                            <div style={imageDiv}>
                                                <img alt="stat" style={{ width: 900 }} src={process.env.PUBLIC_URL + "/images/monitorrealtimeproduct/dashboardOperationProcess.jpg"} />
                                            </div><br/>
                                        </li>
                                        <li>2 Dashboard Department Call-Center แสดงข้อมูลสถานะเปิดงาน, งานที่เกิน SLA
                                            <div style={imageDiv}>
                                                <img alt="stat" style={{ width: 900 }} src={process.env.PUBLIC_URL + "/images/monitorrealtimeproduct/dashboardCallCenter.jpg"} />
                                            </div><br/>
                                        </li>
                                        <li>3 Dashboard Department Surveyor แสดงข้อมูลสถานะ (รับงาน, เริ่มงาน/กำลังเดินทาง, ถึงที่เกิดเหตุ/ปฏิบัติงาน), งานที่เกิน SLA
                                            <div style={imageDiv}>
                                                <img alt="stat" style={{ width: 900 }} src={process.env.PUBLIC_URL + "/images/monitorrealtimeproduct/dashboardDepartmentSurveyor.jpg"} />
                                            </div><br/>
                                        </li>
                                        <li>4 Dashboard Department Supervisor แสดงข้อมูลสถานะส่งงาน/ตรวจสอบข้อมูลเบื้องต้น, งานที่เกิน SLA
                                            <div style={imageDiv}>
                                                <img alt="stat" style={{ width: 900 }} src={process.env.PUBLIC_URL + "/images/monitorrealtimeproduct/dashboardDepartmentSupervisor.jpg"} />
                                            </div><br/>
                                        </li>
                                        <li>5 Dashboard Department Key แสดงข้อมูลสถานะ Pre-Approved, งานที่เกิน SLA
                                            <div style={imageDiv}>
                                                <img alt="stat" style={{ width: 900 }} src={process.env.PUBLIC_URL + "/images/monitorrealtimeproduct/dashboardDepartmentKey.jpg"} />
                                            </div><br/>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </ul>
                        <ul>
                            <li><h4><b>ต่อยอดในอนาคต/ปรับปรุงเพิ่มเติม</b></h4></li>
                            <ul>
                                <li><span className="glyphicon glyphicon-tags" style={{ color: 'green', paddingRight: 7 }}></span>
                                    ต่อยอดในเรื่องของการ Monitor transaction ในจุดที่เกิดปัญหาล่าช้า และทำให้ส่งผลด้านลบต่อกระบวนการทำงานอื่นๆ ที่เกี่ยวข้อง เพื่อให้ทราบและสามารถแก้ไขได้ทัน
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MonitoringRealtimePage;
