import React, { Component } from 'react';

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


import "../assets/css/app.css";

import painting from "../assets/img/login.png";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

const About = () => {
    return (  
        <>
        
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <FadeInSection>
                <h1 className="title">What we do?</h1>
                <h4 className="description des">
                We organize contests with well-known artists from Instagram, ad firms & different social media handles to promote talented people like you and guess what ! The winners of each contest will be featured alongside the judge, giving ordinary people an extraordinary opportunity to showcase their skills                </h4>
              
                </FadeInSection>
                </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview" style={{paddingBottom: '0'}}>
             <img src={painting} className="lg-nv mb-20" alt="painting"/>
              <Row>
                <Col md="6" sm="12">
                  <div
                    className="image-container image-left sm-nv"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/dance.jpg") + ")"
                    }}
                  >
                    </div>
                    <p className="blockquote blockquote-danger bd">
                      "True art is characterized by an irresistible urge in the creative artist." <br></br>
                      <br></br>
                      <small>-ALBERT EINSTEIN</small>
                    </p>
                  
                </Col>
                <Col md="6" sm="12">
                  <div
                    className="image-container image-right sm-nv"
                    style={{
                      backgroundImage:
                        "url(" + require("../assets/img/login.png") + ")"
                    }}
                  ></div>
                  <h3>
                  Art has many forms, and cannot be defined into a single category. 
                  </h3>
                  <p className="des">
                  We at artHeist provide different platforms to make sure that your talent gets a chance to shine in the spotlight.
                  </p>
                  
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        
        
        </>
    );
}
 
export default About;