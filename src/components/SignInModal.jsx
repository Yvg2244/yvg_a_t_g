import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import "../App.css";
import illus from "../assets/illus.png";
import fb from '../assets/fb.png'
import google from '../assets/google.png'
export function SignIn(props) {
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
            <Col  style={{ margin: "10px 0px" }}>
              {" "}
              <Modal.Title id="contained-modal-title-vcenter">
               Sign In
              </Modal.Title>
            </Col>
            <Col>Don't have an account? <a onClick={()=>{
                props.setModalShow(true),
                props.setSignInModalShow(false)
            }}>Sign Up</a></Col>
          </Row>
          <Row>
            <Col>
              <Row
                style={{ padding: "3px", border: "2px solid rgb(212 212 212)" }}
              >
                <Col>
                  <input  style={{ border: "0px" }} type="email" name="" id="" placeholder="Email" />
                </Col>
              </Row>
              <Row
                style={{ padding: "3px", border: "2px solid rgb(212 212 212)" }}
              >
                <Col>
                  <input  style={{ border: "0px" }} type="password" name="" id="" placeholder="Password" />
                </Col>
              </Row>
  
         
              <Row>
                <Col>
                  <Button
                    style={{
                      width: "100%",
                      margin: "10px 0px",
                      padding:"10px,0px",
                      borderRadius: "23px",
                    }}
                    variant="primary"
                  >
                   Sign In
                  </Button>{" "}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    style={{
                      margin: "10px 0px",
                      padding:"10px,0px",
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
                      padding:"10px 0px",
                      width: "100%",
                      border: "2px solid rgb(212 212 212)",
                    }}
                    variant="light"
                  >
                  <img src={google}/>  Sign in with Google
                  </Button>{" "}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    style={{
                      margin: "10px 0px",
                      padding:"10px 0px",
                      width: "100%",
                    }}
                    variant="light"
                  >
                    Forgot Password
                  </Button>{" "}
                </Col>
              </Row>
            </Col>
            <Col className="d-none d-md-block">
              <Row>
                <img src={illus} alt="" />
              </Row>
            </Col>
          </Row>
        </Container>
      </Modal>
    );
  }