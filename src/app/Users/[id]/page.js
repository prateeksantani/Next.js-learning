"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Use next/navigation instead of next/router

const UserInfoPage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const params = useParams(); // Get parameters from the route

  useEffect(() => {
    const id = params?.id;
    
    if (id) {
      async function getUserById(id) {
        try {
          const response = await fetch(`https://dummyjson.com/users/${id}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setUserInfo(data);
        } catch (error) {
          console.error('Failed to fetch user:', error);
        }
      }
      getUserById(id);
    }
  }, [params?.id]);

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{userInfo.firstName}</h1>
      <h1>{userInfo.email}</h1>
      <h1>{userInfo.age}</h1>
      <h1>{userInfo.gender}</h1>
    </div>
  );
};

export default UserInfoPage;
