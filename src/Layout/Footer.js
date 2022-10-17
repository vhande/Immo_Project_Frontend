import React from "react";
import {Col,Row, Container} from 'react-bootstrap'

function Footer() {
  return (
    <Container fluid className="bg-primary text-light">
      
        <Row>
          {/* Column1 */}
          <Col>
            <h4>About Us</h4>
            
              <li></li>
              <li></li>
              <li></li>
            
          </Col>
          {/* Column2 */}
          <Col>
            <h4>Services</h4>
            <ui className="list-unstyled">
              <li></li>
              <li></li>
              <li></li>
            </ui>
          </Col>
          {/* Column3 */}
          <Col>
            <h4>Contact Us</h4>
            <ui className="list-unstyled">
              <li>Email</li>
              <li>Whatsapp</li>
              <li>Phone</li>
            </ui>
          </Col>
        </Row>
        <hr />
        <Row>
          <p className="col-sm">
            &copy;{new Date().getFullYear()} IMMO | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </Row>
      
    </Container>
  );
}

export default Footer;