import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import "../components/styles.css"



function Dashboard() {
  const [pizzaList, setPizzaList] = useState([]);
  const [cpyPizza, setCpyPizz] = useState([]);
  const copy=[...pizzaList];
  
 


  const sortPizzaList = (id) => {
    let sortedList;
    let newPizzArr;
    if (id === "price") {
      // sortedList = pizzaList.sort((a, b) => (a.price > b.price ? 1 : -1));
      sortedList=copy.sort((a, b) => (a.price > b.price ? 1 : -1));
      setPizzaList(copy);
    } else if (id === "rating") {
      sortedList = copy.sort((a, b) => (a.rating < b.rating ? 1 : -1));
      setPizzaList(copy);
      
    } else if (id === "veg") {
      newPizzArr = cpyPizza.filter((item) => item.isVeg);
      setPizzaList(newPizzArr);
    } else if (id === "nonVeg") {
      newPizzArr = cpyPizza.filter((item) => !item.isVeg);
      setPizzaList(newPizzArr);
    } else if (id === "all") {
      setPizzaList(cpyPizza);
    }
    
  };

  useEffect(() => {
    fetch("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68")
      .then((res) => res.json())
      .then((data) => {
        setPizzaList(data);
        setCpyPizz(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Header />
      <h2 id="headerIntro">What We Offer</h2>
      <nav id="filterHead">Sort</nav>
      <div id="Button-wrap" className="btn-wrapper">
        <button onClick={() => sortPizzaList("all")}>All</button>
        <button onClick={() => sortPizzaList("veg")}>Veg</button>
        <button onClick={() => sortPizzaList("nonVeg")}>Non Veg</button>
        <button onClick={() => sortPizzaList("price")}>Price</button>
        <button onClick={() => sortPizzaList("rating")}>Rating</button>
        </div>
      <div className="card-container">
        {pizzaList.map((pizza) => (
          <Card key={pizza.id} {...pizza} />
        ))}
      </div>
    </>
  );
}

export default Dashboard;
