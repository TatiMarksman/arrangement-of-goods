import React, { useState } from "react";
import { products } from "./data/products";
import "./App.css";

function App() {
  const [view, setView] = useState("grid"); // grid veya list

  return (
    <div className="App">
      <h1>Arrangement of Goods</h1>
      <div className="view-toggle">
        <button onClick={() => setView("grid")}>Grid View</button>
        <button onClick={() => setView("list")}>List View</button>
      </div>
      <div className={view === "grid" ? "products-grid" : "products-list"}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
