import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import post1 from "../assets/post1.avif";
import Card from "react-bootstrap/Card";
import "../App.css";
export const PostCard = ({ type, title, content, auther, views, imgUrl }) => {
  return (
    <Card style={{ width: "30rem",margin:"30px 0px" }}>
      <Container fluid className="card-img-container">
        <div
          className="card-img-background"
          style={{
            backgroundImage: imgUrl ,
          }}
        >
          {/* Overlay */}
        </div>
      </Container>

      <Card.Body>
        <Card.Text>{type}</Card.Text>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>

        <Card.Text>
          <span>{auther}</span> <span>{views}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
