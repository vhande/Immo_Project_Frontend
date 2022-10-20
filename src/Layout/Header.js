import React from 'react'
import { Container, Nav, Navbar, NavDropdown, Dropdown, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { BsFillPersonFill } from 'react-icons/bs'
import {RiHomeSmileFill} from 'react-icons/ri'
import {BsSearch} from 'react-icons/bs'
import LoginModal from './LoginModal'

function Header() {
    const [modalShow, setModalShow] = React.useState(false);
    const closeModal = () =>{
        setModalShow(false);
    }
    const showModal = () => {
        setModalShow(true);
    }

    return (
        <>
        <LoginModal  closeModal={closeModal} modalShow={modalShow}/>
        <Navbar fixed="top" collapseOnSelect expand="lg" className="navbar" bg="white">
            <Container className="d-flex justify-content-between">
                <div className="d-flex align-items-center justify-content-center">
                <RiHomeSmileFill fontSize="1.5em" className="me-1"/>
                <Link className="navbar-brand" to={'/'}> IMMO</Link>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Navbar.Collapse>
                            <Nav>
                                <NavDropdown
                                    title="For Sale">
                                    <NavDropdown.Item href="#">House</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Appartment</NavDropdown.Item>
                                    <NavDropdown.Item href="#">House and Appartment</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Garage</NavDropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item className="d-flex align-items-center" href="/advanced-search">Advanced search<BsSearch className="m-1"/></Dropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>

                        <Navbar.Collapse>
                            <Nav>
                                <NavDropdown
                                    title="For Rent"
                                >

                                    <NavDropdown.Item href="#">House</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Appartment</NavDropdown.Item>
                                    <NavDropdown.Item href="#">House and Appartment</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Garage</NavDropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item className="d-flex align-items-center" href="/advanced-search">Advanced search<BsSearch className="m-1"/></Dropdown.Item>
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
                        <Button onClick={showModal} className="nav-link text-decoration-none border-0 bg-dark" style={{"color":"green"}}><span className="me-1"><BsFillPersonFill /></span>Log in</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default Header