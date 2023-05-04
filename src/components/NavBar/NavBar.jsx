import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import logo from "../Images/LOGOJV.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
  return (
<>
<Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand> <img
            alt='...'
            className='logo'
            src={logo} /> <Link to="/" className="nav-link letraNav" ></Link> </Navbar.Brand>
    <Nav className="me-auto">
        <Nav.Link >Home <Link to="/" className="nav-link letraNav" ></Link>  </Nav.Link>
        <Nav.Link >Ideas<Link to="/Ideas/" className="nav-link letraNav" ></Link>  </Nav.Link>
        <Nav.Link > Formulario <Link to="/Formulario/" className="nav-link letraNav" ></Link></Nav.Link>
    </Nav>
  </Container>
</Navbar>

</>



  )
}

