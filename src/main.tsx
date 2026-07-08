import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './shared/assets/fonts/fonts.css';
import { LanguageProvider } from './context';
import { loadConfig } from './shared/config/loadConfig';
import { App } from './app';

loadConfig().then(() => {
  const modalRoot = document.getElementById('root') as HTMLElement;
  const root = ReactDOM.createRoot(modalRoot);
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter basename="/Rebirth">
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>,
  );
});
