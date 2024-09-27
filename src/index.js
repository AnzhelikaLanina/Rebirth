import React from 'react';
import ReactDOM from 'react-dom/client';
import "./fonts/fonts.css";
import App from './components/app/app';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
);