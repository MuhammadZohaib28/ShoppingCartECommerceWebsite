import React from "react";
import './Shop.css'
import { Prodcuts } from "../../products";
import Product from "../product/Product";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Kapray</h1>
      </div>
      <div className="products">
        {Prodcuts.map((item) => {
          return (
            <Product data={item} />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
