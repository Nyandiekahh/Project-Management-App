import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function UserStatus() {
  const { users, fetchUsers } = useContext(AuthContext);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]); // Add fetchUsers to the dependency array

  return (
    <div>
      <h2>User Status</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.online ? 'Online' : 'Offline'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserStatus;
