import React from "react";

function TodoItem(props){


  return(
    <div className="memo-item">
      {props.item}
    </div>
  )
}

export default TodoItem