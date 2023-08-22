import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
// Import Swiper styles
import 'swiper/css';
import "@szhsin/react-menu/dist/index.css";
//
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import { ScrollToTop } from './components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <ToastContainer closeButton={false} autoClose={3000} position={"bottom-right"}  />
      <App />
    </Router>
  </React.StrictMode>
);