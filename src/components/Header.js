import React from "react";
import { Link } from "react-router-dom";
import menuImage from "../components/images/menu-button.png"
import "../components/styles.css"


function Header() {
  return (
    <div className="cart">
      <h1>XYZ <br/>FASTFOODS</h1>
      <div id="linkContainer" className="linkContainer">
        <Link style={{ textDecoration: "none" }} to="/">
        <h6 className="pageNavigator">Home</h6>
        </Link>
        <Link style={{textDecoration:"none"}} to="/cart">
          <h6 className="pageNavigator">Cart</h6>
          </Link>
        </div>
    </div>
  );
}

export default Header;
