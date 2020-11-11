
import './App.css';
import PropTypes from 'prop-types';

function Products({
  setopenCart,
  cart,
  setcart,
  quantity,
  setquantity,
  currency,
  products
    }) {

  
  
  const addToCart =(product)=>{
    const productExists = cart.find(prod=> prod.id === product.id)
    const cartProduct =  {...product, quantity:1}
    if(!productExists){
      
      setcart([...cart, cartProduct])
      setquantity({...quantity, [product.id]: 1})
    }else{
      setquantity({...quantity, [product.id]: (quantity[product.id])+ 1 })
    }

    setopenCart(true)
  
  }

  return (
    <>
    <div className="products-list">
    
    {
      products.map((product)=>{
      return(
          <div key ={product.id} style={{padding: '10px'}}>
            <img 
            src={product.image_url}
            alt={'product'} 
            className="product-image"
            />
            <div className="product-name">{product.title}</div>
            <div className='product-price-listing'>
            <div>From &nbsp;</div> <div> {currency} &nbsp;</div><div> {product.price}</div>
            </div>
            
            <button onClick={()=>addToCart(product)} className ='cart-button'> Add to Cart</button>

          </div>
        )
      
    })
    }
    </div>
    </>
  );
}

Products.propTypes = {
  setopenCart: PropTypes.func,
  cart: PropTypes.arrayOf(PropTypes.object),
  setcart: PropTypes.func,
  quantity: PropTypes.object,
  setquantity:PropTypes.func,
  currency: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.object)
};

export default Products;