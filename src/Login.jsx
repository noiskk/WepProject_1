import React, { useState } from 'react'

export default function Login(){
  const HIDDEN_CLASSNAME = "hidden";
  const USERNAME_KEY = "username";

  const [user, setUser] = useState(""); 
  const login = (username) => {
    localStorage.setItem(USERNAME_KEY, username);
    setUser(username.target.value);
  }

  return (
    <div>
      <h2 id="clock">00:00</h2>
      <form id="login-form">
        <input 
          id="name-input" 
          maxlength="14" 
          type="text"
          placeholder="What is your name?" 
          value={user} 
          onChange={login}
          required 
        />
      </form>
      <h1 class="hidden" id="greeting"></h1>
      <form id="todo-form">
        <input id="todo-input" type="text" placeholder="Write a To Do and Press Enter" required />
      </form>
      <ul id="todo-list"></ul>
      <div id="quote">
        <div id="bible"></div>
        <div id="verse"></div>
      </div>

      <div id="weather">
        <div id="city"></div>
        <span></span>
        <span></span>
      </div>
    </div>
    
  )
}