import React from 'react'
import {Container, Nav, Navbar, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {BsFillPersonFill} from 'react-icons/bs'
function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className="d-flex justify-content-between">
                <Navbar.Brand href="#home">IMMO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className="nav-link text-decoration-none">For Sale</Link>
                        <Link to={'/newhouse'} className="nav-link text-decoration-none">For Rent</Link>
                        <Link to={'/contact'} className="nav-link text-decoration-none">Services</Link>
                    </Nav>
                    <Nav className="">
                        <Link to={'/ad'} className="nav-link text-decoration-none">Publish an Ad</Link>
                        <Link to={'/profile'} className="nav-link text-decoration-none"><span className="me-1"><BsFillPersonFill/></span>Log in</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header