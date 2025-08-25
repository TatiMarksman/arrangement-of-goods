import React, { useState } from "react";
import { products } from "./data/products";
import "./App.css";

function App() {
  const [view, setView] = useState("grid");
  const [productsList, setProducts] = useState(products);
  const [sortOrder, setSortOrder] = useState("asc");

  const sortProducts = (criteria) => {
    const sorted = [...productsList].sort((a, b) => {
      if (criteria === 'price') {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      } else {
        return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      }
    });
    setProducts(sorted);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const addToCart = (productId) => {
    alert(`Added to cart: ${productsList.find(p => p.id === productId).name}`);
  };

  return (
    <div className="App">
      <h1>Arrangement of Goods</h1>
      <div className="view-toggle">
        <button onClick={() => setView("grid")}>Grid View</button>
        <button onClick={() => setView("list")}>List View</button>
      </div>
      <div className="main-content">
        <div className="products-section">
          <div className={view === "grid" ? "products-grid" : "products-list"}>
            {productsList.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p className="color">Color: {product.color}</p>
                <p className="price">${product.price}</p>
                <button 
                  className="add-to-cart"
                  onClick={() => addToCart(product.id)}
                >
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="sorting-sidebar">
          <h3>Sort Options</h3>
          <button onClick={() => sortProducts('name')}>
            Sort by Name {sortOrder === 'asc' ? '↑' : '↓'}
          </button>
          <button onClick={() => sortProducts('price')}>
            Sort by Price {sortOrder === 'asc' ? '↑' : '↓'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
