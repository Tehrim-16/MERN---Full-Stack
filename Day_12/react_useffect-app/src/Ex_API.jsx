import { useEffect, useState } from "react";

function Ex_API() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });

  }, []);

  return (
    <div>

      <h1>User List</h1>

      {users.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}

    </div>
  );
}
export default Ex_API;