import React from 'react'
import ReactDOM from 'react-dom/client'

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// styles
import '../styles/index.css'

// componente principal
import Home from './components/Home';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);