/**
 * This page renders page by SSR.
 * On Next.js App Router, SSR is used for server components with dynamic functions.
 * Dynamic functions: dynanic, cache, revalidate
 */

export const dynamic = 'force-dynamic';

async function getRandomDogImg() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random', {
    // Prevent caching to ensure the data is dynamic on every request
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function SsrTest() {
  const dogImg = await getRandomDogImg();

  if (!dogImg?.message || dogImg?.status !== 'success') {
    throw new Error('Failed to fetch data');
  }

  const imgUrl = dogImg.message;
  const timestamp = new Date().toLocaleTimeString();

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
      <h1><strong>Server-Side Rendered (SSR)</strong> Page Test</h1>
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
