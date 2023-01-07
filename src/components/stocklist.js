import React from "react";
import "../App.css";

const MyStockCart = ({ id, name, price, qty, changeQty }) => {

    const increaseQty = () => {
        changeQty(id, qty + 1)
    }

    const decreaseQty = () => {
        changeQty(id, qty - 1)
    } 

    return (
        <div className="carts">
            <h4>{name} </h4>
            <p className="qty">
                <button onClick={decreaseQty} disabled={qty < 1 ? true : false} >-</button>{qty}<button onClick={increaseQty}>+</button>
            </p>
            <p><span>&#8358;</span> {price}</p>
            <div>
                <div className="total">Total : <span>&#8358;</span> <b>{qty * price}</b></div>
            </div>
        </div>
    )
}
export default MyStockCart;