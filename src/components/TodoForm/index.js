import React, { Component } from "react";
import { StyledInput, ButtonStyle, P2 } from "./styles";

export default class TodoForm extends Component {
  render() {
    const { onChangeHandler, onClickHandler, text } = this.props;
    return (
      <div className='TodoForm'>
        <P2>Todo List</P2>
        <div>
          <StyledInput
            value={text}
            type='text'
            onChange={onChangeHandler}
            placeholder='Enter Your Text'
          />
          <ButtonStyle onClick={onClickHandler}>Add</ButtonStyle>
        </div>
      </div>
    );
  }
}
