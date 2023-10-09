// code 4
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Bar from './Topnav'
import HomePage from './HomePage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Bar/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage/>} />

      </Routes>
    </div>
    </BrowserRouter>
    
  </div>
  
);