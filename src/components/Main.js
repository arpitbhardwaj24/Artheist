import React, { Component } from 'react';


import About from "../components/about";
import SForm from "../components/form";
import IndexHeader from "components/Headers/IndexHeader.js";


const Main = () => {
    return ( 
        <div className="wrapper">
          <IndexHeader />
          <About />
          <SForm />
        </div>
     );
}
 
export default Main;