'use client'

import { useParams } from 'next/navigation';

const DynamicPage = () => {
  const params = useParams();
  const  username  =  params.username;

  return <h1>This is a Setting page by {username}</h1>;
};

export default DynamicPage;
