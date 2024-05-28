const taskService = {
    getTasks: async () => {
      // Mock API call
      return [
        { id: 1, title: 'Task 1', description: 'Description 1', assignedTo: 'John Doe' },
        { id: 2, title: 'Task 2', description: 'Description 2', assignedTo: 'Jane Smith' }
      ];
    },
    getTask: async (id) => {
      // Mock API call
      return { id, title: 'Task ' + id, description: 'Description ' + id, assignedTo: 'John Doe' };
    },
    delegateTask: async (taskId, delegateTo) => {
      // Mock API call
      return { success: true };
    }
  };
  
  export default taskService;
  