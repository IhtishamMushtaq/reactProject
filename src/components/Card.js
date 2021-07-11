import React from "react";
import { useGlobalContext } from "../context/context";
import "../components/styles.css"

function Card({ id, name, img_url, description, isVeg, price, rating }) {
  const { dispatch } = useGlobalContext();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: { id, name, img_url, description, isVeg, price, rating },
    });
    alert("item added to cart");
  };

  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={img_url} alt={name} width="200px" />
      <p>{description}</p>
      <h4>Type : {isVeg ? "Veg" : "Non Veg"}</h4>
      <h4>Price: INR {price} /-</h4>
      <h4>Rating: {rating}/5</h4>
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export default Card;
