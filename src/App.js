import React from "react";
import "./App.css";
import Header from "./components/Header";
import Services from "./components/Services";
import Carousel from "./components/Carousel";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Header />
      <Services />
      <Carousel />
      <Body />
      <Footer />
    </>
  );
};

export default App;
