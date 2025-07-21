import { useEffect } from "react";
import "./CSS/TodoItems.css";
import cross from "./Assets/cross.png";

export const TodoItems = ({ todosData, toggleListFunction, setTodosFunction }) => {

    const deleteList = (index) => {
        setTodosFunction(todosData.filter((_, i) => i !== index))
    }

    return (
        <div className="todo-list">
            {todosData.map((item, index) => {
                return (
                    <div key={index} className="todo-container">
                        <p className={`todo-item ${item.completed ? "checked" : "unchecked"}`} onClick={() => { toggleListFunction(index) }}>{item.text}</p>
                        <img onClick={() => { deleteList(index) }} src={cross} />
                    </div>
                )
            })}
        </div>
    );
};