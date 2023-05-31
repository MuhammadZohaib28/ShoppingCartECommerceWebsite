import React, { useContext } from "react";
import "../product/Product.css";
import { ShopContext } from "../../context/ShopContext";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;

  const {cartItems, addToCart, removeToCart} = useContext(ShopContext)
  return (
    <div className="productCard">
      <div className="productImage">
        <img src={productImage} />
      </div>
      <div className="productDescription">
        <div className="productName">
          <h2>{productName}</h2>
        </div>e
        <p>{price}</p>

        <div className="countHandler">
          <button onClick={() => removeToCart(id)}>-</button>
          <input value={cartItems[id]} />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
