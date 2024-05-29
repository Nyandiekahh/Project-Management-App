// frontend/src/components/Messages/SendMessage.js
import React, { useState } from 'react';
import axios from 'axios';

function SendMessage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send message to backend
    axios.post('/api/messages', { title, content })
      .then(response => console.log('Message sent:', response.data))
      .catch(error => console.error('Failed to send message:', error));
    // Clear form fields
    setTitle('');
    setContent('');
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Send Message</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={e => setContent(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  )}
  
  export default SendMessage;