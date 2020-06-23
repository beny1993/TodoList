import React, { Component } from "react";
import { StyledListItem, StyledList } from "./styles.js";

export default class index extends Component {
  render() {
    const { onDelete, onDone, onUpdate, todos } = this.props;
    return (
      <div>
        <StyledList>
          {todos.map((todo) => {
            const { id, text, status } = todo;
            return (
              <StyledListItem key={id}>
                <div>
                  <input type='checkbox' onChange={onDone.bind(this, id)} checked={status} />
                  <input
                    className={status === true ? "done" : "none"}
                    style={{ border: "0", background: "transparent", outline: "none" }}
                    type='text'
                    value={text}
                    onChange={(e) => onUpdate(id, e.target.value)}
                  />
                </div>
                <span
                  style={{ float: "right", margin: " -1rem 0rem 0rem 0rem" }}
                  onClick={onDelete.bind(this, id)}
                >
                  <i className='fas fa-trash'></i>
                </span>
              </StyledListItem>
            );
          })}
        </StyledList>
      </div>
    );
  }
}
