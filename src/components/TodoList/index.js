import React, { Component } from "react";
import { StyledListItem, StyledList } from "./styles.js";

export default class index extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div>
        <StyledList>
          {todos.map((todo) => {
            const { id, text, status } = todo;
            return (
              <StyledListItem key={id}>
                <span>
                  <input
                    type='checkbox'
                    onChange={this.props.onDone.bind(this, id)}
                    checked={status}
                  />
                  <input
                    className={status === true ? "done" : "none"}
                    style={{ border: "0", background: "transparent", outlineL: "none" }}
                    type='text'
                    value={text}
                    onChange={(e) => this.props.onUpdate(id, e.target.value)}
                  />
                </span>
                <span style={{ float: "right" }} onClick={this.props.onDelete.bind(this, id)}>
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
