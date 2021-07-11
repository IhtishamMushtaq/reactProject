import React from "react";
import { Link } from "react-router-dom";
import cartImage from "../components/images/cart-white.png"
import homeImage from "../components/images/home-white.png"
import "../components/styles.css"



function Header() {

  return (
    <div className="cart">
      <h1 id="heroIntro">XYZ <br/>FASTFOODS</h1>
      <div    id="linkContainer" className="linkContainer">
        <Link   style={{ textDecoration: "none" }} to="/">
        <img className="pageNavigator" src={homeImage} alt="home" />
        </Link>
        <Link style={{textDecoration:"none"}} to="/cart">
          <img className="pageNavigator" src={cartImage} alt="cart" />
          </Link>
        </div>
    </div>
  );
}

export default Header;
