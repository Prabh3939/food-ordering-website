import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Burger from "../../assets/hero/hero-2.png";
import { Link } from 'react-router-dom';

const Section1 = () => {
  return (
   <section className ="hero_section">
    <Container>
        <Row>
            <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
                
                <img src={Burger} alt="hero" className="img-fluid"/>
                <div className="price_badge">
                <div className='badge_text'>
                    <h4 className="h4_xs">Only</h4>
                    <h3 className="h3_lg">239/-</h3>
            </div>
             </div>
            </div>

            </Col>
            <Col lg ={5}>
            <div className='hero_text text-center'>
                <h1 className="text-white">New Burger</h1>
                <h2 className="text-white">With Onion</h2>
                <p className="text-white pt-2 pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iusto repellat doloribus distinctio, ab aliquid veniam qui, cum vitae enim velit quam maiores totam officiis pariatur optio quas, nam eum autem? Iusto provident sint delectus autem in unde nihil atque!/</p>
                <Link to= "/" className="btn order_now">
                Order Now
                </Link>
            </div>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Section1
