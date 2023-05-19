import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './Home';
import Todo from './Todo';
import Callender from './Callendar';

import './index.css';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Home />
    <Todo />
    {/* <Callender /> */}
  </React.StrictMode>
);
