import React, { useState } from "react";
import { products } from "./data/products";
import "./App.css";

function App() {
  const [view, setView] = useState("grid"); // grid veya list
  const [productsList, setProducts] = useState(products);

  const sortProducts = (criteria) => {
    const sorted = [...productsList].sort((a, b) => criteria === 'price' ? a.price - b.price : a.name.localeCompare(b.name));
    setProducts(sorted);
  };

  const filterProducts = (category) => {
    if (category === 'all') {
      setProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setProducts(filtered);
    }
  };

  return (
    <div className="App">
      <h1>Arrangement of Goods</h1>
      <div className="view-toggle">
        <button onClick={() => setView("grid")}>Grid View</button>
        <button onClick={() => setView("list")}>List View</button>
      </div>
      <div className="filter-controls">
        <button onClick={() => filterProducts('all')}>All</button>
        <button onClick={() => filterProducts('electronics')}>Electronics</button>
        <button onClick={() => filterProducts('clothing')}>Clothing</button>
        <button onClick={() => filterProducts('books')}>Books</button>
      </div>
      <div className="sort-controls">
        <button onClick={() => sortProducts('name')}>Sort by Name</button>
        <button onClick={() => sortProducts('price')}>Sort by Price</button>
      </div>
      <div className={view === "grid" ? "products-grid" : "products-list"}>
        {productsList.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <p className="category">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
