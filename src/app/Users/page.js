'use client'

import { useEffect , useState } from "react";
import Link from "next/link";

const UserPage = () => {

  const [users, setUsers]  = useState([]);

  console.log("Users", users);

  useEffect(() => {
    async function fetchUsers(){
      const data = await fetch('https://dummyjson.com/users');

      setUsers(await data.json());
    }
    fetchUsers()
  },[])

  return(
    <div>
    <h1>Users</h1>
    {
      users.users &&
      users.users.map(user => <Link href={`../Users/${user.id}`} key={user.id}>
      <div>{user.firstName}</div> </Link>)
    }
    </div>
  )
}

export default UserPage;