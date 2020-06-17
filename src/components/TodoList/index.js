import React from "react";
import { StyledListItem, StyledList } from "./styles.js";

export default function TodoList(props) {
  const { onDelete, onDone, todos, onUpdate } = props;
  console.log(todos);
  return (
    <div>
      <StyledList>
        {props.todos.map((todo) => {
          const { text, id, status } = todo;
          return (
            <StyledListItem key={id}>
              <span>
                <input type='checkbox' onChange={onDone.bind(this, id)} checked={status} />
                <input
                  className={status === true ? "done" : "none"}
                  style={{ border: "0", background: "transparent", outlineL: "none" }}
                  type='text'
                  value={text}
                  onChange={(e) => onUpdate(id, e.target.value)}
                />
              </span>
              <span style={{ float: "right" }} onClick={onDelete.bind(this, id)}>
                <i className='fas fa-trash'></i>
              </span>
            </StyledListItem>
          );
        })}
      </StyledList>
    </div>
  );
}
