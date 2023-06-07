import React from "react";

function MemoForm() {
  const isLogined = props.isLogined;
  const userName = props.userName;

  const [comment, setComment] = useState({
    userName: "",
    content: ""
  });
  const [addComment, setAddComment] = useState([]);

  function onChangeInputHandler(e) {
    const text = e.target.value;
    setComment({
      content: text,
    });
  }

  function onClickSubmitHandler(e) {
    e.preventDefault();
    const commentObject = {
      ...comment,
      userName: userName,
      date: currentTime(),
      id: `${userName+currentTime()}`
    };
    const commentArray = [...addComment,commentObject];
    setAddComment(commentArray);
  }

  function onClickDeleteHandler(e) {
    const deleteTarget = e.target.parentNode;
    const deleteTargetId = deleteTarget.id;
    const deletedArray = addComment.filter(element => {
      return element.id !== deleteTargetId;
    })
    setAddComment(deletedArray);
  }
  
  const disabledCommentsForm =
    <form>
      <textarea rows="5" cols="20" onChange={onChangeInputHandler} disabled/>
      <button onClick={onClickSubmitHandler} disabled>Tweet</button>
    </form>;
  
  const abledCommentsForm = 
    <form>
      <textarea rows="5" cols="20" onChange={onChangeInputHandler}/>
      <button onClick={onClickSubmitHandler}>Tweet</button>
    </form>

  return(
    <>
    {isLogined ? abledCommentsForm : disabledCommentsForm}
    {addComment.map((element,index) => {
      return <Comment 
        value={element}
        isLogined={isLogined}
        key={element.date+JSON.stringify(index)}
        onDelete={onClickDeleteHandler}
        />
    })}
    </>
  )
}

export default MemoForm;