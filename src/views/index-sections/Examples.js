import React from "react";
//import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row } from "reactstrap";
import art from "../../assets/img/art.svg"
import fashion from "../../assets/img/fashion.svg"
import dance from "../../assets/img/gymnast.svg"
import "assets/css/examples.css"



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


function Examples() {
  return (
    <>
      <div className="section section-examples" data-background-color="black" >
            <div id="overlay"></div>
        <Container className="text-center sm-nb">
          <Row>
            <div className="col-md-6 col-lg-4" >
              <FadeInSection>
              <div className="hvr-bounce-in cardCustom">
              <img src = {art} style={{width: '90px', padding: '10px'}} alt = "art" />
              <h4 className="heading">Performing Art</h4>
              <p>Dance, Singing, Music, Films & Theater, Story telling, Magic Shows, Stand-up Comedies</p>
              </div>
              </FadeInSection>
              
            </div>
            <div className="col-md-6 col-lg-4">
            <FadeInSection>
            <div className="hvr-bounce-in cardCustom">
            <img src = {dance} style={{width: '90px', padding: '10px'}} alt = "dance" />
              <h4 className="heading">Visual Art</h4>
              <p>Drawing, Painting, Writing, photography, designing Calligraphy, Sculpture etc</p>
            </div>
            </FadeInSection>
            </div>
            <div className="col-md-6 col-lg-4 mg-auto">
            <FadeInSection>
            <div className="hvr-bounce-in cardCustom">
            <img src = {fashion} style={{width: '90px', padding: '10px'}} alt = "fashion" />
              <h4 className="heading">Applied Art</h4>
              <p>Fashion design, Interior Design, Jewelry Design, Wood Crafts etc</p>
            </div>
            </FadeInSection>
            </div>

          </Row>
          <Button
                className="btn-round btn-custom"
                color="default"
                href="https://docs.google.com/forms/d/e/1FAIpQLScv0zokF3rCBNXhr_9-b4UXf7Gg5N5lJKCDq2TtgWRK6gJxPA/viewform"
                target="_blank"
                outline
              >
                Register Now 
              </Button>
        </Container>
      </div>
    </>
  );
}

export default Examples;
