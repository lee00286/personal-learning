/**
 * This page renders page by SSR.
 * On Next.js App Router, SSG is the default behavior for server components without dynamic functions.
 */

async function getRandomDogImg() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function SsgTest() {
  const dogImg = await getRandomDogImg();

  if (!dogImg?.message || dogImg?.status !== 'success') {
    throw new Error('Failed to fetch data');
  }

  const imgUrl = dogImg.message;
  const timestamp = new Date().toLocaleTimeString();

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
      <h1><strong>Static Site Generation (SSG)</strong> Page Test</h1>
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
