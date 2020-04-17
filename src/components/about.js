import React, { Component } from 'react';

import example from "../assets/img/example2.jpeg";

import "../assets/css/app.css";

const About = () => {
    return (  
        <>
        <section className="about">
          <h2>What We Do ?</h2>
          <p style={{fontWeight:500,lineHeight: 2}}>
            We organize contests with well-known artists from Instagrams, ad
            firms & different social media handles to promote the skills/talent
            of skilled people like you.
          </p>
          <h4>Guess what!</h4>
          <p style={{fontWeight:500,lineHeight: 2}}>
            {" "}
            Through each contest one of the famous artists on social media who
            will be the judge of the competition will be featured along with the
            top winners on their social media & will also get a chance to
            showcase their talent, which will not only give you praise but
            rather people who like your art would like to join/connect with you
            and see more of your art.
          </p>
        </section>
        <section className="example">
          <div className="e1">
            <h2>How It Works ?</h2>
            <h3>You look curious, look at the example...</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
              voluptate repellendus, dolorem illum explicabo minus possimus.
              Cum, est quo perspiciatis dolores libero cumque maiores dolorem
              nisi et provident asperiores atque.
            </p>
          </div>
          <div className="e2">
            <img src={example} />
          </div>
        </section>
        </>
    );
}
 
export default About;