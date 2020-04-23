import React, { Component } from "react";
import "../assets/css/app.css";
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import arrow from '../assets/img/up-broken-line-arrow.svg'



const Form = () => {
  return (
    <>
      <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Embark your artistic journey with us.</h2>
            <p className="description">Our goal is to work for people and help support their work, by showcasing it to a digital audience, giving them the praise and resepct they truly deserve.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">

                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="danger"
                    href="https://docs.google.com/forms/d/e/1FAIpQLScv0zokF3rCBNXhr_9-b4UXf7Gg5N5lJKCDq2TtgWRK6gJxPA/viewform"
                    target="_blank"
                    size="lg"
                  >
                    Register Now
                  </Button>
                </div>

               
              </Col>
            </Row>
            <Row>
            <Col className="text-center ml-auto mr-auto" lg="4" md="8">

              <div className="send-button">
                  <img src={arrow} className="arrow vert-move"/>
                </div>

              </Col>
            </Row>
          </Container>
        </div>
        
    </>

  );
};

export default Form;
