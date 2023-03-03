import React from 'react';

import './App.css';
import {Routes, Route, useNavigate} from "react-router-dom"
import Home from './pages/Home';
import Cart from './pages/Cart';
import { useSelector } from 'react-redux';
import {BiCart} from "react-icons/bi"
function App() {
  const cart = useSelector((state) => state.cart)
  const navigate = useNavigate()
  
  const getTotalQuantity = () =>{
      let total = 0
      cart.cart.forEach(item => {
          total += item.quantity
      })
      return total
  }

  return (
    <div className="">
      <header className="bg-cyan-700 flex justify-around items-center text-white p-2">
    <h2 onClick={() => navigate("/")} className="cursor-pointer font-bold text-xl">My Shopping cart</h2> <button className="cursor-pointer p-3 flex relative" onClick={() => navigate("/cart")}>
      <BiCart className="text-2xl"/> 
      <span className="absolute top-0 right-0 text-sm bg-blue-900/50 text-white  w-5 h-5 rounded-full flex justify-center items-center">{getTotalQuantity() || 0}</span></button>
    </header> 
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route  path="/cart" element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
