import React from "react";
import "../product/Product.css";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="productCard">
      <div className="productImage">
        <img src={productImage} />
      </div>
      <div className="productDescription">
        <div className="productName">
          <h2>{productName}</h2>
        </div>
        <p>{price}</p>

        <div className="countHandler">
          <button>-</button>
          <input />
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
