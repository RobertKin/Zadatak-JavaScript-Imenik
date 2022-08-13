import React from "react";

const Todo = ({ todo, index, delateTodo }) => {
  return (
    <div className="box">
      <div className="text-center">
        <div className="card-header">
          <h4>Lista: {index + 1}</h4>
        </div>
        <div className="card-body">
          <h3 className={todo.done ? "complete" : "incomplete"}>{todo.msg}</h3>
        </div>
        <div className="card-footer">
          <button
            onClick={() => {
              delateTodo(index);
            }}
            className="btn btn-danger float-left"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
