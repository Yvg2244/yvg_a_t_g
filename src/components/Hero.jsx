import React from "react";
import Container from "react-bootstrap/Container";
import "../App.css";
import { IoMdArrowBack } from "react-icons/io";
const Hero = () => {
  return (
    <Container style={{ padding: "0px" }} fluid className="hero-container">
      <div
        className="hero-background"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=787&q=80)",
        }}
      >
        {/* Overlay */}
        <div className="hero-overlay"></div>
        <div className="d-flex hero-nav d-md-none">
          <div>
            {" "}
            <IoMdArrowBack />
          </div>
          <div>
            <button
              style={{
                color: "white",
                backgroundColor: "transparent",
                border: "2px solid white",
                borderRadius: "5px",
                padding: "10px 20px",
              }}
            >
              Join Group
            </button>
          </div>
        </div>
        <div className="hero-text">
          Computer Engineering
          <p className=" hero-subtext">
            142,765 Computer Engineers follow this
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
