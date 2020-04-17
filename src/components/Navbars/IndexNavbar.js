import React from "react";
import "../../assets/css/nav.css";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

import { Link as Navlink } from "react-router-dom";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} id="nav" expand="lg" color="dark">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="#" id="navbar-brand"></NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Designed by Artheist.in
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end collapse"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <Navlink to="/home/" className="lk">
                  <p>Home</p>
                </Navlink>
              </NavItem>
              <NavItem>
                <Navlink to="/ourTeam/" className="lk">
                  <p>Our Team</p>
                </Navlink>
              </NavItem>
              <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="#pablo"
                  id="upgrade-to-pro"
                  onClick={(e) => e.preventDefault()}
                >
                  <p style={{ fontWeight: 700, fontSize: 18 }}>Contests</p>
                </Button>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  Coming soon!
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink href="#" target="_blank" id="twitter-tooltip">
                <i className="fab fa-google-plus"></i>
                  <p className="d-lg-none d-xl-none">Gmail</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Have a query? Mail Us.
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.facebook.com/ArtHeist-102841054726376/" target="_blank" id="facebook-tooltip">
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/artheist.in/"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
