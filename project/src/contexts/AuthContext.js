import React, { createContext, useState } from 'react';
import authService from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [logs, setLogs] = useState([]);

  const login = async (username, password) => {
    const loggedInUser = await authService.login(username, password);
    setUser(loggedInUser);
  };

  const logout = () => {
    setUser(null);
  };

  const fetchUsers = async () => {
    const fetchedUsers = await authService.getUsers();
    setUsers(fetchedUsers);
  };

  const fetchLogs = async () => {
    const fetchedLogs = await authService.getLogs();
    setLogs(fetchedLogs);
  };

  return (
    <AuthContext.Provider value={{ user, users, logs, login, logout, fetchUsers, fetchLogs }}>
      {children}
    </AuthContext.Provider>
  );
};
