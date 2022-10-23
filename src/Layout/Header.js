import React from 'react'
import { Container, Nav, Navbar, NavDropdown, Dropdown, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { BsFillPersonFill } from 'react-icons/bs'
import {RiHomeSmileFill} from 'react-icons/ri'
import {FiExternalLink} from 'react-icons/fi'
import {BsSearch} from 'react-icons/bs'
import LoginModal from './LoginModal'
import {useContext} from 'react'
import Token from '/Users/hande/Desktop/Working Space/Final Project/immo/src/Context/Token'

function Header() {
    const context = useContext(Token)
    const [modalShow, setModalShow] = React.useState(false);
    const closeModal = () =>{
        setModalShow(false);
    }
    const showModal = () => {
        setModalShow(true);
    }
    return (
        <>
        
        <LoginModal closeModal={closeModal} modalShow={modalShow}/>
        <Navbar style={{"color":"var(--blue)"}} fixed="top" collapseOnSelect expand="lg" className="navbar" bg="white">
            <Container className="d-flex justify-content-between">
               
                <Link style={{"color":"var(--blue)"}} className="navbar-brand" to={'/'}><div className="d-flex align-items-center justify-content-center">
                <RiHomeSmileFill fontSize="1.5em" className="me-1"/>
                <div className="navbar-brand"> IMMO</div>
                </div></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Navbar.Collapse>
                            <Nav  >
                                <NavDropdown
                                    title="For Sale">
                                    <NavDropdown.Item href="#">House</NavDropdown.Item>
                                    <NavDropdown.Item href="#">Appartment</NavDropdown.Item>
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
                                    <NavDropdown.Item className="d-flex align-items-center" target="_blank" href="https://be.brussels/living-in-brussels/health-and-safety/fire-service">Fire Insurance<FiExternalLink className="m-1"/></NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Nav>
                    <Nav className="">
                        <Link to={'/ad'} className="nav-link text-decoration-none">Publish an Ad</Link>
                        {context.token !== "" ? 
                          <Navbar.Collapse>
                          <Nav>
                              <NavDropdown
                                  title="My Immo">
                                  <NavDropdown.Item href="#">My profile</NavDropdown.Item>
                                  <NavDropdown.Item onClick={()=> context.setToken("")}>Log out</NavDropdown.Item>
                              </NavDropdown>
                          </Nav>
                      </Navbar.Collapse>
                        : 
                        <Button onClick={showModal} className="text-start loginbtn nav-link text-decoration-none border-0 bg-white"><span className="me-1"><BsFillPersonFill /></span>Log in</Button> }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default Header