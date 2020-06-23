import React, { Component } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/TodoForm/index";
import TodoList from "./components/TodoList/index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  onSubmitTodo = (text) => {
    console.log(text);
    const todo = {
      text,
      id: uuidv4(),
      status: false,
    };
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };
  onDeleteTodo = (id) => {
    const filteredTodo = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: filteredTodo });
  };

  onDoneTodo = (id) => {
    const doneTodos = this.state.todos.map((todo) => {
      if (todo.id === id) todo.status = !todo.status;
      return todo;
    });
    this.setState({ todos: [...this.state.todos, doneTodos] });
    console.log(this.state);
  };

  onUpdateTodo = (id, e) => {
    const items = [...this.state.todos];
    items.map((item) => {
      if (item.id === id) {
        item.text = e;
      }
      return items;
    });
    this.setState({
      todos: items,
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className='App'>
        <div>
          <div>
            <TodoForm onSubmit={this.onSubmitTodo} />
          </div>
          <TodoList
            todos={this.state.todos}
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
