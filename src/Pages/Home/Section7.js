import React from 'react'
import { Container, Row,Col,Carousel } from "react-bootstrap";
import { Link } from 'react-router-dom';


const Section7 = () => {

  return (
    <section className='contact_section'>
        <Container>
            <Row className="justify-content-center">
                <Col sm={8} className="text-center">
                <h4>
                    We Guarantee 
                </h4>
                <h2>
                    30 Minutes Delivery
                </h2>
                <p>
                    We are committed to delivering your order within 30 minutes of receiving your payment. If we fail
                </p>
                <Link to ="/" className='btn btn_red px-4 py-2 rounded-0'>
                
                Call :999-888-77-66
                </Link>
                </Col>
            </Row>
        </Container>

    </section>
  )}

export default Section7