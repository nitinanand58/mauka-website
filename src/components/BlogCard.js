import React from "react";
import BlogImg from "../assets/blog-img.jpg";
import "./BlogCard.css";

const BlogCard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <img src={BlogImg} alt="Blog Img" className="blog-img" />
          </div>
        </div>
        <div className="col mt-3 text center">
          <h4 className="text-center blog-text">Blog Post One</h4>
        </div>
        <div className="col mt-3 text center">
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
        </div>
        <div className="col mt-3 text center">
          <p className="text-center">Read More</p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
