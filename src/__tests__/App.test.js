
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme , { shallow, mount } from 'enzyme';
import App from '../App';
import Products from '../Products';
import Cart from '../Cart';
Enzyme.configure({ adapter: new Adapter() });


describe('test render the App component', ()=>{
  const props = {
    setopenCart: jest.fn(),
    cart: [],
    setcart: jest.fn(),
    quantity: {},
    setquantity: jest.fn(),
    currency: "USD",
    products: [],
    currencies: ["USD"],
    setcurrency:jest.fn(),
  }
  const wrapper = shallow(
    < App {...props}/>
  ) 
  
 it('it should render app without crashing', () => {
  expect(wrapper.length).toBeTruthy();
});
  
})

describe('test render the Products component', ()=>{

  const product = {
    title: 'Gel',
    price: 50,
    image_url: ''
  }

  const props = {
    setopenCart: jest.fn(),
    cart: [],
    setcart: jest.fn(),
    quantity: {},
    setquantity: jest.fn(),
    currency: "USD",
    products: [product],
    currencies: ["USD"],
    setcurrency:jest.fn(),
    openCart: true
  }
  const wrapper = shallow(
    < Products {...props}/>
  ) 
  
 it('it should render Products without crashing', () => {
  expect(wrapper.length).toBeTruthy();
});

it('it should add products to the cart when add to cart button is clicked', () => {
  const props = {
    setopenCart: jest.fn(),
    cart: [],
    setcart: jest.fn(),
    quantity: {},
    setquantity: jest.fn(),
    currency: "USD",
    products: [product],
    currencies: ["USD"],
    setcurrency:jest.fn(),
    openCart: true
  }

  const wrapper = shallow(
    < Products {...props}/>
  ) 
  const button = wrapper.find('.cart-button')
  button.simulate('click')
  expect(props.openCart).toBe(true);
});
  
})

describe('test render the Cart component', ()=>{
  const product = {
    id: 1,
    title: 'Gel',
    price: 50,
    image_url: '',
    quantity:10
  }

  const props = {
    setopenCart: jest.fn(),
    cart: [product],
    setcart: jest.fn(),
    quantity: {"1": 10},
    setquantity: jest.fn(),
    currency: "USD",
    products: [],
    currencies: ["USD"],
    setcurrency:jest.fn(),
  }
  const wrapper = shallow(
    < Cart {...props}/>
  ) 
  
  
 it('it should render Cart without crashing', () => {
  expect(wrapper.length).toBeTruthy();
});
  
  it(' it should increament quantity', ()=>{
  
    const plusButton = wrapper.find('.button-plus')
    plusButton.simulate('click')
    
  })
  
  it('it should decrement quantity', ()=>{

    const minusButton = wrapper.find('.button-minus')
    minusButton.simulate('click')
})
})