import React, { useState } from 'react';



export default function Login(){
  const HIDDEN_CLASSNAME = "hidden";
  const USERNAME_KEY = "username";

  const savedUsername = localStorage.getItem(USERNAME_KEY);
                                                                                                                                               
  const [user, setUser] = useState(""); 
  const [logined, setLogined] = useState(false);
  const [local, setLocal] = useState("");

  const onLoginSubmit = (event) =>                                                                                                        {
    event.preventDefault(); // 브라우저의 기본 동작을 막는 역할 ex)새로고침
    localStorage.setItem(USERNAME_KEY, "hello");
  
    //loginForm.classList.add(HIDDEN_CLASSNAME);
    //const username = loginInput.value;
    //localStorage.setItem(USERNAME_KEY, user);
  }

  if(savedUsername === null){
    return(
      <div>
        <form id="login-form">
          
          <input 
            id="name-input" 
            maxLength="14" 
            type="text"
            placeholder="What is your name?" 
            value={user} 
            onChange={(e) => {
              setUser(e.target.value);
            }}
            onSubmit={onLoginSubmit}
            className={logined ? 'hidden' : null}     
            required 
          />
          
        </form>
      </div>
    )
  }
  else{
    return(
      <div>
        <h1 className="hidden" id="greeting"></h1>
      </div>
    )
  }
}




// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const greeting = document.querySelector("#greeting");

// function onLoginSubmit(event){
//   event.preventDefault(); // 브라우저의 기본 동작을 막는 역할 ex)새로고침
//   loginForm.classList.add(HIDDEN_CLASSNAME);
//   const username = loginInput.value;
//   localStorage.setItem(USERNAME_KEY, username);
//   paintGreetings(username);
// }

// function paintGreetings(username){
//   greeting.innerText = `Hello ${username}`;
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// const savedUsername = localStorage.getItem(USERNAME_KEY);

// if(savedUsername === null){
//   loginForm.classList.remove(HIDDEN_CLASSNAME);
//   loginForm.addEventListener("submit", onLoginSubmit);
// }  
// else {
//   paintGreetings(savedUsername);
// }