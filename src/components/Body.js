import React from "react";
import BlogCard from "./BlogCard";
import "./Body.css";
import BodyTopImg from "../assets/body-topimg.png";
import WomanImg from "../assets/woman-img.png";
import ServicesImg from "../assets/services-img.png";

const Body = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mt-5 mx-auto d-flex justify-content-center align-items-center">
            <div className="row mx-auto d-flex flex-row justify-content-center align-items-center ">
              <div className="col-10 mx-auto d-flex justify-content-center align-items-center">
                <img src={BodyTopImg} alt="Bodytop Img" />
              </div>
              <div className="col-10 mt-4 mx-auto d-flex justify-content-center align-items-center">
                <img src={WomanImg} alt="Woman Img" className="woman-img" />
              </div>
              <div className="col-10 mt-3 mx-auto d-flex justify-content-center align-items-center">
                <h2>Jane Doe</h2>
              </div>
              <div className="col-6 mt-2 text-center mx-auto d-flex justify-content-center align-items-center">
                <p>
                  Thank you for all the amazing produce and products you deliver
                  each week… you make my life so easy an bring goodness into our
                  family eating. I’ve been roasting a lot of brussel sprouts and
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid newsletter">
        <div className="row">
          <div className="col-10 mt-5 mx-auto d-flex justify-content-center align-items-center">
            <div className="row mx-auto d-flex flex-row justify-content-center align-items-center">
              <div className="col-10 mt-3 mx-auto d-flex justify-content-center align-items-center">
                <h2>Subscribe to Our Newsletter</h2>
              </div>
              <div className="col-6 mt-4 text-center mx-auto d-flex justify-content-center align-items-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 mt-4 text-center mx-auto d-flex justify-content-center align-items-center">
            <input
              type="text"
              className="news-input"
              placeholder="Enter your email address"
            />
            <span>
              <button className="news-button">Subscribe</button>
            </span>
          </div>
        </div>
      </div>
      <div className="container-fluid blog">
        <div className="row">
          <div className="col-10 mx-auto d-flex justify-content-center align-items-center">
            <div className="row mx-auto d-flex flex-row justify-content-center align-items-center ">
              <div className="col-10 mx-auto d-flex justify-content-center align-items-center">
                <img src={ServicesImg} alt="Services Img" className />
              </div>
              <div className="col-10 mt-2 mx-auto d-flex justify-content-center align-items-center">
                <h2>Read our blog</h2>
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
            <BlogCard className="blog-card" />
            <BlogCard className="blog-card" />
            <BlogCard className="blog-card" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
