import React from "react";
import "./Carousel.css";
import CarouselImg1 from "../assets/carousel-img1.png";
import CarouselImg2 from "../assets/carousel-img2.png";
import CarouselImg3 from "../assets/carousel-img3.png";

const Carousel = () => {
  return (
    <>
      <div className="container-fluid carousel-container">
        <div className="row">
          <div className="col-10 mx-auto d-flex justify-content-center align-items-center">
            <div className="row mx-auto d-flex flex-row justify-content-center align-items-center ">
              <div className="col-10 mt-5 mx-auto d-flex justify-content-center align-items-center">
                <h2>Proudly presented by</h2>
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
          <div className="col-10 my-5 d-flex justify-content-between align-items-center">
            <img src={CarouselImg1} alt="Carousel Img" />
            <img src={CarouselImg2} alt="Carousel Img" />
            <img src={CarouselImg3} alt="Carousel Img" />
            <img src={CarouselImg2} alt="Carousel Img" />
            <img src={CarouselImg1} alt="Carousel Img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
