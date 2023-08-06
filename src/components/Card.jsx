import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import "../App.css";
import eye from '../assets/eye.png'
import share from '../assets/share.png'
import {BiSolidShareAlt} from 'react-icons/bi'
export const PostCard = ({
  type,
  title,
  content,
  auther,
  atherDp,
  views,
  imgUrl,
}) => {
  return (
    <Card className="post-card" style={{ width: "30rem", margin: "30px 0px" }}>
      <Container
        fluid
        style={{ padding: "0px" }}
        className="card-img-container"
      >
        <div
          className="card-img-background"
          style={{
            backgroundImage: imgUrl,
          }}
        >
          {/* Overlay */}
        </div>
      </Container>

      <Card.Body>
        <Card.Text style={{ fontWeight: "500" }}>{type}</Card.Text>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ color: "gray" }}>{content}</Card.Text>

        <Card.Text style={{ display: "flex", justifyContent: "space-around  ",alignItems:"center" }}>
          <Image
            src={atherDp}
            style={{ height: "35px", margin: "0px 15px 0px 0px" }}
            roundedCircle
          />
          <span style={{ fontWeight: "600", width: "60%" }}>{auther}</span>{" "}
          <span><img src={eye}></img></span>
          <span style={{  width: "10%" }}>{views}</span>
          <span style={{display:"flex",  backgroundColor: "#EDEEF0",height:"fit-content" ,padding:"5px", aspectRatio:"1"}}><img src={share}/></span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
