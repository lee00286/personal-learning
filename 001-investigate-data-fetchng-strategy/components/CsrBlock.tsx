'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";

function CsrBlock() {
  const [imgUrl, setImgUrl] = useState<string | null>(null);
  const [timestamp, setTimestamp] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random').then((res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      return res.json();
    }).then((dogImg) => {
      if (!dogImg?.message || dogImg?.status !== 'success') {
        throw new Error('Failed to fetch data');
      }

      setImgUrl(dogImg.message);
      setTimestamp(new Date().toLocaleTimeString());
    });
  }, []);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
      <h1><strong>Client-Side Rendered (CSR)</strong> Page Test</h1>
      <p>
        <small>This page was rendered on the server at: {timestamp ?? 'unknown'}</small>
      </p>

      {imgUrl && (
        <img
          src={imgUrl}
          alt="A random dog image"
          width={300}
          height={300}
        />
      )}
    </div>
  );
}

export default dynamic(() => Promise.resolve(CsrBlock), {
  ssr: false
});
