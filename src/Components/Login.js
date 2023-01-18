import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../features/store";
import "./Login.css";
import { useNavigate } from "react-router";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorpass, setErrorpass] = useState("");

  const [passwordShown, setPasswordShown] = useState(false);
  const username1 = useRef(null);
  const pass = useRef(null);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const [message, setMessage] = useState("");
  let nameid = "";
  let passid = "";
  let fullname = "";
  let emailadd = "";

  const dispatch = useDispatch();

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  let navigate = useNavigate();

  const nextpage = () => {
    navigate("/signup");
  };

  const validationname = () => {
    if (name === "") {
      setError("Please enter username");
    }
  };

  const validationboth = () => {
    if (password === "") {
      setErrorpass("Please enter password");
    }
    if (name === "" && password === "") {
      setError("Please enter username");
      setErrorpass("Please enter password");
    }

    if (name !== "" && password !== "") {
      users.filter((val) => {
        if (val.username.toLowerCase().includes(name.toLocaleLowerCase())) {
          nameid = val.id;
          fullname = val.fullname;
          emailadd = val.email;
        }
        if (val.password.toLowerCase().includes(password.toLocaleLowerCase())) {
          passid = val.id;
        }
      });

      //console.log("nameid", nameid);
      //console.log("passid", passid);

      if (nameid === passid) {
        dispatch(userActions.addName(fullname));
        dispatch(userActions.addEmail(emailadd));
        navigate("/home");
      }
      if (nameid !== passid) {
        setErrorpass("Wrong Credentials, Try again");
      }
    }
  };

  const userlogin = async (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <div className="login">
      <div className="rectangle"></div>
      <div className="details">
        <div className="head">
          <div className="circle"></div>
          <div className="text">
            <h1>APP NAME</h1>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <p className="linetwo"> adipisicing elit.</p>
          </div>
        </div>
        <form onSubmit={userlogin}>
          <input
            ref={username1}
            type="text"
            placeholder="Username"
            id="name"
            onBlur={(event) => setName(event.target.value)}
          />
          <p className="errors">{error}</p>
          <br />
          <input
            ref={pass}
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
            id="id_password"
            onBlur={(event) => setPassword(event.target.value)}
            onClick={validationname}
          />
          <i
            className="far fa-eye-slash"
            id="togglePassword"
            style={{ margin: "-30px", color: "#1fc3c0" }}
            onClick={togglePassword}
          ></i>
          <p className="errors">{errorpass}</p>

          <br />
          <button type="submit" onClick={validationboth}>
            Login
          </button>
        </form>
        <div className="bottom">
          <p className="statement">
            Dont have an account?{" "}
            <span style={{ color: "#1fc3c0" }} onClick={nextpage}>
              Signup
            </span>
          </p>
          <div className="message">{message}</div>
        </div>
      </div>
    </div>
  );
}
