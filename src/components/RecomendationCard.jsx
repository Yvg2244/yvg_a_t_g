import React from "react";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";

const RecomendationCard = ({ imgUrl, title }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", width: "100%",justifyContent:"space-between",margin:"15px" }}>
      <div style={{ display: "flex", gap:"10px" }}>
        <span>
          <img
            src={imgUrl}
            style={{ height: "30px", borderRadius: "50%" }}
            alt=""
          />
        </span>
        <span>{title}</span>
      </div>
      <button style={{border:"none", padding:"5px 15px",borderRadius:"25px"}}>Follow</button>
    </div>
  );
};

export default RecomendationCard;
