import React from "react";
import "../assets/css/app.css";
//import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

//additional components
import Team from "components/Team";
import Main from "components/Main";

function App() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <Router>
        <IndexNavbar />
        <Switch>
          <Route path="/home/" exact component={Main} />
          <Route path="/ourTeam/" exact component={Team} />
        </Switch>
        <DarkFooter />
        <Redirect from="/" to="/home" />
      </Router>
    </>
  );
}

export default App;
