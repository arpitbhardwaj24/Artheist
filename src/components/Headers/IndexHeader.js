/*eslint-disable*/
import React from "react";
import "../../assets/css/header.css";
// reactstrap components
import logo from "../../assets/img/artHeist_logo.png";
import { Container } from "reactstrap";
// core components  

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg12.jpeg") + ")",
            backgroundSize: "100% 100%",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand" style={{paddingTop:100}}>
            <img src={logo} className="logo"/>
            <h1 className="h1-seo" style={{fontWeight:380}}>Welcome to Artheist.in !</h1>
            {/* <h3>A beautiful Bootstrap 4 UI kit. Yours free.</h3> */}
            <p style={{fontWeight:400}}>Artheist is #1 contest aggregation platform for people pursuing their interest either in visual,
performance or applied arts.</p>
{/* <p style={{fontWeight:400}}>We work for people to showcase their art, showcase their skills to a digital audience, and give their skills
all the praise they really deserve.</p> */}
          </div>
          
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
