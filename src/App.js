
import './App.css';
import Products from './Products'
import Home from './Home'
import React, { useEffect } from 'react';
import Cart from './Cart';
import PropTypes from 'prop-types';

function App({currencies, currency, products, setcurrency, openCart, setopenCart, cart, setcart, quantity, setquantity}) {

    
  useEffect(() => {
    if(openCart){
      document.getElementById("mySidenav").style.width = "50%";
    }else{
      document.getElementById("mySidenav").style.width = "0";
    }
    
  },[openCart]);


  return (
    <div className="App">
      <Cart 
        setopenCart={setopenCart}
        cart={cart} 
        setcart={setcart}
        quantity={quantity}
        setquantity={setquantity}
        currencies={currencies}
        currency={currency} 
        setcurrency={setcurrency}
        products={products}
      />
      <Home/>
      <Products 
      setopenCart={setopenCart} 
      cart={cart} 
      setcart={setcart}
      quantity={quantity}
      setquantity={setquantity}
      currency={currency} 
      products={products}
      />

    </div>
  
   
  );
}

App.propTypes = {
  setopenCart: PropTypes.func,
  cart: PropTypes.arrayOf(PropTypes.object),
  setcart: PropTypes.func,
  quantity: PropTypes.object,
  setquantity:PropTypes.func,
  currency: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.object),
  currencies: PropTypes.arrayOf(PropTypes.string),
  setcurrency:PropTypes.func,
  
};

export default App;
