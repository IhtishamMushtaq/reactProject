import React from "react";
import { useGlobalContext } from "../context/context";
import Size from "./Size"
// import Topping from "../components/Toppings"
import Topping from './Toppings'

import { useState } from "react";
import "../components/styles.css"


function Card({ id, name, img_url, description, isVeg, price, rating,size,toppings }) {
  const { dispatch } = useGlobalContext();
const [sizeSelected,changeSize]=useState("Regular");
const [toppingName, setToppingName]=React.useState([])

const [toppingsSelected]=useState([]);




const [isRadio]=toppings;
const [sizeIsRadio]=size;





  const addToBasket = () => {

   
    dispatch({
      type: "ADD_TO_BASKET",
      payload: { id, name, img_url, description, isVeg, price, rating,size,toppingsSelected,sizeSelected, toppingName},
    });
    alert("item added to cart");
    
  };

  return (
    <div className="card">
     
      <h1>{}</h1>
      <img src={img_url} alt={name} width="200px" />
      <p>{description}</p>
      <h4>Type : {isVeg ? "Veg" : "Non Veg"}</h4>
      <h4>Price: INR {price} /-</h4>
      <h4>Rating: {rating}/5</h4>
      
    <div id="toppingsSizeContainer">
      {
      sizeIsRadio.isRadio? <Size size={size} onChange={changeSize} />:<h6 className="errorDisplay">No Sizes Available</h6>
    }
      
    {
      isRadio.isRadio? <Topping toppingName={toppingName} setToppingName={setToppingName}  topping={toppings} />:<h6 className="errorDisplay">No Toppings Available</h6>
    }
    <button id="checkoutButton" onClick={addToBasket}>Add to cart</button>
    </div>
     
     
     
      
    
    </div>
  );
}

export default Card;
