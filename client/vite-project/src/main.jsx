import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import App from './App.jsx';
import { store } from './store';
import './index.css';

axios.defaults.baseURL = "http://localhost:3750/";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


// MADE BY ASHISH KUMAR [20-5-2024 TO 29-6-2024]