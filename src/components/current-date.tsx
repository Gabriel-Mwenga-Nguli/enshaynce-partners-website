'use client';

import { useState, useEffect } from 'react';

export default function CurrentDate() {
  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  if (!date) {
    // Return null or a placeholder on the server and during initial client render
    return null;
  }

  return <>{date}</>;
}
