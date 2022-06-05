import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navigation from './components/Navigation';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navigation />
    <App />
    <Footer />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
