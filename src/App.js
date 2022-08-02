import React from 'react';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTasks';
import Tasks from './components/Tasks';
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc, } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "todos"));
    const temp = onSnapshot(q, (ss) => {
      let todoArr = [];
      ss.forEach((todo) => {
        todoArr.push({...todo.data(), id: todo.id });
      });

      setTodos(todoArr);
    });
    return () => temp();
  }, []);

  const toggleCompleted = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), { completed: !todo.completed});
  }; 

  const handleEdit = async (todo, task) => {
    await updateDoc(doc(db, "todos", todo.id), { task: task });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  }

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <AddTask />
      </div>

      <div className='todos-container'>
        {todos.map((todo) => (
          <Tasks
            todo={todo}
            toggleCompleted={toggleCompleted}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            key={todo.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
