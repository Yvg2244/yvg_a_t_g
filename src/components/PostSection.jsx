import React from "react";
import "../App.css";
import Nav from "react-bootstrap/Nav";
import { PostCard } from "./Card";
import { postData } from "../constant/postData";
const PostSection = () => {
  return (
    <div className="post-section">
      <Nav variant="underline" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/">
            <span>All Posts(32)</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">
            <span>Article</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">
            <span>Event</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">
            <span>Education</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">
            <span>Jobs</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {postData.map((item)=>{
        return  <PostCard
        type={item.type}
        title={item.title}
        content={item.content}
        auther={item.auther}
        atherDp={item.atherDp}
        views={item.views}
        imgUrl={item.imgUrl}
      />
      })}
     
    </div>
  );
};

export default PostSection;
