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
    <Navbar> <Link to="/" > <img
            alt='...'
            className='logo'
            src={logo} /> </Link> </Navbar>
        <Nav className="me-auto">
        <Navbar><Link to="/" className="nav-link letraNav" >Home</Link>  </Navbar>
        <Navbar ><Link to="/Ideas/" className="nav-link letraNav" >Ideas</Link>  </Navbar>
        <Navbar>  <Link to="/Formulario/" className="nav-link letraNav" >Formulario</Link></Navbar>
    </Nav>
  </Container>
</Navbar>

</>



  )
}

