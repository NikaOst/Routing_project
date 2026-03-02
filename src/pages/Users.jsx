import React from 'react';
import { Link } from 'react-router-dom';

function Users() {
  const users = [
    { id: 0, name: 'Anna', age: 20 },
    { id: 1, name: 'Alex', age: 24 },
  ];
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>
            name: {user.name}, age:{user.age}
          </p>
          <Link to={`/user/${user.id}`} state={{ users }}>
            Go to profile
          </Link>
        </div>
      ))}
    </div>
  );
}
export default Users;
