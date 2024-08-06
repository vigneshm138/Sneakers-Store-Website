import React, { useContext } from "react";
import { useMe } from "../context/DataContext";
import "./CSS/Cart.css";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Cart = () => {
  const { cartDatas, handleCartCheck } = useContext(useMe);
  return (
    <div className="cart_page">
      {cartDatas.length ? (
        <div className="cart">
          {cartDatas.map((item) => (
            <div className="cart_item">
              <div className="cart_img">
                <img src={item.proImg} alt="" />
              </div>
              <div className="cart_details">
                <p className="cart_proName">{item.proName.slice(0, 18)}...</p>
                <p className="cart_proPrice">
                  <span>Price : </span> <FaIndianRupeeSign />
                  100
                </p>
                <div className="cart_qty">
                  <p>qty:</p>
                  <select name="" id="">
                    <option value="1">1</option>
                    <option value="2">3</option>
                    <option value="3">4</option>
                  </select>
                </div>
                <button
                  className="cat_rmBtn"
                  onClick={() => handleCartCheck(item)}
                >
                  remove{" "}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="cart_isEmpty">cart is empty</h1>
      )}

      <div className="payment_details"></div>
    </div>
  );
};

export default Cart;
