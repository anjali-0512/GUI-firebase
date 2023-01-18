import React from "react";
import "./Header.css";
import { useNavigate } from "react-router";

export default function Header() {
  let navigate = useNavigate();
  const gotologin = () => {
    navigate("/");
  };

  const gotoprofile = () => {
    navigate("/profile");
  };

  const gotochallenge = () => {
    navigate("/challenges");
  };

  const gotohome = () => {
    navigate("/home");
  };
  const gotocart = () => {
    navigate("/cart");
  };
  function menuToggle() {
    const toggleMenu = document.querySelector(".menu");
    toggleMenu.classList.toggle("active");
  }
  return (
    <div>
      <div className="header">
        <div className="logo">
          <p id="text">Logo</p>
        </div>
        <div className="right">
          <i
            className="fa fa-shopping-cart"
            aria-hidden="true"
            style={{ color: "#1fc3c0" }}
            onClick={gotocart}
          ></i>
          <img
            src="https://i.pinimg.com/236x/68/87/87/6887875f9fe29c98dd9960d97262aa92.jpg"
            alt="Profile Picture"
            onClick={menuToggle}
            className="profilepic"
          />
        </div>
      </div>
      <div className="menu">
        <ul>
          <li onClick={gotohome}>Home</li>

          <li onClick={gotoprofile}>Profile</li>
          <li onClick={gotochallenge}>Code Challenge</li>
          <li onClick={gotologin}>Logout</li>
        </ul>
      </div>{" "}
    </div>
  );
}
