import React, { useState } from 'react'

export default function Login(){
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    // const regex = 
  }

  return (
    <div className="page">
      <div className='titleWrap'>
        이메일과 비밀번호를
        <br/>
        입력해주세요
      </div>

      <div className='contentWrap'>
        <div className='inputTitle'>email</div>
        <div className='inputWrap'>
          <input 
            className='input' 
            placeholder='test@gmail.com'
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className='errorMessageWrap'>
          email error
        </div>

        <div style={{marginTop: "26px"}} className='inputTitle'>
          password
        </div>
        <div className='inputWrap'>
          <input 
            className='input' 
            value={pw}
          />
        </div>
        <div className='errorMessageWrap'>
          password error
        </div>

      </div>

      <div>
        <button disabled={true} className='bottomButton'>
          sign in
        </button>
      </div>

    </div>
  )
}