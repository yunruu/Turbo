import React from 'react';
import './App.css';
import Header from './components/Header';
import AddTask from './components/Tasks';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <AddTask />
      </div>
    </div>
  );
}

export default App;
