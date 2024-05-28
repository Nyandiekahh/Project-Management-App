import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TaskContext } from '../contexts/TaskContext';

function TaskDetail() {
  const { id } = useParams();
  const { task, fetchTask } = useContext(TaskContext);

  useEffect(() => {
    fetchTask(id);
  }, [id, fetchTask]); // Add fetchTask to the dependency array

  return (
    <div>
      {task ? (
        <>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>Assigned to: {task.assignedTo}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default TaskDetail;
