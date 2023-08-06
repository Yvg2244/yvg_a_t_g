import React from "react";
import "../App.css";
import { PostCard } from "./Card";
import { postData } from "../constant/postData";
import { ImLocation2 } from "react-icons/im";
import { BiSolidPencil } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Recommendations } from "./Recommendations";

const PostSection = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        justifyContent: "space-around",
        marginTop: "20px",
      }}
    >
      <div className="post-section" >
        {postData.map((item) => {
          return (
            <PostCard
              type={item.type}
              title={item.title}
              content={item.content}
              auther={item.auther}
              atherDp={item.atherDp}
              views={item.views}
              imgUrl={item.imgUrl}
            />
          );
        })}
      </div>
      <div className="d-none d-md-flex" style={{display:"flex",flexDirection:"column"}}>
        <div style={{margin:"10px 10px"}}>
          <ImLocation2 />
          <input
            type="text"
            className="location"
            placeholder="Enter Location"
            name=""
            id=""
          ></input>
          <BiSolidPencil />
        </div>
        <div style={{ color: "gray",width:"20rem" }}>
          <AiOutlineInfoCircle />
          <span style={{ color: "gray",margin:"10px 10px " }}>
            Your location will help us serve better and extend a personalised
            experience.
          </span>
        </div>
        <Recommendations/>
      </div>
    </div>
  );
};

export default PostSection;
