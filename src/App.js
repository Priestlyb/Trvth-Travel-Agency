import React from 'react';
import Navbar from './Component/Navbar';
import './App.css';
import Home from './Component/Page/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './Component/Page/Services';
import Products from './Component/Page/Products';
import SignUp from './Component/Page/SignUp';

function App() {
  return (
    <>
      < Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
