import React,{useContext} from 'react'
import { BsPlusSquare } from "react-icons/bs";
import { BsDashSquare } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { CartContext } from '../../context/CartContext'

import "./index.css"

const CartItemView=(props) =>{
    const {cartList,onIncreaseQuantity,onDecreaseQuantity,removeItemFromCart}=useContext(CartContext)

    return (
        <ul className="cart-items-container">
        {cartList.map(eachItem=>{
            const {id,title, imageUrl,brand,price,quantity}=eachItem

           return( <li className="cart-item" key={eachItem.id}>
           <img src={imageUrl} alt={title}  className="cart-product-image"/>
           <div className="cart-item-details-container">
                <div className="cart-item-title-brand-container">
                    <h1 className="cart-product-title">{title}</h1>
                    <p className="cart-product-brand">{brand}</p>
                </div>
                <div className="cart-item-quantity-container">
                    <button type="button" className="quntity-controler-button" onClick={()=>onDecreaseQuantity(id)}>
                      <BsDashSquare size={13} />
                    </button>
                    <span className="quantity-of-each-item">{quantity}</span>
                    <button type="button" className="quntity-controler-button" onClick={()=>onIncreaseQuantity(id)}>
                    <BsPlusSquare size={13}  />
                    </button>
                </div>
                <div className="cart-item-price-and-remove-container">
                    <h1 className="price-of-each-item">Rs {price*quantity}/-</h1>
                    <button className="remove-button" onClick={()=>removeItemFromCart(id)}>
                    Remove
                    </button>
                </div>
           </div>
           <button
            className="delete-button"
            type="button"
            onClick={()=>removeItemFromCart(id)}
            testid="remove"
          >
           <AiFillCloseCircle  size="20px"/>
          </button>
            </li>)
        })}
      </ul>
    )
}

export default CartItemView
