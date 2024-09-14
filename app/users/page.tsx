import React from 'react'

interface User {
  id: number;
  name: string;
}

const Users = async () => {
  // 1. Static Rendering 
  // Static rendering by fetch() default
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  
  // 2. Disable cache
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    "cache": "no-store"
  });
  const users: User[] = await res.json();
  return (
    <main>
      <h1>Users</h1>
      {/* Dynamic rendering => ts updates every time it's refreshed */}
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    </main>
  )
}

export default Users 