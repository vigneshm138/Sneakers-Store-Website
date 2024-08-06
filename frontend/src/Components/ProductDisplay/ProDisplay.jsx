import React, { useContext, useEffect, useState } from "react";
import "./ProDisplay.css";
import img from "../Item/pngwing.com.png";
import { FaStar } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { NavLink, useParams } from "react-router-dom";
import { footwears } from "../../assets/footwear";
import { useMe } from "../../context/DataContext";

const ProDisplay = () => {
  const { handleCartCheck } = useContext(useMe);
  const { proID } = useParams();
  const [matchPro, setMatchPro] = useState([]);
  const [imgClick, setImgClick] = useState();
  const [imgStyle, setImgStyle] = useState("subImg1");
  useEffect(() => {
    setMatchPro(footwears.filter((item) => item.id === Number(proID)));
  }, []);

  const handleImgClick = (e) => {
    setImgClick(e.target.src);
    setImgStyle(e.target.alt);
  };
  return (
    <>
      {matchPro.map((item) => (
        <div className="proDisplay">
          <div className="proDisplay_left">
            <div className="proDisplay_mainImg">
              <img
                src={imgClick ? imgClick : item.proImg}
                alt="product Image"
              />
            </div>
            <div className="proDisplay_subImgs">
              <img
                src={item.subImg}
                alt="subImg1"
                style={
                  imgStyle == "subImg1"
                    ? { opacity: "0.6", border: "1px solid gray" }
                    : {}
                }
                onClick={(e) => handleImgClick(e)}
              />
              <img
                src={item.proImg}
                alt="subImg2"
                onClick={(e) => handleImgClick(e)}
                style={
                  imgStyle == "subImg2"
                    ? { opacity: "0.6", border: "1px solid gray" }
                    : {}
                }
              />
              <img
                src={item.subImg}
                alt="subImg3"
                onClick={(e) => handleImgClick(e)}
                style={
                  imgStyle == "subImg3"
                    ? { opacity: "0.6", border: "1px solid gray" }
                    : {}
                }
              />
              <img
                src={item.proImg}
                alt="subImg4"
                onClick={(e) => handleImgClick(e)}
                style={
                  imgStyle == "subImg4"
                    ? { opacity: "0.6", border: "1px solid gray" }
                    : {}
                }
              />
            </div>
          </div>
          <div className="proDisplay_right">
            <div className="proDisplay_proName">{item.proName}</div>
            <div className="proDisplayRatings">
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <FaStar className="star" />
              <span>40 reviews</span>
            </div>
            <div className="proDisplay_amount">
              <FaIndianRupeeSign />
              500
            </div>
            <div className="proDisplay_colors">
              <p>color - white</p>
              <div>
                <img src={img} alt="product Image" />
                <img src={img} alt="product Image" />
                <img src={img} alt="product Image" />
              </div>
            </div>
            <div className="proDisplay_sizesDiv">
              <p>size - 7</p>
              <div className="proDisplay_sizes">
                <div className="shoe_size">20</div>
                <div className="shoe_size">40</div>
                <div className="shoe_size">20.4</div>
                <div className="shoe_size">2</div>
                <div className="shoe_size">2</div>
                <div className="shoe_size">20</div>
                <div className="shoe_size">40</div>
                <div className="shoe_size">20.4</div>
                <div className="shoe_size">2</div>
                <div className="shoe_size">2</div>
                <div className="shoe_size">20</div>
                <div className="shoe_size">40</div>
                <div className="shoe_size">20.4</div>
                <div className="shoe_size">2</div>
                <div className="shoe_size">2</div>
              </div>
            </div>
            <div className="proDisplay_cart">
              <button
                onClick={() => handleCartCheck(item)}
                style={item.addCartButton ? { backgroundColor: "orangered" } : {}}
              >
                <HiOutlineShoppingBag className="proDisplay_icons" />
                {item.addCartButton ? "remove from cart" : "add to cart"}
              </button>
              <button>
                <IoMdHeartEmpty className="proDisplay_icons" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProDisplay;
