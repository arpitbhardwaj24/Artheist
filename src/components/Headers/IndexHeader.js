/*eslint-disable*/
import React from "react";
import "../../assets/css/header.css";
// reactstrap components
import logo from "../../assets/img/artHeist_logo.png";
import { Container } from "reactstrap";
// core components  

function IndexHeader() {
  let pageHeader = React.createRef();
  let pageCurtainR = React.createRef();
  let pageCurtainL = React.createRef();
  let lensFlare = React.createRef();



  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 5;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
        lensFlare.current.style.transform =
          "translate3d(0," + windowScrollTop * 2 + "px,0)";
          let translateL = window.pageYOffset / 4;
          let percentage = 100 - window.pageYOffset / 8 ;
          pageCurtainR.current.style.width = `${percentage}%`;
          pageCurtainL.current.style.width = `${percentage}%`;
          pageCurtainR.current.style.transform = `translateX(-${translateL}px)`;
          pageCurtainL.current.style.transform = `translateX(${translateL}px)`;
          
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
            backgroundImage: "url(" + require("assets/img/bg11.jpeg") + ")",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
          ref={pageHeader}
        ></div>
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/curtainL.png") + ")",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: "3",
            // transitionDuration: "0.1s"
          }}
          ref={pageCurtainR}
        ></div>
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/curtainR.png") + ")",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: "3",
            position: "relative",
            float: "right",
            // transitionDuration: "0.1s"
          }}
          ref={pageCurtainL}
        ></div>
          <div class="light" ref={lensFlare}>
            <div class="flare one">
              <div class="flare two">
                <div class="flare five"></div>
                <div class="flare six"></div>
                <div class="flare three">
                  <div class="flare four">
                  </div>
                </div>
              </div>
            </div>
          </div>
        <Container>
          <div className="content-center brand" style={{paddingTop:100}}>
            <img src={logo} className="logo fade-in"/>
            <h1 className="h1-seo fade-in"  style={{fontWeight:300}}>Welcome to <span style={{fontWeight:600}}>Artheist.in </span>!</h1>
            {/* <h3>A beautiful Bootstrap 4 UI kit. Yours free.</h3> */}
            <p className="intro fade-in" style={{fontWeight:300}}>The platform where we help people to pursue their creative interests.</p>
{/* <p style={{fontWeight:400}}>We work for people to showcase their art, showcase their skills to a digital audience, and give their skills
all the praise they really deserve.</p> */}
          </div>
          
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
