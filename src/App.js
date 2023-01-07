import React from "react";
import ShoppingCart from "./components/shoppingCard";


const items = [
  {
    id: 1,
    name: "Jeans",
    price: 7000,
    qty: 5
  },
  {
    id: 2,
    name: "T-shirts",
    price: 4500,
    qty: 9
  },
  {
    id: 3,
    name: "Chinos",
    price: 3700,
    qty: 2
  },
  {
    id: 4,
    name: "Sleaves-shirt",
    price: 3400,
    qty: 5

  }
];
const shoeStocks = [
  {
    id: 1,
    name: "Snickers",
    price: 15000,
    qty: 2
  },
  {
    id: 2,
    name: "Loafers",
    price: 18600,
    qty: 1
  },
  {
    id: 3,
    name: "Sandals",
    price: 12000,
    qty: 2
  },
  {
    id: 4,
    name: "Boots",
    price: 25500,
    qty: 1

  }
];




function App() {
  return (
    <section>
      <h1 className="fashion-name">Climaxxy's Fashion Shopping Cart</h1>
      <h2>Clothes Collection</h2>
      <ShoppingCart initialItems={items} />
      <h2>Shoes Collection</h2>
      <ShoppingCart initialItems={shoeStocks} />
    </section>
  )
}

export default App;
