import React, { useContext } from 'react'
import './Product.css'
import { ShopContext } from '../../context/ShopContext';

const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
        const {addToCart, cartItems} = useContext(ShopContext);

        const cartItemAmout= cartItems[id]
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
        </div>
        <button onClick={() => addToCart(id)}>Add to Cart {cartItemAmout > 0 && <> ({cartItemAmout})</>}</button>
    </div>
  )
}

export default Product