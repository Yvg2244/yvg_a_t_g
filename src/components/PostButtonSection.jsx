import React from "react";
import Nav from "react-bootstrap/Nav";
import grp from '../assets/grp.png'

import "../App.css";
const PostButtonSection = ({ isSticky }) => {
  return (
    <div
      className={`post-button-section ${
        isSticky ? "sticky-top" : "centered-div"
      }`}
      style={{
        display: "flex",
        width: "100vw",
        justifyContent: "space-around",
        marginTop: "20px",
      }}
    >
      <Nav variant="underline" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/">
            <span>All Posts(32)</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">
            <span className="d-none d-md-block">Article</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">
            <span className="d-none d-md-block">Event</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">
            <span className="d-none d-md-block">Education</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">
            <span className="d-none d-md-block">Jobs</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <button className="d-block d-md-none border-0 px-3 py-2">
            Filter: All &#9660;

          </button>
        </Nav.Item>
      </Nav>
      <div className="post-button-section  d-none d-md-flex">
        <button className="post-button">
          Write a Post &#9660;

        </button>
        <button className="join-button">
         <img src={grp}/> Join Group
        </button>
      </div>
    </div>
  );
};

export default PostButtonSection;
