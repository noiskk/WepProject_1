import React, { useState } from 'react';

const Login = () => {
  const HIDDEN_CLASSNAME = "hidden";
  const USERNAME_KEY = "username";

  const savedUsername = localStorage.getItem(USERNAME_KEY);
                                                                                                                                               
  const [user, setUser] = useState(""); 
  const [logined, setLogined] = useState(false);

  const onChange = (e) => {
    setUser(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem(USERNAME_KEY, user);
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
            onChange={onChange}
            //className={logined ? 'hidden' : null}     
            required 
          />
          <i className='arrow left' onClick={onSubmit}></i>
        </form>
      </div>
    )
  }
  else{
    return(
      <div>
        <h1 className="hidden" id="greeting"></h1>
        <h1 id="greeting">{localStorage.getItem(USERNAME_KEY)}</h1>
      </div>
    )
  }
}

export default Login;

