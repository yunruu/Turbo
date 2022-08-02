import React from "react";

export default function Tasks({
    todo,
    toggleCompleted,
    handleEdit,
    handleDelete,
}) {
    const [newTodo, setNewTodo] = React.useState(todo.task);

    const handleChange = (e) =>  {
        e.preventDefault();

        if (todo.completed) {
            setNewTodo(todo.task);
        } else {
            todo.task = "";
            setNewTodo(e.target.value);
        }
    }

    return (
        <div className="todo">
            <input
                className="list"
                type="text"
                style={{textDecoration: todo.completed && "line-through" }}
                value={todo.task === "" ? newTodo : todo.task}
                onChange={handleChange}
            />

            <input
                className="checkBox"
                type="checkbox"
                onClick={() => toggleCompleted(todo)}
            />

            <button 
                className="editTodo"
                onClick={() => handleEdit(todo, newTodo)}
                >Edit 
            </button>

            <button
                className="deleteTodo"
                onClick={() => handleDelete(todo.id)}
                >Delete
            </button>
        </div>
    )
}