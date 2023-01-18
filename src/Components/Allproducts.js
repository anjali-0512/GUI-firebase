import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increament, decrement } from "../features/cartSlice";
import { showquantity } from "../features/carttext";

import Header from "./Header";
import "./Allproducts.css";
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
import Details from "./Details";
import { useLocation } from "react-router-dom";

export default function Allproducts() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [details, setDetails] = useState([]);
  const usersCollectionRef = collection(db, "cartItems");
  let quantities = 0;
  const quantitem = useSelector((state) => state.quant.quantity);
  const location = useLocation();

  console.log(products);

  useEffect(() => {
    function getproducts() {
      setProducts(location.state.products);
    }

    getproducts();
  }, []);

  /*useEffect(() => {
    async function requestproducts() {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const json = await res.json();
      setProducts(json);
    }

    requestproducts();
  }, []);*/

  useEffect(() => {
    const getItems = async () => {
      const data = await getDocs(usersCollectionRef);
      setDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getItems();
  }, []);

  const changethevalue = (ID) => {
    const index1 = products.findIndex((product) => product.id === ID);

    let buttonclick =
      document.getElementsByClassName("addingtocart")[index1].id;

    let btnclk = document.getElementById(buttonclick);

    /*cart.map((cartitem) => {
      if (cartitem.id === ID) {
        quantities = cartitem.quantity + 1;
      }
    });
    console.log(quantities);*/

    //dispatch(showquantity(quantities));

    localStorage.setItem("initialvalue", "1");
    localStorage.setItem("initialclick", true);

    btnclk.innerText = localStorage.getItem("initialvalue");
    btnclk.disabled = localStorage.getItem("initialclick");
  };

  return (
    <div>
      <Header />
      <div id="categories">
        {products.map((product) => {
          return (
            <div className="shopping">
              <span>{product.title}</span>

              <span className="price">{product.price}</span>
              <img src={product.image} className="images" />
              <div className="action">
                <button
                  className="addtocart"
                  onClick={() => dispatch(decrement(product.id))}
                >
                  -
                </button>
                <button
                  className="addingtocart"
                  id={product.id}
                  onClick={() => {
                    dispatch(addToCart(product));
                    changethevalue(product.id);
                  }}
                >
                  add to cart
                </button>
                <button
                  className="addtocart"
                  onClick={() => dispatch(increament(product.id))}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
