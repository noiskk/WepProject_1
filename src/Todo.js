import React, { useEffect, useState } from "react";
import Clock from './Clock-sub';

import './style.css';

function Todo() {

  return (
    
    <div>
      <Clock />
      <form id="todo-form" className="hidden">
        <input id="todo-input" type="text" placeholder="Write a To Do and Press Enter" required />
      </form>
      <ul id="todo-list"></ul>
      <div id="quote">
        <div id="bible"></div>
        <div id="verse"></div>
      </div>
    </div>

    
  );
}

export default Todo;