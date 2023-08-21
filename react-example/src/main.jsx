import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { NT4Provider } from './networktables/NT4Provider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NT4Provider address="localhost">
      <App />
    </NT4Provider>
  </React.StrictMode>
)
