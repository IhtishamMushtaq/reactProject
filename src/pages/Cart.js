import React from "react";
import Header from "../components/Header";
import { useGlobalContext } from "../context/context";
import "../components/styles.css"

function Cart() {
    const { state, dispatch } = useGlobalContext();
    const clearCart = () => {
        dispatch({
            type: "CLEAR_CART",
        });
    };

    const removeFromBasket = (id) => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            payload: id,
        });
    };

    return (
        <div>
            <Header />
            <h3 style={{ fontSize: "25px", textTransform: "uppercase", borderBottom: "2px solid black", width: "fit-content", margin: "10px auto" }}>Cart Items</h3>
            {state.basket.length >= 1 && (
                <button id="clearButton" onClick={clearCart}>Clear cart</button>
            )}
            {state.basket.length === 0 ? (
                <h1 style={{fontSize:"20px",color:"red",textTransform:"uppercase",fontWeight:"400",textAlign:"center"}}>Nothing To Deliver</h1>
            ) : (
                state.basket.map((item) => {
                    const { id, name, img_url, description, isVeg, price, rating,sizeSelected,toppingName } = item;
                    // console.log(toppingName.map(item=>console.log(item)))
                    return (
                        <div id="cartDisplay" key={id}>
                            <div className="cartItems">
                                <div className="itemImage">
                                    <img src={img_url} alt={name} width="100%" />
                                </div>
                                <div className="itemDescription">
                                    <h1>{name}</h1>

                                    <p>{description}</p>
                                    <p>Type : {isVeg ? "Veg" : "Non Veg"}</p>
                                    <p>Price: INR {price} /-</p>
                                    <p>Rating: {rating}/5</p>
                                    <p>{sizeSelected?sizeSelected:"Regular"}</p>
                                    {/* {toppingsSelected.map(item=><h3>{item}</h3>)} */}
                                    {toppingName.map(name=><h1>{name}</h1>)}
                                    <button
                                        style={{ margin: "10px 0 5px 0" }}
                                        onClick={() => removeFromBasket(id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })
            )}


            <p id="totalAmount">Total amount: INR {state.total} /-</p>
        </div>
    );
}

export default Cart;
