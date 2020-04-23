/*eslint-disable*/
import React from "react";

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
              <a
                href="/"
              >
                ARTHEIST
              </a>
            </li>
            <li>
              <a
                href="/#/ourTeam"
              >
                Our team
              </a>
            </li>
            <li>
              <a
              id="contestFooter"
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
          <a
            href="/"
          >
            Artheist 
          </a>
           .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
