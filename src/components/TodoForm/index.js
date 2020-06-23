import React, { Component } from "react";
import { StyledInput, ButtonStyle, P2 } from "./styles";

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
    };
  }
  onChangeHandler = (e) => {
    this.setState({
      todo: e.target.value,
    });
  };

  onClickHandler = (e) => {
    e.preventDefault();
    if (this.state.todo.trim()) {
      const { onSubmit } = this.props;
      onSubmit(this.state.todo);
      this.setState({
        todo: "",
      });
    }
  };
  render() {
    return (
      <>
        <div style={{ margin: "0rem 0rem 0rem 2rem" }}>
          <P2>Todo List</P2>
        </div>
        <div>
          <StyledInput
            value={this.state.todo}
            type='text'
            onChange={this.onChangeHandler}
            placeholder='Enter Your Text'
          />
          <ButtonStyle onClick={this.onClickHandler}>
            <i class='fas fa-plus'></i>
          </ButtonStyle>
        </div>
      </>
    );
  }
}
