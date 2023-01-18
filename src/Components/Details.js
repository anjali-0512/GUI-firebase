import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

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

export default function Details({ title, price, image, itemid }) {
  let quantity = 0;
  let identity = "";
  let itemidentity = 0;
  let btnRef = useRef();
  const dispatch = useDispatch();
  const [details, setDetails] = useState([]);
  const usersCollectionRef = collection(db, "cartItems");
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const getItems = async () => {
      const data = await getDocs(usersCollectionRef);
      setDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getItems();
  }, []);

  console.log(details);

  const add = () => {
    /* let result = details.find((item) => item.itemId === itemid);

    console.log("Results", result);

    if (result) {
      window.alert("The item is already present in the cart");
    } else {
      addDoc(usersCollectionRef, {
        title: title,
        price: price,
        itemId: itemid,
        image: image,
        quantity: 1,
      });

      setNumber(1);
    }

    if (btnRef.current) {
      btnRef.current.setAttribute("disabled", "disabled");
    }*/
  };

  const increase = () => {
    /* details.filter((val) => {
      if (val.title.toLowerCase().includes(title.toLowerCase())) {
        val.quantity = val.quantity + 1;
        quantity = val.quantity;
        identity = val.id;
        itemidentity = val.itemId;
      }
    });

    console.log("Quantity", quantity);
    console.log("Identity", identity);
    console.log("ITEM", itemidentity);

    const docRef = doc(db, "cartItems", identity);
    updateDoc(docRef, { quantity: quantity });*/
  };

  const decrease = () => {
    /* details.filter((val) => {
      if (val.title.toLowerCase().includes(title.toLowerCase())) {
        val.quantity = val.quantity - 1;
        quantity = val.quantity;
        identity = val.id;
        itemidentity = val.itemId;
      }
    });

    console.log("Quantity", quantity);
    console.log("Identity", identity);
    console.log("ITEM", itemidentity);

    const docRef = doc(db, "cartItems", identity);
    updateDoc(docRef, { quantity: quantity });*/
  };

  return (
    <div className="shopping">
      <span>{title}</span>

      <span className="price">{price}</span>
      <img src={image} className="images" />
      <div className="action">
        <button className="addtocart" onClick={decrease}>
          -
        </button>
        <button ref={btnRef} className="addtocart" onClick={add}>
          {number ? number : "Add to Cart"}
        </button>
        <button className="addtocart" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
}
