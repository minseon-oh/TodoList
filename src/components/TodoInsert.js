import React, {useRef, useState} from "react";
import './TodoInsert.css'
import {AiFillPlusCircle} from 'react-icons/ai';

function TodoInsert(props) {
  const titleEl = useRef();
  const writeEl = useRef();
  const [value, setValue] = useState("");

  const onWriteToggle = () => {
    if(writeEl.current.className.includes("show")){
      writeEl.current.style.animation = "fade-out 1s forwards";
      writeEl.current.classList.remove("show");
      writeEl.current.parentElement.childNodes[2].classList.remove("rotate");
      titleEl.current.style.animation = "fade-in 1s forwards"; 
      setValue("");
    }else {
      titleEl.current.style.animation = "fade-out 1s forwards";
      writeEl.current.style.animation = "fade-in 1s forwards";
      writeEl.current.children[0].focus();
      writeEl.current.classList.add("show");
      writeEl.current.parentElement.childNodes[2].classList.add("rotate");
    }
  }

  const activeEnter = (e) => {
    if(e.key === "Enter" && e.target.value) {
      props.onInsertToggle(e.target.value);
      setValue("");
    }
  }

  const onChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className="todoInsert">
      <div className="title" ref={titleEl}>
        <p>오늘 할 일 , <span className="tasks"><span className="colorText">{props.todoList.length}</span> 작업</span></p>
      </div>
      <div className="write" ref={writeEl}>
        <input 
          placeholder="할 일을 입력하고 Enter를 누르세요." 
          type="text"
          name="todoWrite"
          value={value}
          onChange={onChange}
          onKeyUp={(e) => activeEnter(e)}
        />
      </div>
      <AiFillPlusCircle className="btn" onClick={onWriteToggle} />
    </div>
  );
}

export default TodoInsert;