import React from 'react'
import { Container, Row, Col,Carousel} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import StoreIOS from "../../assets/shop/appstore.png"
import StoreAndroid from "../../assets/shop/googleplay.png"
import DownloadImage from "../../assets/shop/e-shop.png"
import Brand1 from "../../assets/brands/brand-11.png"
import Brand2 from "../../assets/brands/brand-12.png"
import Brand3 from "../../assets/brands/brand-13.png"
import Brand4 from "../../assets/brands/brand-14.png"
import Brand5 from "../../assets/brands/brand-15.png"
import Brand6 from "../../assets/brands/brand-16.png"
import Brand7 from "../../assets/brands/brand-17.png"
import Brand8 from "../../assets/brands/brand-18.png"


const Section5 = () => {
  return (
    <>
    <section className='shop_section'>
        <Container>
            <Row className='align-item-center'>
                <Col lg={6} className='text-center text-lg-start mb-5 mb-lg-0'>
                <h4>Download mobile app and</h4>
                <h2>save upto 20%</h2>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Ratione deserunt in qui ex eum. Quia saepe
                    possimus laboriosam eveniet aliquam explicabo, aperiam asperiores

                </p>
                <Link to="/">
                <img src={StoreIOS} alt="IOS" className='img-fluid store me-3'/></Link>
                <Link to="/">
                <img src={StoreAndroid} alt="Android" className='img-fluid store me-3'/></Link>
                </Col>
                <Col lg={6}>
                <img src={DownloadImage} alt="e-shop" className='img-fluid' />
                </Col>

            </Row>
        </Container>
    </section>
    <section className='brand_section'>
        <Container>
            <Row>
            <Carousel>
      <Carousel.Item>
        <Carousel.Caption>
            <div className="d-flex align-item-center justify-content-between">
                <div className="brand_img">
                    <img src={Brand1} className='img-fluid' alt="brand1" />
                </div>
                <div className="brand_img">
                    <img src={Brand2} className='img-fluid' alt="brand2" />
                </div>
                <div className="brand_img">
                    <img src={Brand3} className='img-fluid' alt="brand3" />
                </div>
                <div className="brand_img">
                    <img src={Brand4} className='img-fluid' alt="brand4" />
                </div>
                <div className="brand_img">
                    <img src={Brand5} className='img-fluid' alt="brand5" />
                </div>
                <div className="brand_img">
                    <img src={Brand6} className='img-fluid' alt="brand6" />
                </div>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
            <div className="d-flex align-item-center justify-content-between">
                <div className="brand_img">
                    <img src={Brand3} className='img-fluid' alt="brand3" />
                </div>
                <div className="brand_img">
                    <img src={Brand4} className='img-fluid' alt="brand4" />
                </div>
                <div className="brand_img">
                    <img src={Brand5} className='img-fluid' alt="brand5" />
                </div>
                <div className="brand_img">
                    <img src={Brand6} className='img-fluid' alt="brand6" />
                </div>
                <div className="brand_img">
                    <img src={Brand7} className='img-fluid' alt="brand7" />
                </div>
                <div className="brand_img">
                    <img src={Brand8} className='img-fluid' alt="brand8" />
                </div>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
            </Carousel>

            </Row>
        </Container>
    </section>
    </>
  )
}

export default Section5
