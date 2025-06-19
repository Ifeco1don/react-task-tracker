import React from 'react';

function Task({ task, onDelete }) {
  return (
    <div style={{
      background: '#f4f4f4',
      margin: '10px',
      padding: '10px',
      borderRadius: '5px'
    }}>
      <span>{task.text}</span>
      <button onClick={() => onDelete(task.id)} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </div>
  );
}

export default Task;
