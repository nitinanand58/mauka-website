import React from "react";
import "./Header.css";
import HeaderImg from "../assets/header-img.png";
import NavImg from "../assets/nav-img.png";
import FlowerImg from "../assets/flower-img.png";

const Header = () => {
  return (
    <>
      <div className="container-fluid header-bg">
        <div className="row">
          <div className="col-10 mx-auto mt-2">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6 d-flex justify-content-end align-items-center">
                    <img src={NavImg} alt="NavLogo" className="nav-logo" />
                  </div>
                  <div className="col-6 d-flex justify-content-center align-items-center">
                    <h2 className="nav-header">organic</h2>
                  </div>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse d-flex flex-row-reverse nav-menu"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav  mb-2 mb-lg-0">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">Products</li>
                    <li className="nav-item">Blog</li>
                    <li className="nav-item">About Us</li>
                    <li>
                      <button className="nav-btn">Contact</button>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="row header-row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-5 d-flex flex-column justify-content-center align-items-left header-left">
                  <h4>Healthy life with</h4>
                  <h1 className="main-heading">Nature Organic</h1>
                  <br />
                  <p>
                    Vegetables are the edible parts of a plant that is used in
                    cooking or can be eaten now.
                  </p>
                  <br />
                  <button className="header-btn">Explore Now</button>
                </div>
                <div className="col-5 d-flex flex-column align-items-right header-right">
                  <div
                    className="header-square
                    justify-content-center
                    d-flex
                    flex-column
                    align-items-center"
                  >
                    <div className="header-image d-flex flex-column  align-items-center">
                      <img
                        src={HeaderImg}
                        alt="Header Img"
                        className="header-img"
                      />
                      <img
                        src={FlowerImg}
                        alt="Flower Img"
                        className="flower-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
