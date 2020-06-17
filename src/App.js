import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/TodoForm/index";
import TodoList from "./components/TodoList/index";

function App() {
  const [todos, setTodos] = useState([]);

  const onSubmitTodo = (text) => {
    const todo = {
      text,
      id: uuidv4(),
      status: false,
    };

    setTodos([...todos, todo]);
  };

  const onDeleteTodo = (id) => {
    const filteredTodo = todos.filter((todo) => todo.id !== id);
    setTodos([...filteredTodo]);
  };

  const onDoneTodo = (id) => {
    const doneTodos = todos.map((todo) => {
      if (todo.id === id)
        return {
          ...todo,
          status: !todo.status,
        };
      return todo;
    });

    setTodos(doneTodos);
  };

  const onUpdateTodo = (id, e) => {
    console.log(e);
    const updated = todos.map((todo) => {
      if (todo.id === id)
        return {
          ...todo,
          text: e,
        };
      return todo;
    });
    setTodos(updated);
  };

  return (
    <div className='App'>
      <div>
        <div>
          <TodoForm onSubmit={onSubmitTodo} />
        </div>
        <TodoList
          todos={todos}
          onDelete={onDeleteTodo}
          onDone={onDoneTodo}
          onUpdate={onUpdateTodo}
        />
      </div>
    </div>
  );
}

export default App;
