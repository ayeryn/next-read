import React from 'react'

interface User {
  id: number;
  name: string;
}

const Users = async () => {
  // Static rendering by fetch() default
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  return (
    <main>
      <h1>Users</h1>
      {/* Static rendering => the ts won't change after built */}
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    </main>
  )
}

export default Users