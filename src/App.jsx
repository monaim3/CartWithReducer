import { useEffect, useState } from 'react'

import './App.css'
import { useReducer } from 'react'
import { cartReducer } from './Reducer/cartReducer'
import Products from './component/Products'
import Cart from './component/Cart'

function App() {
 
  const [state, dispatch]=useReducer(cartReducer,{
    products:[],
    cart:[]
  })
 
 const fetchProduct=async()=>{
      const res=await fetch('https://dummyjson.com/products')
      const data=await res.json()
      dispatch({
        type:"ADD_Products",
        payload:data.products
      })
    }
    useEffect(()=>{
     fetchProduct()
    },[])
  return (
    <div className='flex'>
      <Products state={state} dispatch={dispatch}></Products>
      <Cart state={state} dispatch={dispatch}></Cart>
    </div>
  )
}

export default App
