import React, { useState } from "react";
import MemoBoard from "./MemoBoard";


function Memo() {
  const [inputContents, setInputContents] = useState("");
  const [contents, setContents] = useState([]);
  const addContents = () => {
    setContents([...contents, inputContents]);
  }

  return(
    <div>
      <h1>Memo</h1>
      <input 
      className="memo-input"
      value={inputContents}
      type="text" 
      onChange={(event) => {
        setInputContents(event.target.value);
      }}/>
      <button onClick={addContents}>add</button>

      <MemoBoard contents={contents}/>
    </div>
  )
}

export default Memo;