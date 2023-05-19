import React, { useState } from 'react';

const Loginform = () => {
  // const setUserName = useSetRecoilState(userNameState);
  // useSetRecoilState : 상태를 업데이트하는 setter 함수.
  // 현재 로그인한 userName을 전역으로 관리한다.
  const [input, setInput] = useState("");
  const [state, setState] = useState({
    isLogined: false,
    userName: ""
  });
  const loginText = state.isLogined ? "LOGOUT" : "LOGIN";

  function onChange(e) {
    const text = e.target.value;
    setInput(text);
  }

  function onClick(e) {
    e.preventDefault();
    if (!state.isLogined){
      setState({
        userName: input,
        isLogined: true,
      });
      //setUserName(input);
      return;
    }
    setState({
      isLogined: false,
      userName: ""
    });
  }

  const inputText = <input type="text" onChange={onChange}/>;

  return (
    <div>
    <form>
      {state.isLogined ? <h2>{state.userName}</h2> : inputText}
      <button 
        type="button" 
        onClick={onClick}>
        {loginText}
      </button>
    </form>
    {/* <CommentsForm isLogined={state.isLogined} userName={state.userName}/> */}
    </div>
  )
}

export default Loginform;