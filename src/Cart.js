
import './App.css';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


function Cart({
  setopenCart,
  cart,
  setcart,
  quantity,
  setquantity,
  currencies,
  currency,
  setcurrency,
  products
  }) {
  
  const [subTotal, setsubTotal] = useState(0)
  const computeTotal =()=>{
    const initialValue = 0
    const total = cart.reduce((acc, value)=>
    acc+ (value.price * (quantity[value.id]||value.quantity||1)),
    initialValue   
    )
    console.log(total, 'total')
    setsubTotal(total)
  }
  useEffect(()=>{
    const newCart = cart.map((item, i)=>{
      const quantityKey = Object.keys(quantity)
      if (quantityKey.includes(item.id)){
        return{...item, quantity: quantity[item.id]}
      }else{
        return {...item}
      }
    }
    )
    setcart(newCart)
  },[JSON.stringify(quantity)]);

  useEffect(()=>{
    computeTotal()
  });

  useEffect(()=>{
    const oldCart = cart
    const newCart = []
    
    oldCart.forEach((prod, i)=>{
      const product = products.filter(product=> prod.id === product.id)
      const cartProduct = {...product[0], quantity: (quantity[product[0].id]|| 1)}
      newCart.push(cartProduct)
    })
    console.log(newCart, 'newCart')
    setcart(newCart)
  }, [currency, JSON.stringify(products)])

  const removeProduct=(product)=>{
    
    const index = cart.findIndex(prod=> prod.id === product.id)
    
    const newCart = cart
    newCart.splice(index, 1)

    if(index>=0){
      setcart(newCart)
    }
    setquantity({...quantity, [product.id]: null})
   
  }

  const increamentQuantity=(product)=>{
    const currentQuantity = quantity[product.id] || product.quantity
    const newQuantity = currentQuantity + 1 
    setquantity({...quantity, [product.id]: newQuantity})
  }

  const decreamentQuantity=(product)=>{
    if (quantity[product.id] ===1){
      removeProduct(product)
      setquantity({...quantity, [product.id]: null})
    }else{
      const currentQuantity = quantity[product.id] || product.quantity
    const newQuantity = currentQuantity - 1  
    setquantity({...quantity, [product.id]: newQuantity})
    }
        
  }

 
  const handleQuantityChange = (event, product)=>{
    setquantity({...quantity, [event.target.name]: event.target.value})

  }


  const handleCurrencyChange =(e)=>{
    e.preventDefault();

    setcurrency(e.target.value);
  }

  console.log(quantity, 'quantity')

  return (
    <div id="mySidenav" className="sidenav">
    <div className="cart-items">
    <a href="#" className="closebtn" onClick={()=> setopenCart(false)}>&times;</a>

    <h6>Your cart</h6>

    <div style={{
      zIndex:300,
    }}> 
      <select 
      className="browser-default select-currency"
      value={currency}
      onChange={(e)=>handleCurrencyChange(e)}

      >
        { currencies.map(currency=>{
          return(
          <option key={currency} name="currency" value={currency} >{currency}</option>
          )
        })

      }
      </select>
    
    </div>
      { cart.map(product=>{

        const productPrice = (product.price* (quantity[product.id]||product.quantity))
        return(
          <div key ={product.id} className="card">
        <div className="card-content cart-content row">
          <div className="col s6">
            <p>{product.title}</p>
            <div className="input-group">
              <input onClick={()=>decreamentQuantity(product)} type="button" value="-" className="button-minus" />
              <input 
                style={{border: 'none', width:'30%'}} 
                type="number" step="1"
                value={quantity[product.id] || product.quantity}
                name={`${product.id}`}
                className="quantity-field"
                onChange={(event)=>handleQuantityChange(event, product)}
                
                />
              <input  onClick={()=>increamentQuantity(product)} type="button" value="+" className="button-plus" />
            </div>
          </div>
          <div className="col s2" style={{
            display:"flex",
            marginTop: '40px',
            marginLeft: '10px'
            }}>
            <div>{currency==="USD"? "$": currency}</div> <div style={{marginLeft:"5px"}}>{productPrice}</div>
          </div>

          <div className="col s4">
            <img 
            src={product.image_url}
             alt=""
             className="cart-product-image"
             style={{

             }}
             ></img>
          </div>
          <div onClick={()=>removeProduct(product)} className="remove-product"> &times;</div>
        </div>
    
      </div>
        )
      })
        }
      </div>
      <div className="total-area">
        <hr></hr>
        <div className="subtotal row">
          <div className="col s6">SubTotal</div>
          
          <div 
          className="col s6" 
          style={{
            display:"flex",
            marginLeft: '50%'
          }}> 
          <div>{currency==="USD"? "$": currency}</div> &nbsp; {subTotal}</div> 
        </div>
      </div>
  </div>
   
  );
}

Cart.propTypes = {
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

export default Cart;