import React from "react";
import MemoItem from "./MemoItem";

function MemoBoard(props){


  return(
    <div>
      
      {props.contents.map((item) => <MemoItem item={item}/>)}

    </div>
  )
}
export default MemoBoard