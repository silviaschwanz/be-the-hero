import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * Coloca o componente App dentro da div root
 * Um componente é uma função que retorna html
 * Quando um html está dentro de um javascript chamamos de JSX (JavaScript XML)
 */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
