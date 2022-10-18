import React from 'react'
import { Container, Nav, Navbar, NavDropdown, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsFillPersonFill } from 'react-icons/bs'
function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white">
            <Container className="d-flex justify-content-between">
                <Navbar.Brand href="#home">IMMO</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Navbar.Collapse>
                            <Nav>
                                <NavDropdown
                                    title="For Sale">
                                    <Dropdown.ItemText>Type of Property</Dropdown.ItemText>
                                    <Dropdown.Divider />
                                    <NavDropdown.Item href="#">
                                        Appartment
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#">House</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Appartment</NavDropdown.Item>
                                    <NavDropdown.Item href="#">House and Appartment</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Garage</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>

                        <Navbar.Collapse>
                            <Nav>
                                <NavDropdown
                                    title="For Rent"
                                >
                                    <Dropdown.ItemText>Type of Property</Dropdown.ItemText>
                                    <Dropdown.Divider />
                                    <NavDropdown.Item href="#">
                                        Appartment
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#">House</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Appartment</NavDropdown.Item>
                                    <NavDropdown.Item href="#">House and Appartment</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Garage</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse>
                            <Nav>
                                <NavDropdown
                                    title="Services"
                                >
                                    <Dropdown.ItemText>At your service</Dropdown.ItemText>
                                    <Dropdown.Divider />
                                    <NavDropdown.Item href="#">
                                        Morgage
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#">Fire Insurance</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Nav>
                    <Nav className="">
                        <Link to={'/ad'} className="nav-link text-decoration-none">Publish an Ad</Link>
                        <Link to={'/profile'} className="nav-link text-decoration-none"><span className="me-1"><BsFillPersonFill /></span>Log in</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header