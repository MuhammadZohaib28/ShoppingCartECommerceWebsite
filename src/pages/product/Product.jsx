import React from 'react'
import './Product.css'

const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
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
    </div>
  )
}

export default Product