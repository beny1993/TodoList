import React, { useState } from "react";
import { StyledInput, ButtonStyle, P2 } from "./styles";

export default function TodoForm(props) {
  const [todo, setTodo] = useState("");
  const { onSubmit } = props;

  const onChangeHandler = (e) => {
    if (e.target.value.trim()) {
      setTodo(e.target.value);
    }
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    if (todo) {
      onSubmit(todo);
      setTodo("");
    }
  };

  return (
    <div className='TodoForm'>
      <P2>Todo List</P2>
      <div>
        <StyledInput
          value={todo}
          type='text'
          onChange={onChangeHandler}
          placeholder='Enter Your Text'
        />
        <ButtonStyle onClick={onClickHandler}>Add</ButtonStyle>
      </div>
    </div>
  );
}
