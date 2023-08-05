import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CustomNav = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Row>
          {" "}
          <Navbar.Brand href="#">ATG WORLD</Navbar.Brand>
        </Row>
        <Row>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Row>
        <Row>
          {" "}
          <NavDropdown
            title="Create Account. It's free"
            id="navbarScrollingDropdown"
          >
            <NavDropdown.Item href="#action3"></NavDropdown.Item>
            <NavDropdown.Item href="#action4">Login</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Sign Up</NavDropdown.Item>
          </NavDropdown>
        </Row>
      </Container>
    </Navbar>
  );
};
export default CustomNav;
