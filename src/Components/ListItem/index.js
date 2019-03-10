import React, {useState} from "react";
import {Button} from "../Shared/Styled/Button";
import {TaskItemWrapper} from "../Shared/Styled/TaskItemWrapper";
import {editTask} from "../../api";

const ListItem = (props) => {
  const {task, isAdmin} = props;
  const [isCompleted, setCompleted] = useState(!!task.status);
  const [text, setText] = useState(task.text);

  const handleStatusClick = () => {
    if (!isAdmin) return;
    setCompleted(!isCompleted);
  };

  const handleSaveClick = (e) => {
    const id = e.currentTarget.name;
    const status = isCompleted ? 10 : 0;
    const test = {email: task.email, username: task.username, text};
    editTask(id, status, text, test);
  };

  return (
  <TaskItemWrapper>
    <span>Username: {task.username}</span>
    <span>Email: {task.email}</span>
    {isAdmin
    ?
    <span>Text: <input value={text} onChange={e => setText(e.target.value)}/></span>
    :
    <span>Text: {text}</span>
    }
    <div>
      Status: <input type="checkbox" name="status" checked={isCompleted} onChange={() => handleStatusClick()}/>
    </div>
    {isAdmin && <Button name={task.id} onClick={(e) => handleSaveClick(e)}>Save</Button>}
  </TaskItemWrapper>
  )
};


export default ListItem
