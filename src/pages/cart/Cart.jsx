import React, { useContext } from 'react'
import { Prodcuts } from '../../products'
import { ShopContext } from '../../context/ShopContext'
import CartItem from './CartItem';

const Cart = () => {
  const {cartItems} = useContext(ShopContext);
  return (
    <div>
      <div className="heading">
        <h1>CART</h1>
      </div>
      <div className="cartItems">
        {Prodcuts.map((product) => {
          if(cartItems[product.id] !== 0){
            return <CartItem data={product} />           
          }
        })}
      </div>
    </div>
  )
}

export default Cart