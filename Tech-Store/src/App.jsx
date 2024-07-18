import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MyOrders from './pages/MyOrders';
import axios from 'axios';

const App = () =>{
  axios.defaults.withCredentials=true;

  return(
  <div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/products' element={<Products />} />
      <Route path='/product/:id' element={<ProductDetail />} />
      <Route path='/MyOrders' element={<MyOrders />}></Route>
    </Routes>
  </div>
);
}
 ;

export default App;
