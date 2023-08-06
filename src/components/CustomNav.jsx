import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { BiSearch } from "react-icons/bi";
import "../App.css";
import illus from "../assets/illus.png";
import logo from "../assets/logo.png";
import { SignIn } from "./SignInModal";
import mobileNav from "../assets/mobileNav.png";
import fb from '../assets/fb.png'
import google from '../assets/google.png'
const CustomNav = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [signInModalShow, setSignInModalShow] = React.useState(false);
  function RegisterModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Alert key="success" variant="success">
          Let's learn, share & inspire each other with our passion for computer
          engineering. Sign up now 🤘🏼
        </Alert>
        <Container
          style={{ padding: "10px 40px" }}
          className="modal-container modal-content-style"
        >
          <Row>
            <Col style={{ margin: "10px 0px" }}>
              {" "}
              <Modal.Title id="contained-modal-title-vcenter">
                Create Account
              </Modal.Title>
            </Col>
            <Col >
              Already have an account?{" "}
              <a
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setSignInModalShow(true), setModalShow(false);
                }}
              >
                Sign In
              </a>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row
                style={{ padding: "3px", border: "2px solid rgb(212 212 212)" }}
              >
                <Col style={{ width: "30%" }}>
                  <input
                    style={{ border: "0px" }}
                    type="text"
                    name=""
                    id=""
                    placeholder="First Name"
                  />
                </Col>
                <Col style={{ width: "30%" }}>
                  <input
                    style={{ border: "0px" }}
                    type="text"
                    name=""
                    id=""
                    placeholder="Last Name"
                  />
                </Col>
              </Row>
              <Row
                style={{ padding: "3px", border: "2px solid rgb(212 212 212)" }}
              >
                <Col>
                  <input
                    style={{ border: "0px" }}
                    type="email"
                    name=""
                    id=""
                    placeholder="Email"
                  />
                </Col>
              </Row>
              <Row
                style={{ padding: "3px", border: "2px solid rgb(212 212 212)" }}
              >
                <Col>
                  <input
                    style={{ border: "0px" }}
                    type="password"
                    name=""
                    id=""
                    placeholder="Password"
                  />
                </Col>
              </Row>

              <Row
                style={{ padding: "3px", border: "2px solid rgb(212 212 212)" }}
              >
                <Col>
                  <input
                    style={{ border: "0px" }}
                    type="password"
                    name=""
                    id=""
                    placeholder="Confirm Password"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    style={{
                      width: "100%",
                      margin: "10px 0px",
                      padding: "10px,0px",
                      borderRadius: "23px",
                    }}
                    variant="primary"
                  >
                    Create Account
                  </Button>{" "}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    style={{
                      margin: "10px 0px",
                      padding: "10px,0px",
                      width: "100%",
                      border: "2px solid rgb(212 212 212)",
                    }}
                    variant="light"
                  >
                   
                   <img src={fb}/> Sign in with Facebook
                  </Button>{" "}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    style={{
                      margin: "10px 0px",
                      padding: "10px 0px",
                      width: "100%",
                      border: "2px solid rgb(212 212 212)",
                    }}
                    variant="light"
                  >
                  <img src={google}/>  Sign in with Google
                  </Button>{" "}
                </Col>
              </Row>
            </Col>
            <Col className="d-none d-md-block">
              <Row>
                <img src={illus} alt="" />
              </Row>
              <Row style={{ fontSize: "12px" }}>
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </Row>
            </Col>
          </Row>
        </Container>
      </Modal>
    );
  }
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary d-none d-md-block navbar-custom "
      >
        <Container>
          <Row>
            {" "}
            <Navbar.Brand href="#">
              <img src={logo} alt="" />
            </Navbar.Brand>
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
                style={{
                  backgroundColor: "#F2F2F2",
                  borderRadius: "25px",
                  width: "300px",
                  padding: "10px 20px",
                }}
                aria-label="Search"
              ></Form.Control>
            </Form>
          </Row>
          <Row>
            {" "}
            <Navbar className="justify-content-end">
              <Navbar.Text>
                Create Account{" "}
                <a
                  onClick={() => setModalShow(true)}
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "blue",
                  }}
                >
                  Its Free
                </a>
              </Navbar.Text>
            </Navbar>
          </Row>
        </Container>

        <RegisterModal show={modalShow} onHide={() => setModalShow(false)} />
        <SignIn
          show={signInModalShow}
          setModalShow={setModalShow}
          setSignInModalShow={setSignInModalShow}
          onHide={() => setSignInModalShow(false)}
        />
      </Navbar>
      <div
        className="d-flex d-md-none"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          padding: "10px",
        }}
      >
        <div onClick={() => setModalShow(true)}>
          <img src={mobileNav} alt="" />
        </div>
      </div>
    </>
  );
};
export default CustomNav;
