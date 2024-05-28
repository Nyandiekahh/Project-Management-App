import React, { createContext, useState } from 'react';
import taskService from '../services/taskService';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(null);

  const fetchTasks = async () => {
    const fetchedTasks = await taskService.getTasks();
    setTasks(fetchedTasks);
  };

  const fetchTask = async (id) => {
    const fetchedTask = await taskService.getTask(id);
    setTask(fetchedTask);
  };

  const delegateTask = async (taskId, delegateTo) => {
    await taskService.delegateTask(taskId, delegateTo);
    fetchTasks();
  };

  return (
    <TaskContext.Provider value={{ tasks, task, fetchTasks, fetchTask, delegateTask }}>
      {children}
    </TaskContext.Provider>
  );
};
