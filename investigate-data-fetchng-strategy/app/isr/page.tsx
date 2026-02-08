/**
 * This page renders page by ISR.
 * On Next.js App Router, ISR is used for server components with revalidate.
 */

async function getRandomDogImg() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random', {
    // Revalidate the data every 60 seconds
    next: { revalidate: 60 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function IsrTest() {
  const dogImg = await getRandomDogImg();

  if (!dogImg?.message || dogImg?.status !== 'success') {
    throw new Error('Failed to fetch data');
  }

  const imgUrl = dogImg.message;
  const timestamp = new Date().toLocaleTimeString();

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
      <h1><strong>Incremental Static Regeneration (ISR)</strong> Page Test</h1>
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
