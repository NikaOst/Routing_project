import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  const {
    state: { users },
  } = useLocation();

  return (
    <div>
      {users.map((user) => {
        if (user.id === Number(id))
          return (
            <div key={user.id}>
              <h1>Здравствуй, {user.name}!</h1>
              <p>Тебе {user.age}!</p>
            </div>
          );
      })}
    </div>
  );
}
export default UserProfile;
