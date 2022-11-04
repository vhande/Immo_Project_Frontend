import React from "react";
import {Container} from 'react-bootstrap'
import {FiExternalLink} from 'react-icons/fi'

function Footer() {
  return (
    <Container fluid className="footer bg-light m-0 p-0 " style={{"color":"var(--blue)"}}>
        <div className="d-flex justify-content-evenly align-items-between p-2">
    
          <div>
          <h5>About</h5>
            <ul className="list-unstyled">
              <li>Immo</li>
              <a className="text-decoration-none" rel="noreferrer"  target="_blank" style={{"color":"var(--blue)"}} href="https://www.linkedin.com"><li className="d-flex align-items-center ">Jobs<FiExternalLink className="m-1"/></li></a>
            </ul>
        </div>
          <div>
            <h5>Help</h5>
            <ul className="list-unstyled">
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
            </div>
       
        <div>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <a className="text-decoration-none" target="_blank" style={{"color":"var(--blue)"}} rel="noreferrer" href="https://www.facebook.com"><li className="d-flex align-items-center ">Facebook<FiExternalLink className="m-1"/></li></a>
              <a className="text-decoration-none" rel="noreferrer"  target="_blank" style={{"color":"var(--blue)"}} href="https://www.twitter.com"><li className="d-flex align-items-center ">Twitter<FiExternalLink className="m-1"/></li></a>
              <a className="text-decoration-none" rel="noreferrer"  target="_blank" style={{"color":"var(--blue)"}} href="https://www.instagram.com"><li className="d-flex align-items-center ">Instagram<FiExternalLink className="m-1"/></li></a>
            </ul>
            </div>

        </div>
       

<hr className="m-0"/>
       <div>
     
          <p className="m-0 p-2 text-center">
            &copy;{new Date().getFullYear()} IMMO | All rights reserved
          </p>
         </div>
  
    </Container>
  );
}

export default Footer;