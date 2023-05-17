import React from 'react'

export default function Login(){
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
          <input className='input' />
        </div>
        <div className='errorMessageWrap'>
          email error
        </div>

        <div className='inputTitle'>password</div>
        <div className='inputWrap'>
          <input className='input' />
        </div>
        <div className='errorMessageWrap'>
          password error
        </div>

      </div>

      <div>
        <button>
          sign in
        </button>
      </div>

    </div>
  )
}