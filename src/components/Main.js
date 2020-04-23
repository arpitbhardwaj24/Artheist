import React, { Component } from 'react';


import About from "../components/about";
import SForm from "../components/form";
import IndexHeader from "components/Headers/IndexHeader.js";
import Examples from 'views/index-sections/Examples';


const Main = () => {
    return ( 
        <div className="wrapper">
          <IndexHeader />
          <About />
          <Examples />
          <SForm />
        </div>
     );
}
 
export default Main;