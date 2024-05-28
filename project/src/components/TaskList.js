import React, { useContext, useEffect } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function TaskList() {
  const { tasks, fetchTasks } = useContext(TaskContext);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <Box sx={{ mt: 4, mx: 'auto', maxWidth: 600 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Task List
      </Typography>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id} sx={{ borderBottom: '1px solid #ddd' }}>
            <ListItemText primary={task.title} secondary={`Assigned to: ${task.assignedTo}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default TaskList;
