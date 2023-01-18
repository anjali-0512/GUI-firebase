import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increament, decrement } from "../features/cartSlice";
import "./Product.css";
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
export default function Product() {
  const [products, setProducts] = useState([]);
  const [details, setDetails] = useState([]);
  const [number, setNumber] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const usersCollectionRef = collection(db, "cartItems");

  let navigate = useNavigate();

  let quantity = 0;
  let identity = "";
  let itemidentity = 0;
  let btnRef1 = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    async function requestproducts() {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const json = await res.json();
      setProducts(json);
    }

    requestproducts();
  }, []);

  useEffect(() => {
    const getItems = async () => {
      const data = await getDocs(usersCollectionRef);
      setDetails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getItems();
  }, []);

  console.log(products);

  /*const increase = (title) => {
    details.filter((val) => {
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
    updateDoc(docRef, { quantity: quantity });
  };*/

  /*const decrease = (title) => {
    details.filter((val) => {
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
    updateDoc(docRef, { quantity: quantity });
  };*/

  /*const addtocart = (title, image, itemid, price) => {
    let result = details.find((item) => item.itemId === itemid);

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
    setIsDisabled(true);

    const btn = document.getElementById("adding");
    console.log("Button", btn);
  };*/

  const gotoproduct = () => {
    navigate("/products", { state: { products: products } });
  };
  return (
    <div>
      <div id="items">
        {products.slice(0, 6).map((product) => {
          return (
            <div className="container">
              <span>{product.title}</span>
              <span className="price">{product.price}</span>
              <img src={product.image} className="pic" />
              <div className="action">
                <button
                  className="addtocart"
                  onClick={() => dispatch(decrement(product.id))}
                >
                  -
                </button>
                <button
                  id="adding"
                  className="addtocart"
                  onClick={() => dispatch(addToCart(product))}
                >
                  "Add to Cart"
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
      <button className="gotoproduct" onClick={gotoproduct}>
        All Products
      </button>
    </div>
  );
}
