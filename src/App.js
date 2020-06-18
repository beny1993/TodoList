import React, { Component } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/TodoForm/index";
import TodoList from "./components/TodoList/index";

class App extends Component {
  constructor() {
    super();
    this.todos = [
      {
        text: "",
        id: uuidv4(),
        status: false,
      },
    ];
  }
  onChangeHandler = (e) => {
    if (e.target.value.trim()) {
      this.setState({
        text: e.target.value,
      });
    }
  };

  onClickHandler = (e) => {
    e.preventDefault();
    if (this.todos) {
      this.onSubmitTodo(e.target.value);
      this.setState((todos) => {
        return {
          text: " ",
        };
      });
    }
  };

  onSubmitTodo = (item) => {
    this.setState({
      text: item,
    });
  };

  onDeleteTodo = (id) => {
    const filteredTodo = this.state.filter((todo) => this.todos.id !== todo.id);
    this.setState([...filteredTodo]);
  };

  onDoneTodo = (id) => {
    const doneTodos = this.todos.map((todo) => {
      if (this.todos.id === id)
        return {
          ...this.todos,
          status: !this.todos.status,
        };
      return this.todos;
    });

    this.setState({ doneTodos });
  };

  onUpdateTodo = (id, e) => {
    console.log(e);
    const updated = this.todos.map((todo) => {
      if (this.state.id === id)
        return {
          ...this.todos,
          text: e,
        };
      return todo;
    });
    this.setState({ updated });
  };
  render() {
    return (
      <div className='App'>
        <div>
          <div>
            <TodoForm onClick={this.onClickHandler} onChange={this.onChangeHandler} />
          </div>
          <TodoList
            todos={this.state}
            onDelete={this.onDeleteTodo}
            onDone={this.onDoneTodo}
            onUpdate={this.onUpdateTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
