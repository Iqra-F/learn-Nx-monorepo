'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Loading...');
  const [hello, setHello] = useState('Loading...');

  useEffect(() => {
    // Fetch /api
    fetch('http://localhost:3333/api')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Error fetching /api'));

    // Fetch /api/hello
    fetch('http://localhost:3333/api/hello')
      .then((res) => res.json())
      .then((data) => setHello(data.message))
      .catch(() => setHello('Error fetching /api/hello'));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1 className='text-pink-500 font-bold  '>API Integration Test</h1>
      <p>/api message: {message}</p>
      <p>/api/hello message: {hello}</p>
    </div>
  );
}
