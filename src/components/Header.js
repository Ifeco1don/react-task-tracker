import React, { useState } from 'react';

function Header({ onAddTask }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    onAddTask(input);
    setInput('');
  };

  return (
    <header>
      <h1>Task Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Add Task" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </header>
  );
}

export default Header;
