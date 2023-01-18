import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increament, decrement } from "../features/cartSlice";
import "./Allproducts.css";
import Header from "./Header";
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

export default function CartItem() {
  const cart = useSelector((state) => state.cart);

  const usersCollectionRef = collection(db, "cartItems");

  console.log(cart);
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <div className="cartitem">
        {cart.map((cartitems) => {
          return (
            <div className="shoppingitem">
              <span>{cartitems.title}</span>
              <span className="price">{cartitems.price}</span>
              <img src={cartitems.image} className="images" />
              <div className="action">
                <button
                  disabled={cartitems.quantity === 1}
                  className="addtocart"
                  onClick={() => dispatch(decrement(cartitems.id))}
                >
                  -
                </button>
                <span>{cartitems.quantity}</span>
                <button
                  disabled={cartitems.quantity === 10}
                  className="addtocart"
                  onClick={() => dispatch(increament(cartitems.id))}
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
