import {Link} from "react-router-dom"
import Header from "../Header"

import "./index.css"

const EmptyCartView=()=>{

    return (
    <>
    <Header />
    <div className="empty-cart-view-container">
<img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png" className="empty-cart-view-image" alt="empty -cart" />
<h1 className="empty-cart-view-heading">Your Cart Is Empty</h1>
<Link to="/products">
<button type="button" className="empty-cart-shop-now-button">Shop Now</button></Link>
    </div>
    </>)
}

export default EmptyCartView