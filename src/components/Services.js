import React from "react";
import "./Services.css";
import ServiceCards from "./ServiceCards";
import ServicesImg from "../assets/services-img.png";

const Services = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto d-flex justify-content-center align-items-center">
            <div className="row mx-auto d-flex flex-row justify-content-center align-items-center ">
              <div className="col-10 mx-auto d-flex justify-content-center align-items-center">
                <img src={ServicesImg} alt="Services Img" className />
              </div>
              <div className="col-10 mt-2 mx-auto d-flex justify-content-center align-items-center">
                <h2>Welcome to Nature</h2>
              </div>
              <div className="col-6 mt-2 text-center mx-auto d-flex justify-content-center align-items-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-10 my-5 d-flex justify-content-center align-items-center">
            <ServiceCards className="service-cards" />
            <ServiceCards className="service-cards" />
            <ServiceCards className="service-cards" />
            <ServiceCards className="service-cards" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
