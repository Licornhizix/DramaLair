import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Gate from './pages/Gate';
import Navigation from './components/Navigation';
import Error from './pages/Error';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navigation/>
    <Routes>
        <Route path="/" exact component={<Home />} />
        <Route path="/gate" component={<Gate />} />
        <Route path="/login" component={<Login />} />
        <Route path = "*" element ={<Error />} /> 
        
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
