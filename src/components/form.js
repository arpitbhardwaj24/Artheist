import React, { Component } from "react";
import { Button } from "reactstrap";
import "../assets/css/app.css";

const Form = () => {
  return (
    <>
      <section className="form">
        <h3
          style={{
            paddingTop: 50,
            paddingBottom: 20,
            textAlign: "center"
          }}
        >
          Embark your artistic journey with us.
        </h3>

        <div style={{ margin: "0 auto", textAlign: "center" }}>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScv0zokF3rCBNXhr_9-b4UXf7Gg5N5lJKCDq2TtgWRK6gJxPA/viewform?usp=sf_link">
            <Button
              className="form-btn"
              style={{
                backgroundColor: "#f96332",
                fontWeight: 500,
                margin: "0 auto",
              }}
            >
              Register Here
            </Button>
          </a>
        </div>
      </section>
    </>
  );
};

export default Form;
