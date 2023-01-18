import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slideshow() {
  let settings = {
    dots: true,
    infinte: true,
    speed: 500,
    slidesToshow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div id="first">
        <img src="../a-blue-box.png" alt="" width="1090" height="300" />
      </div>
      <div>
        <img src="../a-blue-box.png" alt="" width="1090" height="300" />
      </div>
      <div>
        <img src="../a-blue-box.png" alt="" width="1090" height="300" />
      </div>
    </Slider>
  );
}
