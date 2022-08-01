import React  from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddTask() {
    const [task, setTask] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (task !== "") {
            await addDoc(collection(db, "todos"), {
                task,
                completed: false,
            });
            setTask("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="tasksBigContainer">
                <div className="taskInputContainer">
                <input 
                    type="text"
                    className="taskInputField"
                    placeholder="New Task..."
                    value={task}
                    onChange={e => setTask(e.target.value)}
                />
                </div>
                <div className="addButtonContainer"></div>
                    <button className="addButton">Add</button>
            </div>
        </form>
    )
}