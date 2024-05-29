// frontend/src/components/Messages/MessageList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MessageList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages from backend
    axios.get('/api/messages')
      .then(response => setMessages(response.data))
      .catch(error => console.error('Failed to fetch messages:', error));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Message List</h1>
      <ul>
        {messages.map(message => (
          <li key={message.id} className="border-b border-gray-300 py-2">
            <h2 className="text-xl font-medium">{message.title}</h2>
            <p className="text-gray-600">{message.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MessageList;
