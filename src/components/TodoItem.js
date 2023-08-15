import React from "react";
import './TodoItem.css'
import {BsCircle, BsCheckLg, BsTrash} from 'react-icons/bs';

function TodoItem(props) {
const {id, text, checked} = props.todo;
  return (
    <div className={checked ? "item complete" : "item"}
      onClick={() => props.onCheckToggle(id)}
    >
      {checked ? (
        <BsCheckLg className="checkbox" />
      ) : (
        <BsCircle className="checkbox" />
      )}
      <div className="text">{text}</div>
      <BsTrash className="btnDelete"
        onClick={() => props.onDeleteToggle(id)}
      />
    </div>
  );
}

export default TodoItem;