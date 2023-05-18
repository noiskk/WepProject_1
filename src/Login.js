import React, { useState } from 'react'
import Clock from './Clock'

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
      
    </div>
    
  )
}