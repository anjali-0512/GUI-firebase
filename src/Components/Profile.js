import React from "react";
import "./Header.css";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Profile() {
  const name = useSelector((state) => state.user.fullname);
  const email = useSelector((state) => state.user.email);
  //const location = useLocation();
  //const name = location.state.fullname;
  //const email = location.state.email;
  return (
    <div>
      <Header />

      <div className="details">
        <img
          src="https://i.pinimg.com/236x/68/87/87/6887875f9fe29c98dd9960d97262aa92.jpg"
          alt="Profile Picture"
        />
        <h3>Name:{name}</h3>
        <h3>Email:{email}</h3>
      </div>
      <hr />
      <button className="terms">See T&C</button>
    </div>
  );
}
