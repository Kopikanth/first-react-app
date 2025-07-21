import { useEffect, useRef, useState } from "react";
import "./CSS/Todo.css";
import { TodoItems } from "./TodoItems";

export const Todo = () => {

    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);
    const hasMounted = useRef(false);

    const addTodo = () => {
        if (inputRef.current.value.trim() === "") { return }
        const newtodo = { text: inputRef.current.value, completed: false };
        setTodos([...todos, newtodo]);
        inputRef.current.value = "";
    }

    const toggleList = (index) => {
        const newtodos = [...todos];
        newtodos[index].completed = !(todos[index].completed);
        setTodos(newtodos);
    }
    useEffect(() => {
        const savedTodoList = JSON.parse(localStorage.getItem("todoitems")) || [];
        setTodos(savedTodoList);
    }, []);

    useEffect(() => {
        if (hasMounted.current) { 
            localStorage.setItem("todoitems", JSON.stringify(todos));
        }else{
            hasMounted.current = true;
        }
    }, [todos]);


    return (
        <div className="todo">
            <div className="todo-header">To-Do List</div>
            <div className="todo-add">
                <input type="text" placeholder="Add your task" className="todo-input" ref={inputRef}/>
                <div className="todo-input-btn" onClick={addTodo}>ADD</div>
            </div>
            <TodoItems todosData={todos} toggleListFunction={toggleList} setTodosFunction={setTodos} />
        </div>
    );
};