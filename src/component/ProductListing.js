import React, { useState, useEffect, useRef } from 'react';
import './ProductListing.style.css';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const cartIconRef = useRef(null);
  const cartDropdownRef = useRef(null);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        cartIconRef.current && !cartIconRef.current.contains(event.target) &&
        cartDropdownRef.current && !cartDropdownRef.current.contains(event.target)
      ) {
        setShowCart(false); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const toggleCartVisibility = () => {
    setShowCart((prevShowCart) => !prevShowCart);
  };

  return (
    <div className="product-listing-container">
      <div
        ref={cartIconRef}
        className="cart-icon-container"
        onClick={toggleCartVisibility}
      >
        🛒 <span className="cart-count">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
      </div>

      {showCart && (
        <div ref={cartDropdownRef} className="cart-dropdown">
          <h3>Cart Items</h3>
          {cart.length > 0 ? (
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  {item.title} - ${item.price} x {item.quantity}
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      )}

      <h2>Product Listing</h2>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.thumbnail} alt={product.title} className="product-image" />
              <h3>{product.title}</h3>
              <p className="product-description">{product.description.substring(0, 80)}...</p>
              <p className="product-price">Price: <strong>${product.price}</strong></p>
              <button
                onClick={() => addToCart(product)}
                className="add-to-cart-button"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default ProductListing;
