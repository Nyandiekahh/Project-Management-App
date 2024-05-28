import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function UserLogs() {
  const { logs, fetchLogs } = useContext(AuthContext);

  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]); // Add fetchLogs to the dependency array

  return (
    <div>
      <h2>User Logs</h2>
      <ul>
        {logs.map((log) => (
          <li key={log.id}>
            {log.user} - {log.action} - {log.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserLogs;
