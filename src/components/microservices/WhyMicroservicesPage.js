import React from 'react'
import { Slide } from 'react-slideshow-image'

const slideImages = [
  '/images/whymicroservices/r1.jpg',
  '/images/whymicroservices/r2.jpg',
  '/images/whymicroservices/r3.jpg',
  '/images/whymicroservices/r4.jpg',
  '/images/whymicroservices/r5.jpg',
  '/images/whymicroservices/r6.jpg',
  '/images/whymicroservices/r7.jpg',
  '/images/whymicroservices/r8.jpg',
  '/images/whymicroservices/r9.jpg',
  '/images/whymicroservices/r10.jpg',
  '/images/whymicroservices/r11.jpg',
  '/images/whymicroservices/r12.jpg',
  '/images/whymicroservices/r13.jpg',
  '/images/whymicroservices/r14.jpg',
  '/images/whymicroservices/r15.jpg',
  '/images/whymicroservices/r16.jpg',
  '/images/whymicroservices/r17.jpg',
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  autoplay: false
}

const WhyMicroservicesPage = () => {
  let marginBox = {
    marginLeft: 20,
    marginBottom: 30
  }
  let imageDiv = {
    width: 900,
    textAlign: "center"
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h2>Why Microservices</h2>
          <div style={marginBox}>
            <h4>
              <ul>
                <li><b>Presentation </b></li>
              </ul>
            </h4>
            <center>
              <div style={imageDiv}>
                <Slide {...properties}>
                  {
                    slideImages.map(item => {
                      return (
                        <div className="each-slide" key={item}>
                          <div >
                            <img alt="asis1" style={{width:'100%'}} src={process.env.PUBLIC_URL + item} />
                          </div>
                        </div>
                      )
                    })
                  }
                </Slide>
              </div>
            </center>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyMicroservicesPage
