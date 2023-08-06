import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import like from '../assets/like.png'

import { RecommendationData } from "../constant/recommendationData";
import RecomendationCard from "./RecomendationCard";
export const Recommendations = () => {
  return (
    <div className="w-100">
      <Container>
        <Row style={{margin:"35px 0px"}}>
          <Col>
            <span >
              <img src={like} />
            </span>
            <span style={{margin:"5px 15px"}}>RECOMMENDED GROUPS</span>
          </Col>
        </Row>
        {RecommendationData.map((item) => {
          return (
            <RecomendationCard imgUrl={item.imgUrl} title={item.title}/>
          );
        })}
      </Container>
    </div>
  );
};
