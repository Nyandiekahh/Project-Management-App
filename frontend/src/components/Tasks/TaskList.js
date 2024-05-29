// frontend/src/components/Tasks/TaskList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from backend
    axios.get('/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error('Failed to fetch tasks:', error));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="border-b border-gray-300 py-2">
            <h2 className="text-xl font-medium">{task.title}</h2>
            <p className="text-gray-600">{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
