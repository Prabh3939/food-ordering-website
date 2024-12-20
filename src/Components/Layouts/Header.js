import React, { useState } from "react";
import "../../styles/HeaderStyle.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";

const Header = () => {
  const [nav ,setNav]=useState();

// SCROLL NAVBAR
const changeValueOnScroll =()=>{
  const scrollValue =document?.documentElement?.scrollTop;
  scrollValue > 100 ? setNav(true):setNav(false);

};
window .addEventListener("scroll",changeValueOnScroll);

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav===true? "sticky" :""}`}>
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="#">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="#about_section">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="#menu_section">
                Our Menu
              </Nav.Link>
              <Nav.Link as={Link} to="#promotion_section">
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to="#blog-section">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="#contact-section">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                <div className="cart">
                  <i class="bi bi-bag fs-5"></i>
                  <em className="roundpoint">2</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;