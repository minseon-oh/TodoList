import React, {useState} from "react";
import './App.css';
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

let todoId = 4;
function App() {
  const [todoList, setTodoList] = useState([
    {id:1, text:"강아지 목욕시키기", checked:true},
    {id:2, text:"개인프로젝트 작업 2시간", checked:false},
    {id:3, text:"밀린 집안일", checked:false},
    {id:4, text:"강아지 산책", checked:true},
  ]);

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
