import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image1 from "../../assets/menu/burger-11.jpg"
import Image2 from "../../assets/menu/burger-12.jpg"
import Image3 from "../../assets/menu/burger-13.jpg"
import Image4 from "../../assets/menu/burger-14.jpg"
import Image5 from "../../assets/menu/burger-15.jpg"
import Image6 from "../../assets/menu/burger-16.jpg"
import Image7 from "../../assets/menu/burger-17.jpg"
import Image8 from "../../assets/menu/burger-18.jpg"
import Cards from '../../Components/Layouts/Cards'

import { Link } from 'react-router-dom'


const mockData=[
    {
    id:"0001",
    image:Image1,
    title:"Crispy Chicken"
    ,paragraph:"chicken brest , chilli sauce,tomatoes,pickles,coleslaw",
    rating:5,
    price:169

},
{
    id:"0002",
    image:Image2,
    title: "Ultimate Bacon",
    paragraph: "House patty , cheddar cheese,bacon,onion,musturd" ,
    rating: 5,
    price:159

},
{
    id:"0003",
    image:Image3,
    title: "Crispy Veg",
    paragraph: "patty , cheddar cheese,vegge,onion,tomatoes" ,
    rating: 4.5,
    price:159

},
{
    id:"0004",
    image:Image4,
    title: "Black Meat",
    paragraph: "patty , cheddar cheese,vegge,onion,tomatoes" ,
    rating: 4.5,
    price:159

},
{
    id:"0005",
    image:Image5,
    title: "Double Burger",
    paragraph: "2 patty , cheddar cheese,musturd,onion,tomatoes" ,
    rating: 4.5,
    price:159

},
{
    id:"0006",
    image:Image6,
    title: "Turkey Burger",
    paragraph: "Turkey , cheddar cheese,lettuce,onion," ,
    rating: 4,
    price:129

},
{
    id:"0007",
    image:Image7,
    title: "Smoky House",
    paragraph: "patty,cheddar cheese,lettuce,pickles,onion,tomatoes" ,
    rating: 3.5,
    price:145

},
{
    id:"0008",
    image:Image8,
    title: "Classic Burger",
    paragraph: "patty , cheddar cheese,vegge,onion," ,
    rating: 2.0,
    price:120

},

];

//Rating logical data
const renderRatingIcons=(rating)=>{
    const stars=[];

    for (let i=0; i<5; i++){
        if (rating>0.5){
            stars.push(<i key={i} className="bi bi-star-fill"></i>);
            rating--;
            }
            else if (rating>0 && rating<1){
                stars.push(<i key={"half"} className="bi bi-star-half"></i>); 
                rating--;
                }
                else {
                    stars.push(<i  key={`empty${i}`}className="bi bi-star"></i>);

    }
}
return stars;
}



const Section3 = () => {
  return (
    <section className="menu_section">
        <Container>
            <Row>
                <Col lg={{span:8,offset:2}} className='text-center mb-5'>
                <h2>OUR CRAZY BURGERS</h2>
                <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem perferendis facere aut, itaque quaerat quam accusamus dolores voluptatum a minus vero consectetur, hic rerum in.</p>
                </Col>
            </Row> 
            <Row>
                {mockData.map((cardData, index)=>(
                    <Cards
                    key={index}
                    image={cardData.image}
                    rating={cardData.rating}
                    title={cardData.title}
                    paragraph={cardData.paragraph}
                    price={cardData.price}
                    renderRatingIcons={renderRatingIcons}
                    />

))}

            </Row>
            <Row className='pt-5'>
                <Col sm={6}lg={5}>
                <div className='ads_box ads_img1 mb-5 mb-md-0'>
                    <h4 className='mb-0'>GET FREE BURGER</h4>
                    <h5>CHEESE FRIES</h5>
                    <Link to="/" className='btn btn_red px-4 rounded-0'>
                    Learn More</Link>
                </div>
                </Col>
                <Col sm={6}lg={7}>
                <div className='ads_box ads_img2 '>
                    <h4 className='mb-0'>GET FREE BURGER</h4>
                    <h5>CHEESE FRIES</h5>
                    <Link to="/" className='btn btn_red px-4 rounded-0'>
                    Learn More</Link>
                </div>
                </Col>

            </Row>
        </Container>
    </section>
  )
}

export default Section3