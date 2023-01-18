import React from "react";
import Header from "./Header";
import Product from "./Product";
import Slideshow from "./Slideshow";
import { useLocation } from "react-router-dom";

export default function Userhome() {
  //const location = useLocation();

  //const fullname = location.state.namefull;
  //const email = location.state.emailadd;
  return (
    <div>
      <Header />
      <div className="carousel">
        <Slideshow />
      </div>
      <div className="products">
        <Product />
      </div>
    </div>
  );
}
