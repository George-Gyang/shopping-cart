import React, { useState } from "react";
import MyStockCart from "./stocklist";
import "../App.css"

const ShoppingCart = ({ initialItems }) => {

    const [items, setItems] = useState(initialItems);

    const changeQty = (id, newQty) => {
        const newItems = items.map(item => {
            if (item.id === id) {
                return { ...item, qty: newQty }
            }
            return item;
        })
        setItems(newItems);
    }

    // reduce method receive to params, 1 is the accumulator, then 2, is the items to calculated
    const grandTotal = items.reduce((total, item) => (
        total + item.qty * item.price
    ), 0)

    return (
            <div className="cart-container">
                <div>
                    {items.map(item => (
                        < MyStockCart key={item.id} changeQty={changeQty} {...item} />
                    ))}
                </div>
                <div className="sub-total">Grand Total: <b><span>&#8358;</span> {grandTotal}</b> </div>
            </div>
    )
    
}
export default ShoppingCart;