import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PromotionImage from "../../assets/promotion/pro.png"


const Section4 = () => {
  return (
    <>
    <section className='promotion_section'>
        <Container>
            <Row className='align-item-center'>
                <Col lg={6} className='text-center mb-lg-0'>
                <img src={PromotionImage}className='img-fluid' alt="Promotion"/>                
                </Col>
                <Col lg={6} className='px-5'>
                <h2>Nothing brings people together like a good burger.</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Alias molestiae in praesentium, voluptatem doloremque maxime magni 
                     cum ad iste, officiis laboriosam repellat fugiat quo corporis?
                </p>
                <ul>
                    <li>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Sed possimus eaque cumque rem praesentium asperiores.
                        </p>
                    </li>
                    <li>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Illum magnam consectetur natus?
                        </p>
                    </li>
                    <li>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </li>
                </ul>

                </Col>
            </Row>
        </Container>
    </section>
    {/*bg parallax scroll*/}
    <section className='bg_parallax_scroll'></section>
    </>
  )
}

export default Section4
