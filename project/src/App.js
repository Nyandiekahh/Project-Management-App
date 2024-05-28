import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import UserStatus from './components/UserStatus';
import UserLogs from './components/UserLogs';
import DelegateTask from './components/DelegateTask';
import { AuthProvider } from './contexts/AuthContext';
import { TaskProvider } from './contexts/TaskContext';

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/tasks" element={<TaskList />} />
            <Route path="/task/:id" element={<TaskDetail />} />
            <Route path="/status" element={<UserStatus />} />
            <Route path="/logs" element={<UserLogs />} />
            <Route path="/delegate" element={<DelegateTask />} />
            <Route path="/" element={<TaskList />} />
          </Routes>
        </Router>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
