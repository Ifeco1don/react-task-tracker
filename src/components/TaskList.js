import React from 'react';
import Task from './Task';

function TaskList({ tasks, onDelete }) {
  return (
    <>
      {tasks.length > 0 ? (
        tasks.map(task => (
          <Task key={task.id} task={task} onDelete={onDelete} />
        ))
      ) : (
        <p>No tasks added yet.</p>
      )}
    </>
  );
}

export default TaskList;
