// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import TaskList from './components/Tasks/TaskList';
import TaskDetail from './components/Tasks/TaskDetail';
import MessageList from './components/Messages/MessageList';
import SendMessage from './components/Messages/SendMessage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/tasks/:id" element={<TaskDetail />} />
        <Route path="/messages" element={<MessageList />} />
        <Route path="/messages/send" element={<SendMessage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;