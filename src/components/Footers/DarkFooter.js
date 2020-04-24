/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Container,
  UncontrolledTooltip } from "reactstrap";
import '../../assets/css/app.css'

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container className="text-center">
        <nav>
          <ul>
            <li>
              <Link
                to="/"
              >
                ARTHEIST
              </Link>
            </li>
            <li>
              <Link
                to="/ourTeam/"
              >
                Our team
              </Link>
            </li>
            <li>
              <a
              id="contestFooter"
              disabled
              >
                contests
              </a>
              <UncontrolledTooltip target="#contestFooter">
              Coming Soon!
            </UncontrolledTooltip>
            </li>
          </ul>
        </nav>
        
        <div className="copyright sm-nv" id="copyright">
          © {new Date().getFullYear()}, Made with ❤️ by {" "}
          <Link
            to="/"
          >
            Artheist 
          </Link>
           .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
