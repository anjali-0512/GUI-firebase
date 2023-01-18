import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

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
export default function Cart() {
  let quantity = 0;
  let identity = "";
  let itemidentity = 0;
  const [details, setDetails] = useState([]);
  const [count, setCount] = useState(0);
  const usersCollectionRef = collection(db, "cartItems");

  const dispatch = useDispatch();

  useEffect(() => {
    const getItems = async () => {
      const data = await getDocs(usersCollectionRef);
      setDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getItems();
  }, []);

  const increase = (title) => {
    /*details.filter((val) => {
      if (val.title.toLowerCase().includes(title.toLowerCase())) {
        // val.quantityval.quantity+1;

        //quantity = val.quantity;
        identity = val.id;
        itemidentity = val.itemId;
        //setCount(countquantity);
      }
    });

    //console.log(countquantity);

    console.log("Quantity", quantity);
    console.log("Identity", identity);
    console.log("ITEM", itemidentity);

    const docRef = doc(db, "cartItems", identity);
    updateDoc(docRef, { quantity: countquantity });*/
  };

  const decrease = (title) => {
    /*details.filter((val) => {
      if (val.title.toLowerCase().includes(title.toLowerCase())) {
        //val.quantity = val.quantity - 1;
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
    <div>
      <Header />
      <div className="cartitem">
        {details.map((detail) => {
          return (
            <div className="shoppingitem">
              <span>{detail.title}</span>
              <span className="price">{detail.price}</span>
              <img src={detail.image} className="images" />

              <div className="action">
                <button
                  className="addtocart"
                  onClick={() => decrease(detail.title)}
                >
                  -
                </button>
                <span>{detail.quantity}</span>
                <button
                  className="addtocart"
                  onClick={() => increase(detail.title)}
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
