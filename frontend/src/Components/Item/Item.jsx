import React from "react";
import "./Item.css";
import img from "./pngwing.com.png";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Item = ({ proImg, proName }) => {
  return (
    <div className="item">
      <div className="item_img">
        <img src={proImg} alt={proName} />
      </div>
      <div className="item_details">
        <h3>{proName.slice(0, 18)}...</h3>
        <p>
          <FaIndianRupeeSign />
          300
        </p>
      </div>
    </div>
  );
};

export default Item;
