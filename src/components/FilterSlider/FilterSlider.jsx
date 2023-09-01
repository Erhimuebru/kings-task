import React, { useState } from 'react';

function FilterSlider() {
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(10000);

  // Simulated data
  const products = [
    { id: 1, name: 'Product 1', price: 800 },
    { id: 2, name: 'Product 2', price: 1200 },
    { id: 3, name: 'Product 3', price: 5000 },
    { id: 4, name: 'Product 4', price: 7500 },
    { id: 5, name: 'Product 5', price: 9000 },
    // Add more products here
  ];

  // Filter the products based on the price range
  const filteredProducts = products.filter(product => {
    return product.price >= minPrice && product.price <= maxPrice;
  });

  return (
    <div className='flex flex-row'>
      {/* <h2>Filter Products by Price</h2> */}
      <div>
        {/* <label>Min Price:</label> */}
        <input
          type="range"
          min={1000}
          max={10000}
          step={100}
          className="scale-x-[-1] transform bg-yellow-500"
          onChange={e => setMinPrice(10000 - parseInt(e.target.value))}
        />
        {/* <span>${10000 - minPrice}</span> */}
      </div>
      <div>
        {/* <label>Max Price:</label> */}
        <input
          type="range"
          min={1000}
          max={10000}
          step={100}
          onChange={e => setMaxPrice(parseInt(e.target.value))}
        />
        {/* <span>${maxPrice}</span> */}
      </div>
      {/* <h3>Filtered Products</h3> */}
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterSlider;
