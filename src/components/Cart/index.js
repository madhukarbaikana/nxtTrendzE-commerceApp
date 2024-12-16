import {useContext} from "react"

import Header from '../Header'
import {CartContext} from "../../context/CartContext"
import CartItemView from "../CartItemView"
import CartSummary from "../CartSummary"
import EmptyCartView from "../EmptyCartView"

import './index.css'

const Cart = () =>{ 
 const {cartList,removeAllFromCart}= useContext(CartContext)

const showEmptyCartView=(cartList.length===0)

if(showEmptyCartView){
  return <EmptyCartView />
}

  return (
  <>
    <Header />
    <div className="cart-container">
     <div className="cart-content-container">
      <h1 className="cart-heading">My Cart</h1>
      <button type="button" className="remove-all-button" onClick={removeAllFromCart}>Remove All</button>
     <CartItemView /> 
     <CartSummary />
     </div>
    </div>
  </>
)}

export default Cart