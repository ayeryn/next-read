import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const Users = async () => {
  // 1. Static Rendering
  // Static rendering by fetch() default
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  // 2. Disable cache
  // const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  // "cache": "no-store"
  // });
  const users: User[] = await res.json();
  return (
    <div className="flex flex-col items-center justify-between my-5">
      <h2 className="text-2xl font-semibold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
        Users
      </h2>
      <table className="table table-bordered max-w-3xl">
        <thead>
          <tr>
            <th>User Name</th>
            <th>User Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
