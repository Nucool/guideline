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
                    <h2>Monitoring Realtime</h2>
                    <div style={marginBox}>
                        <h4>
                            <ul>
                                <li><b>Architecture Diagram</b></li>
                            </ul>
                        </h4>
                        <div style={{ width: 900, position: 'relative' }}>
                            <img alt="asis" style={{ width: 900 }} src={process.env.PUBLIC_URL + "/images/monitorrealtime/architecturediagram.jpg"} />
                            <a href="http://35.247.154.250:3000" target="_blank" title="grafana dashboard"
                                style={{
                                    position: 'absolute',
                                    left: '81.86%',
                                    top: '13.67%',
                                    width: '10%',
                                    height: '17%',
                                    zIndex: 2,
                                    border: 'dashed 1px red'
                                }}></a>
                        </div>
                    </div>
                    <div style={marginBox}>
                        <ul>
                            <li><h4><b>เป้าหมาย</b></h4></li>
                            <ul>
                                <li>
                                    ศึกษา New Technology/New Programming Language คาดหวังว่าจะมี จำนวน New Technology/New Programming Language ไม่ต่ำกว่า 3 จำนวน
                                </li>
                            </ul>
                        </ul>
                        <ul>
                            <li><h4><b>โครงการพัฒนา</b></h4></li>
                            <ul>
                                <li>
                                    สร้าง Project Monitoring Realtime กราฟแสดงผล ข้อมูลการเปิดงานแต่ละประกันภัย (งานเคลม, งานตรวจสภาพรถ, งาน Call-Center) New Technology ที่คาดหวังจะใช้ <span style={{ color: 'red' }}><b>Golang, InfluxDB, Grafana</b></span>
                                </li>
                                <li>
                                    ในด้าน Business คาดหวังเพื่อนำข้อมูลจากระบบ Bike มาสร้าง Metric เพื่อการวิเคราะห์ต่างๆ
                                    <ul>
                                        <li>1 วิเคราะห์การเปิดงานผ่านหน้าระบบ bike งานเยอะในช่วงเวลาไหน จัดกลุ่มตามประกันภัย สามารถใช้ข้อมูล ในการวางกลยุทธ์ Operation Process ได้</li>
                                        <li>2 วิเคราะห์จำนวน request ที่เข้ามาที่ Server ว่า request ไหนซ้ำๆ สามารถใช้ข้อมูล เพื่อในการ Scale Module นั้นๆ (ถ้า module นั้นสามารถ scale ได้)</li>
                                    </ul>
                                </li>
                            </ul>
                        </ul>
                        <ul>
                            <li><h4><b>ผลการดำเนินงาน</b></h4></li>
                            <ul>
                                <li>
                                    New Technology
                                    <ul>
                                        <li><a href="https://golang.org/doc/" target="_blank">Golang</a></li>
                                        <li><a href="https://www.influxdata.com/" target="_blank">InfluxDB</a></li>
                                        <li><a href="https://grafana.com/" target="_blank">Grafana</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </ul>
                        <ul>
                            <li><h4><b>สรุปผล</b></h4></li>
                            <ul>
                                <li><span className="glyphicon glyphicon-ok" style={{ color: 'green', paddingRight: 5 }}></span>ภาพรวมโครงการ พัฒนาได้สำเร็จ สามารถใช้ Golang, InfluxDB, Grafana และ อื่นๆ ในการพัฒนาโครงการนี้ได้ ตรงไปตามเป้าหมาย New Technology/New Programming Language ไม่ต่ำกว่า 3 จำนวน</li>
                                <li><span className="glyphicon glyphicon-ok" style={{ color: 'green', paddingRight: 5 }}></span>Golang ได้นำมาใช้สร้างเป็น API สำหรับรับ request จากระบบ bike ที่มี <span style={{ color: 'red' }}><b>Transaction Request ทุกๆ 10 วินาที ประมาณ Max: 67 transactions, Avg: 39 transactions</b></span> ในช่วงเวลา 10:00 - 11:00</li>
                                <li><span className="glyphicon glyphicon-ok" style={{ color: 'green', paddingRight: 5 }}></span>InfluxDB นั่นเป็น database ประเภท Time-Series ซึ่งเหมาะในการจัดเก็บข้อมูลในรูปแบบ Time, Metric จึงได้นำมาใช้สร้างเป็น Database เพื่อจัดเก็บ Metric ต่างๆ ซึ่งในโครงการนี้จัดเก็บเป็นสองเรื่องคือ 1 การเปิดงาน, 2 จำนวน request </li>
                                <li><span className="glyphicon glyphicon-ok" style={{ color: 'green', paddingRight: 5 }}></span>Grafana ได้นำมาใช้สร้าง Graph เพื่อ display ข้อมูลจาก InfluxDB ในโครงการนี้ได้สร้าง ทั้งหมด 4 dashboard
                                    <ul>
                                        <li>Stat Concurrent Request URL Group by 10 second
                                            <div style={imageDiv}>
                                                <img alt="stat" style={{ width: 900 }} src={process.env.PUBLIC_URL + "/images/monitorrealtime/stat_concurrent_request_url.jpg"} />
                                            </div><br/>
                                        </li>
                                        <li>Stat Concurrent CreateTask Group by 1 Hr
                                            <div style={imageDiv}>
                                                <img alt="stat2" style={{ width: 900 }} src={process.env.PUBLIC_URL + "/images/monitorrealtime/stat_concurrent_createtask.jpg"} />
                                            </div><br/>
                                        </li>
                                        <li>Stat Insurance Task
                                            <div style={imageDiv}>
                                                <img alt="stat3" style={{ width: 900 }} src={process.env.PUBLIC_URL + "/images/monitorrealtime/stat_insurance_task.jpg"} />
                                            </div><br/>
                                        </li>
                                        <li>Stat Insurance TaskType
                                            <div style={imageDiv}>
                                                <img alt="stat3" style={{ width: 900 }} src={process.env.PUBLIC_URL + "/images/monitorrealtime/stat_insurance_tasktype.jpg"} />
                                            </div><br/>
                                        </li>
                                    </ul>
                                </li>
                                <li>Other
                                    <ul>
                                        <li>Docker Compose</li>
                                        <li>Google Compute Engine config</li>
                                    </ul>
                                </li>
                            </ul>
                        </ul>
                        <ul>
                            <li><h4><b>ต่อยอดในอนาคต/ปรับปรุงเพิ่มเติม</b></h4></li>
                            <ul>
                                <li><span className="glyphicon glyphicon-wrench" style={{ color: 'orange', paddingRight: 7 }}></span>
                                    ยังไม่รองรับกรณี คัดลอกงาน ตอนนี้ตรวจจับข้อมูลเฉพาะ กรณี เปิดงานผ่านระบบ Bike
                                </li>
                                <li><span className="glyphicon glyphicon-wrench" style={{ color: 'orange', paddingRight: 7 }}></span>
                                    ยังไม่รองรับกรณี เปิดงานผ่าน API เช่น งานของอาคเนย์
                                </li>
                                <li><span className="glyphicon glyphicon-tags" style={{ color: 'green', paddingRight: 7 }}></span>
                                    ต่อยอดในเรื่องการหา สถิติ การเปิดงานในจังหวัด หรือ เขต ในช่วงเวลาไหน ไหนที่มีจำนวน การเปิดงานเยอะ
                                </li>
                                <li><span className="glyphicon glyphicon-tags" style={{ color: 'green', paddingRight: 7 }}></span>
                                    ต่อยอดในเรื่องการหา สถิติ การเรียกใช้งาน Module ไหนเยอะที่สุด เพื่อที่จะทำการ customize ใน Module นั้นๆ
                                </li>
                                <li><span className="glyphicon glyphicon-tags" style={{ color: 'green', paddingRight: 7 }}></span>
                                    ในกรณีที่มี MicroServices แล้ว จะสามารถใช้ความรู้จากโครงการนี้ ในการทำระบบ Monitoring MicroServices ต่างๆ ได้
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
