import React from 'react';
import ReactDOM from 'react-dom/client';
import "./fonts/fonts.css";
import App from './components/app/app';
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter basename="/Rebirth">
                <App />
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>
);