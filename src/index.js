import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Todo from './Todo';
import Callender from './Callendar';
import Memo from './Memo';

import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Home /> */}
    {/* <Todo /> */}
    <Callender />
    {/* <Memo /> */}
  </React.StrictMode>
);
