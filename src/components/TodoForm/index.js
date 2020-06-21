import React, { Component } from "react";
import { StyledInput, ButtonStyle, P2 } from "./styles";

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: "",
    };
  }
  onChangeHandler = (e) => {
    this.setState({
      todos: e.target.value,
    });
  };

  onClickHandler = (e) => {
    e.preventDefault();
    if (this.state.todos.trim()) {
      const { onSubmit } = this.props;
      onSubmit(this.state.todos);
      this.setState({
        text: "",
      });
    }
  };
  render() {
    return (
      <div className='TodoForm'>
        <P2>Todo List</P2>
        <div>
          <StyledInput
            value={this.state.todo}
            type='text'
            onChange={this.onChangeHandler}
            placeholder='Enter Your Text'
          />
          <ButtonStyle onClick={this.onClickHandler}>Add</ButtonStyle>
        </div>
      </div>
    );
  }
}
