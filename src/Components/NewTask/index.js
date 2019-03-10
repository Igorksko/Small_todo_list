import React, {useState} from "react";
import {Button} from "../Shared/Styled/Button";
import {TaskItemWrapper} from "../Shared/Styled/TaskItemWrapper";
import {toastr} from "react-redux-toastr";


const NewTask = (props) => {
  const {onAddTask} = props;

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const validateEmail = (email) => {
    // eslint-disable-next-line
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSaveClick = () => {
    if (!validateEmail(email)) {
      return toastr.error("Error", "Invalid mail");
    }
    if (!email || !text) {
      return toastr.error("Error", "All fields must be filled");
    }
    onAddTask({email, username, text});
    setUsername("");
    setEmail("");
    setText("");
  };

  return (
  <TaskItemWrapper>
    <span>Username: <input value={username} onChange={e => setUsername(e.target.value)}/></span>
    <span>Email: <input value={email} onChange={e => setEmail(e.target.value)}/></span>
    <span>Text: <input value={text} onChange={e => setText(e.target.value)}/></span>
    <Button onClick={() => handleSaveClick()}>Save</Button>
  </TaskItemWrapper>
  )
};

export default NewTask
