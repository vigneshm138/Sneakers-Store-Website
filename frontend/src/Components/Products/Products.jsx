import React from "react";
import "./Products.css";
import Item from "../Item/Item";
import { footwears } from "../../assets/footwear";
import { NavLink } from "react-router-dom";

const Products = () => {
  return (
    <div className="products_div">
      <h1>hot sneakers 🔥</h1>
      <div className="products">
        {footwears.map((item, i) => (
          <NavLink to={`/proDisplay/${item.id}`} key={i}>
            <Item proImg={item.proImg} proName={item.proName} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Products;
