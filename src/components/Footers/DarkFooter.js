/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 0 }}>
            <div
              className="copyright .col-sm-12 .col-md-6 .offset-md-3 text-center"
              id="copyright"
            >
              © {new Date().getFullYear()}, Designed by{" "}
              <Link to="/home/" >
                Artheist.in
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default DarkFooter;
