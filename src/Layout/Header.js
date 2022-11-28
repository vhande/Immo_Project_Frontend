import React from 'react'
import { Container, Nav, Navbar, NavDropdown, Dropdown, Button } from 'react-bootstrap'
import {Link,NavLink} from 'react-router-dom'
import { BsFillPersonFill } from 'react-icons/bs'
import {RiHomeSmileFill} from 'react-icons/ri'
import {FiExternalLink} from 'react-icons/fi'
import {BsSearch} from 'react-icons/bs'
import LoginModal from './LoginModal'
import {useContext} from 'react'
import Token from '../Context/Token'


function Header() {
    const context = useContext(Token)
   
    const [modalShow, setModalShow] = React.useState(false);
    const closeModal = () =>{
        setModalShow(false);
    }
    const showModal = () => {
        setModalShow(true);
    }

    const logout = () => {
        context.setToken("")
        localStorage.removeItem("token")
        
      }
    
    return (
        <>
        
        <LoginModal closeModal={closeModal} modalShow={modalShow}/>
        <Navbar collapseOnSelect style={{"color":"var(--blue)"}} fixed="top"  expand="lg" className="navbar" bg="white">
            <Container className="d-flex justify-content-between">
               
                <NavLink style={{"color":"var(--blue)"}} className="navbar-brand" to={'/'}><div className="d-flex align-items-center justify-content-center">
                <RiHomeSmileFill fontSize="1.5em" className="me-1"/>
                <div className="navbar-brand"> IMMO</div>
                </div></NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Navbar.Collapse>
                            <Nav  >
                                <NavDropdown
                                    title="For Sale">
                                    <NavDropdown.Item to="/search/sale/house" as={Link} eventKey="0" >House</NavDropdown.Item>
                                    <NavDropdown.Item to="/search/sale/appartment" as={Link} eventKey="1" >Appartment</NavDropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item className="d-flex align-items-center" to="/advanced-search" as={Link} eventKey="2" >Advanced search<BsSearch className="m-1"/></Dropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>

                        <Navbar.Collapse>
                            <Nav>
                                <NavDropdown
                                    title="For Rent"
                                >
                                    <NavDropdown.Item to="/search/rent/house" as={Link} eventKey="3">House</NavDropdown.Item>
                                    <NavDropdown.Item to="/search/rent/appartment" as={Link} eventKey="4">Appartment</NavDropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item className="d-flex align-items-center" to="/advanced-search" as={Link} eventKey="5">Advanced search<BsSearch className="m-1"/></Dropdown.Item>
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
                        <Nav.Link to='/ad' as={Link} className="nav-link text-decoration-none" eventKey="6">Publish an Ad</Nav.Link>
                        {context.token !== null ?
                          <Navbar.Collapse>
                          <Nav>
                              <NavDropdown
                                  title="My Immo">
                                  <NavDropdown.Item to="/profile" as={Link} eventKey="7">My profile</NavDropdown.Item>
                                  <NavDropdown.Item to="/" as={Link} eventKey="8" onClick={logout}>Log out</NavDropdown.Item>
                              </NavDropdown>
                          </Nav>
                      </Navbar.Collapse>
                        : 
                        <Nav.Link onClick={showModal} as={Link} eventKey="9" className="text-start loginbtn nav-link text-decoration-none border-0 bg-white"><span className="me-1"><BsFillPersonFill /></span>Log in</Nav.Link> }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default Header