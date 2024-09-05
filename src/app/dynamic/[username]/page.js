'use client'

import { useParams , useRouter } from 'next/navigation';

export default function Dynamic() {
  const params = useParams();
  const username = params.username; // Access the dynamic route parameter

  const router = useRouter();

  return (
    <div>
      <h1>This is the dynamic {username} page</h1>
      <button onClick={(e) => router.push(`../../dynamic/${username}/setting`)}>Open Setting Page</button>
    </div>
  );
}