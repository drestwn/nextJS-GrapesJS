// pages/index.js
import Head from 'next/head';
import GrapeJS from '../components/grapejs';

export default function Home() {
  return (
    <div>
      <Head>
        <title>GrapeJS with Next.js</title>
        <meta name="description" content="Integrating GrapeJS with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <GrapeJS />
      </main>
    </div>
  );
}
