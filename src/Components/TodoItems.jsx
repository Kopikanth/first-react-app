import "./CSS/TodoItems.css";

export const TodoItems = ({todosData,toggleListFunction}) => {



    return (
        <div className="todo-list">
            {todosData.map((item, index) => { return (<p className={`todo-item ${item.completed ? "checked" : "unchecked"}`} key={index} onClick={() => { toggleListFunction(index) }}>{item.text}</p>) })}
        </div>
    );
};