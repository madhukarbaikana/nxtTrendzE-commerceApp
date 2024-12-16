import {useContext} from "react"
import { CartContext } from "../../context/CartContext"
import "./index.css"

const CartSummary=()=>{
   const{cartList}= useContext(CartContext)
   let total=0
   
   cartList.map(eachItem=>{
    total=total+eachItem.price*eachItem.quantity
   })

    return (<div className="cart-summary-container">
        <h1 className="order-total-value">Order Total: <span className="order-total-price">Rs {total}/-</span></h1>
        <p className="total-items">{cartList.length} items in cart</p>
        <button type="button" className='checkout-button'>Checkout</button>
    </div>)
}
export default CartSummary