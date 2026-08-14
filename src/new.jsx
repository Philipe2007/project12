import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
      <h1>Users List</h1>

      {users.map(user => (
        <p key={user.id}>
          {user.id} {user.name}
        </p>
      ))}

      <Link to="/home">Go to Home</Link>
    </>
  );
}

export default Users;