import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

import { GifExpertApp } from './GifExpertApp.jsx';
// import { Pruebas } from './pruebas.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
);
