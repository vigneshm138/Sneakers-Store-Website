import React, { createContext, useState } from "react";
export const useMe = createContext();

const DataContext = (props) => {
  const [cartDatas, setCartDatas] = useState([]);
  console.log(cartDatas);

  const handleCartCheck = (CartItem) => {
    const DataExisting = cartDatas.find(
      (item) => item.id === Number(CartItem.id)
    );
    if (!DataExisting) {
      CartItem.addCartButton = true;
      setCartDatas([...cartDatas, CartItem]);
    } else {
      CartItem.addCartButton = false;
      setCartDatas(cartDatas.filter((item) => item.id !== CartItem.id));
    }
  };

  return (
    <div>
      <useMe.Provider value={{ setCartDatas, cartDatas, handleCartCheck }}>
        {props.children}
      </useMe.Provider>
    </div>
  );
};

export default DataContext;
