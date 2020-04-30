import React, { Component } from "react";
import "../assets/css/team.css";
// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

const Team = () => {
  return (
    <div className="wrapper">
      <a name="top"></a>
      <div className="section section-team text-center">
        <Container>
          <h2 className="title">Here is our team</h2>
          <div className="team">
            <Row>
              <Col md="6" sm="12" lg="3">
                <div className="team-player">
                  <img
                    alt="..."
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/aditya2.jpeg")}
                  ></img>
                  <h4 className="title">Aditya Rathore</h4>
                  {/* <p className="category text-info">Fashion</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site.
                    </p> */}

                  <Button
                    className="btn-icon btn-round"
                    color="primary"
                    href="https://instagram.com/adirathore__27?igshid=1fvgs6p5abjfu"
                    target="_blank"
                    //onClick={e => e.preventDefault()}
                  >
                    <i className="fab fa-instagram"></i>
                  </Button>

                  <Button
                    className="btn-icon btn-round"
                    color="primary"
                    href="https://www.facebook.com/aditya.rathore.330"
                    target="_blank"
                    //onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-facebook-square"></i>
                  </Button>
                  <Button
                    className="btn-icon btn-round"
                    color="primary"
                    target="_blank"
                    href="https://www.linkedin.com/in/aditya-rathore-2a0902171"
                    //onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-linkedin"></i>
                  </Button>
                </div>
              </Col>
              <Col md="6" sm="12" lg="3">
                <div className="team-player">
                  <img
                    alt="..."
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/ashu3.jpg")}
                  ></img>
                  <h4 className="title">Ashutosh Vyas</h4>
                  {/* <p className="category text-info">Model</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site.
                    </p> */}
                  <Button
                    className="btn-icon btn-round"
                    color="primary"
                    target="_blank"
                    href="https://www.instagram.com/ashutosh.vyas_11?r=nametag"
                    //onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-instagram"></i>
                  </Button>
                  <Button
                    className="btn-icon btn-round"
                    color="primary"
                    target="_blank"
                    href="https://www.facebook.com/ashutoshvyas.av"
                    // onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-facebook-square"></i>
                  </Button>
                  <Button
                    className="btn-icon btn-round"
                    color="primary"
                    target="_blank"
                    href="https://www.linkedin.com/in/ashutosh-vyas-8ab152b0"
                    // onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-linkedin"></i>
                  </Button>
                </div>
              </Col>
              <Col md="6" sm="12" lg="3">
                <div className="team-player">
                  <img
                    alt="..."
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/me1.jpeg")}
                  ></img>
                  <h4 className="title">Chahat Bhatia</h4>
                  {/* <p className="category text-info">Designer</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site.
                    </p> */}
                  <Button
                    className="btn-icon btn-round"
                    color="primary"
                    target="_blank"
                    href="https://www.instagram.com/artisticoder_cb/"
                    // onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-instagram"></i>
                  </Button>
                  <Button
                    className="btn-icon btn-round"
                    color="primary"
                    target="_blank"
                    href="https://www.facebook.com/chahat.bhatia.984"
                    // onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-facebook-square"></i>
                  </Button>
                  <Button
                    className="btn-icon btn-round"
                    color="primary"
                    href="https://www.linkedin.com/in/chahat-bhatia-5a567a160"
                    target="_blank"
                    //onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-linkedin"></i>
                  </Button>
                </div>
              </Col>

              <Col md="6" sm="12" lg="3">
                <div className="team-player">
                  <img
                    alt="..."
                    className="rounded-circle img-fluid img-raised"
                    src={require("assets/img/arpit.jpg")}
                  ></img>
                  <h4 className="title">Arpit Bhardwaj</h4>
                  {/* <p className="category text-info">Model</p>
                    <p className="description">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site.
                    </p> */}

                  <Button
                    className="btn-icon btn-round"
                    color="primary"
                    target="_blank"
                    href="https://instagram.com/maybe_arpit?igshid=1p7kkjnkhywc6"
                    //onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-instagram"></i>
                  </Button>
                  <Button
                    className="btn-icon btn-round"
                    color="primary"
                    href="https://www.facebook.com/arpit.bhardwaj.16"
                    target="_blank"
                    //onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-facebook-square"></i>
                  </Button>
                  <Button
                    className="btn-icon btn-round"
                    color="primary"
                    target="_blank"
                    href="https://www.linkedin.com/in/arpit-bhardwaj-3a170a121"
                    //onClick={(e) => e.preventDefault()}
                  >
                    <i className="fab fa-linkedin"></i>
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
          <h3 className="logo-credit">
            Logo Designed By : <span>Abhijeet Swain.{" "}
            <Button
              className="btn-icon btn-round"
              color="primary"
              target="_blank"
              href="https://instagram.com/abhijeet.swain21?igshid=ta8hbeuxvjsy"
              //onClick={(e) => e.preventDefault()}
            >
              <i className="fab fa-instagram"></i>
            </Button>
            </span>
          </h3>
        </Container>
      </div>
    </div>
  );
};

export default Team;
