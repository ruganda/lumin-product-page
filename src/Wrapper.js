
import './App.css';
import React, { useState } from 'react';
import { FETCH_CURRENCIES,FETCH_PRODUCTS } from './Queries';
import { useQuery} from '@apollo/client';
import App from './App'

function Wrapper() {
  
  const [openCart, setopenCart] = useState(false);
  const [quantity, setquantity] = useState({})
  const [currency, setcurrency] = useState("USD")
  const [cart, setcart] = useState([])

  const { loading: fetching, error:Error, data: productData } = useQuery(FETCH_PRODUCTS, {
    variables: { currency }, fetchPolicy:'cache-first'
  });

  const { loading, error, data } = useQuery(FETCH_CURRENCIES, { fetchPolicy: 'cache-first'});

  if (fetching || loading) return <p>Loading ...</p>;

  if (error|| Error) return `Error! ${error}`;

  const {products} = productData

  const currencies = data.currency
  

  return (
    <>
     <App 
        currencies={currencies}
        products={products}
        currency={currency}
        setcurrency={setcurrency} 
        openCart={openCart}
        setopenCart={setopenCart}
        cart={cart}
        setcart={setcart}
        quantity={quantity}
        setquantity={setquantity}
        />
    </>
  
   
  );
}

export default Wrapper;