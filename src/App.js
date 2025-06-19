import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Do laundry', done: false },
    { id: 2, text: 'Build a project', done: false },
  ]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <>
      <Header onAddTask={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </>
  );
}

export default App;
