'use client'

import { useParams } from 'next/navigation';

export default function Dynamic() {
  const params = useParams();
  const companyName = params.company; // Access the dynamic route parameter

  return (
    <div>
      <h1>This is the dynamic {companyName} page</h1>
    </div>
  );
}