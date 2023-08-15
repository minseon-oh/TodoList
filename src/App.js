import React, {useState} from "react";
import './App.css';
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

let todoId = 0;
function App() {
  const [todoList, setTodoList] = useState([]);

  const onInsertToggle = (txt) => {
    todoId++;
    let obj = {
      id: todoId,
      text: txt,
      checked: false
    }    
    setTodoList(todoList.concat(obj));
  }

  const onCheckToggle = (id) => {
    setTodoList(todoList => todoList.map(todo => 
      todo.id === id ? {...todo, checked: !todo.checked} : todo
    ));
  }

  const onDeleteToggle = (id) => {
    setTodoList(todoList => todoList.filter(todo => todo.id !== id));
  }

  return (
    <div className="background">
      <div className="container"> 
        <TodoInsert 
          todoList={todoList}
          onInsertToggle={onInsertToggle}
        />
        <TodoList 
          todoList={todoList}
          onCheckToggle={onCheckToggle}
          onDeleteToggle={onDeleteToggle}
        />
      </div>
    </div>
  );
}

export default App;
