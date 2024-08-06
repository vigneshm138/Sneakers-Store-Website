import React, { useContext } from "react";
import "./Navbar.css";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { useMe } from "../../context/DataContext";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  const { cartDatas } = useContext(useMe);

  return (
    <div className="navbar">
      <div className="logoName">
        <NavLink to={"/"}>
          vy.<span>s</span>
        </NavLink>
      </div>
      <div className="navbar_right">
        <NavLink to={"/cart"}>
          <div className="navbarCart">
            <HiOutlineShoppingBag className="navbar_icons" />
            <div className="cart_quty">{cartDatas.length}</div>
            <span>cart</span>
          </div>
        </NavLink>
        <div className="navbarFavorites">
          <IoMdHeartEmpty className="navbar_icons" />
          <span>favourite</span>
        </div>
        <NavLink to={"/profile"}>
          <div className="navbarProfile"><FaRegUser className="navbar_icons" /></div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
