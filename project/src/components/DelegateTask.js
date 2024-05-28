import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';

function DelegateTask() {
  const { tasks, delegateTask } = useContext(TaskContext);
  const [taskId, setTaskId] = useState('');
  const [delegateTo, setDelegateTo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    delegateTask(taskId, delegateTo);
  };

  return (
    <div>
      <h2>Delegate Task</h2>
      <form onSubmit={handleSubmit}>
        <select onChange={(e) => setTaskId(e.target.value)}>
          <option value="">Select Task</option>
          {tasks.map((task) => (
            <option key={task.id} value={task.id}>
              {task.title}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={delegateTo}
          onChange={(e) => setDelegateTo(e.target.value)}
          placeholder="Delegate to"
        />
        <button type="submit">Delegate</button>
      </form>
    </div>
  );
}

export default DelegateTask;
