import React from "react";
import "./Footer.css";
import FooterLogo from "../assets/footer-logo.png";
import FbLogo from "../assets/fb-logo.png";
import InLogo from "../assets/in-logo.png";
import InstaLogo from "../assets/insta-logo.png";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer-container">
        <div class="row">
          <div className="col-10 mx-auto">
            <div className="row mt-5">
              <div class="col text-start">
                <div className="col my-4">
                  <img src={FooterLogo} alt="Footer Logo footer-logo" />
                  <p className="mt-4 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                  <h6 className="mt-4 text-white">© Copyright 2020 Nature</h6>
                </div>
              </div>
              <div class="col text-start">
                <div className="col my-4">
                  <h5 className="text-white">Information</h5>
                  <ul className="text-white footer-list text-start">
                    <li>About Us</li>
                    <li>Products</li>
                    <li>Contact Us</li>
                    <li>Terms of Service</li>
                  </ul>
                </div>
              </div>
              <div class="col text-start">
                <div className="col my-4">
                  <h5 className="text-white">Follow Us</h5>
                  <div className="row">
                    <div className="col">
                      <img src={FbLogo} alt="Facebook Logo" />
                      <img src={InLogo} alt="Linkedin Logo" className="px-3" />
                      <img src={InstaLogo} alt="Instagram Logo" />
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

export default Footer;
