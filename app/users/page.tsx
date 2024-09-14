import React from 'react'

interface User {
  id: number;
  name: string;
}

const Users = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return (
    <main>
      <h1>Users</h1>
      <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    </main>
  )
}

export default Users