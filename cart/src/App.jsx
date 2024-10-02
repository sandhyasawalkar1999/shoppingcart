import React, { useState } from 'react';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Samsung Galaxy S8', price: 40000, quantity: 1, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ_xWJnrzolkQPyWggJWgcjNzbLqQ_5EBD790zT37-vxMYgc2LIihblbpq2jJhnPxnqV1DsZJMM8MljjdIXuq2MR_lPKTGHBJl4KVcP8sozrqSHz_mBrfARcw&usqp=CAE' },
    { id: 2, name: 'Google Pixel', price: 50000, quantity: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYebIoiOby6GWTx_D5DP9jXALV6WYHwDzw8A&s' },
    { id: 3, name: 'Redmi Note 9', price: 10500, quantity: 1, image: 'https://i01.appmifile.com/webfile/globalimg/sg/cms/C954339F-A02F-47F0-648A-E99767C03544.jpg' },
    { id: 4, name: 'Realme Narzo 50 Pro 5g', price: 40000, quantity: 1, image: 'https://i.gadgets360cdn.com/products/large/realme-narzo-50-pro-5g-667x800-1652860326.jpg?downsize=*:180' },
    { id: 5, name: 'Iphone 16 Pro Max', price: 144000, quantity: 1, image: 'https://inspireonline.in/cdn/shop/files/iPhone_16_Pro_Max_Natural_Titanium_PDP_Image_Position_1__en-IN_be9e4e7d-e77c-49b3-88e6-4fec04aae6d6.jpg?v=1727250879&width=823' }
  ]);

  const updateQuantity = (id, change) => {
    const updatedProducts = products.map(product => 
      product.id === id
        ? { ...product, quantity: Math.max(product.quantity + change, 1) }
        : product
    );
    setProducts(updatedProducts);
  };

  const removeProduct = id => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  const totalItems = products.reduce((total, product) => total + product.quantity, 0);

  const totalPrice = products.reduce((total, product) => total + (product.price * product.quantity), 0);

  const clearcart = () =>{
    setProducts([]);
  }
  

  return (
    <>
      <div className='cartSection'>
        <header className='headSection'>
          <h1>Shopping Cart</h1>
          <div className="cartIcon">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="itemCount">{totalItems}</span>
          </div>
        </header>

        <div className='productList'>
          {products.map(product => (
            <div className="product" key={product.id}>
              <div className="productData">
                <img src={product.image} alt="Product Image" />
                <div className="product-content">
                  <h3>{product.name}</h3>
                  <p>Rs. {product.price}</p>
                  <button id='remove' onClick={() => removeProduct(product.id)}>Remove</button>
                </div>
              </div>
              <div className="quantity">
                <button onClick={() => updateQuantity(product.id, -1)}>-</button>
                <p id='quantities'>{product.quantity}</p>
                <button onClick={() => updateQuantity(product.id, 1)}>+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="totalSection">
          <h2>Total</h2>
          <p id='total'>Rs. {totalPrice}</p>
          <button onClick={clearcart}>Clear</button>
        </div>
       
      </div>
    </>
  );
}

export default App;