import React from "react";
import "./ServiceCards.css";
import ServiceImg from "../assets/service-card.png";
// import ServiceImgs from "../assets/service-cards.png";

const ServiceCards = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <img src={ServiceImg} alt="Service Img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCards;
