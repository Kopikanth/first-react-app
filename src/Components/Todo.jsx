import { useRef, useState } from "react";
import "./CSS/Todo.css";
import { TodoItems } from "./TodoItems";

export const Todo = () => {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const inputRef = useRef(null);

    const addTodo = () =>{
        if (input.trim() === ""){return}
        const newtodo = {text: input, completed: false};
        setTodos([...todos, newtodo]);
        setInput("");
    }

    const toggleList = (index) => {
        const newtodos = [...todos];
        newtodos[index].completed = !(todos[index].completed);
        setTodos(newtodos);
    }

    return (
        <div className="todo">
            <div className="todo-header">To-Do List</div>
            <div className="todo-add">
                <input type="text" placeholder="Add your task" value={input} className="todo-input" ref={inputRef} onChange={(e)=>{setInput(e.target.value)}}/>
                <div className="todo-input-btn" onClick={addTodo}>ADD</div>
            </div>
            <TodoItems todosData={todos} toggleListFunction={toggleList}/>
        </div>
    );
};