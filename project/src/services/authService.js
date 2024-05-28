const authService = {
    login: async (username, password) => {
      // Mock API call
      return { id: 1, username, name: 'John Doe' };
    },
    getUsers: async () => {
      // Mock API call
      return [
        { id: 1, name: 'John Doe', online: true },
        { id: 2, name: 'Jane Smith', online: false }
      ];
    },
    getLogs: async () => {
      // Mock API call
      return [
        { id: 1, user: 'John Doe', action: 'Logged in', timestamp: '2024-05-28 10:00' },
        { id: 2, user: 'Jane Smith', action: 'Logged out', timestamp: '2024-05-28 11:00' }
      ];
    }
  };
  
  export default authService;
  