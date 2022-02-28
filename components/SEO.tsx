import Head from 'next/head';

const SEO = () => {
  return (
    <Head>
      {/* SEO 용 */}
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/assets/images/favicon.png" />

      <title>YAPP</title>
      <meta
        name="description"
        content="작은 아이디어로 세상을 크게 변화시키는 IT동아리, YAPP"
      />

      {/* Open Graph */}
      <meta property="og:title" content="YAPP" />
      <meta
        property="og:description"
        content="작은 아이디어로 세상을 크게 변화시키는 IT동아리, YAPP"
      />
      <meta property="og:image" content="https://i.ibb.co/3MJkrs0/image.png" />
    </Head>
  );
};

export default SEO;
