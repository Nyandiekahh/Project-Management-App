// frontend/src/components/Tasks/TaskDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    // Fetch task details from backend
    axios.get(`/api/tasks/${id}`)
      .then(response => setTask(response.data))
      .catch(error => console.error('Failed to fetch task details:', error));
  }, [id]);

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-4">{task.title}</h1>
      <p>{task.description}</p>
    </div>
  );
}

export default TaskDetail;
