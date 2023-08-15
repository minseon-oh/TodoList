import React, {useEffect, useRef} from "react";
import './TodoList.css'
import TodoItem from "./TodoItem.js";

let prevLength = 0;
function TodoList(props) {
  const listEl = useRef();
  useEffect(() => {
    if(prevLength < props.todoList.length){
      listEl.current.scrollTop = listEl.current.scrollHeight;
    }
    prevLength = props.todoList.length;
  });
  return (
      <div className="todoList" ref={listEl}>
        {props.todoList.map(todo => (
            <TodoItem 
              todo={todo} 
              key={todo.id}
              onCheckToggle={props.onCheckToggle}
              onDeleteToggle={props.onDeleteToggle}
            />
        ))}
      </div>
  );
}

export default TodoList;