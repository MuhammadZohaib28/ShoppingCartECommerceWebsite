import React, {  createContext, useState } from "react";
import { Prodcuts } from "../products";
import Shop from "../pages/shop/Shop";
import Navbar from "../components/navbar/Navbar";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < Prodcuts.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId)=> {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeToCart = (itemId)=> {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const contextValue = {cartItems, addToCart, removeToCart};

    console.log(cartItems)

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
