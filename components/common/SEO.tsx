import Head from 'next/head';
import metaData from 'database/metaData';

const SEO = () => {
  return (
    <Head>
      {/* Default SEO */}
      <title>{metaData.title}</title>
      <link rel="icon" href="/assets/images/favicon.png" />
      <meta name="description" content={metaData.description} />
      <meta name="keywords" content={metaData.keywords} />
      <meta name="author" content={metaData.author} />
      <meta name="reply-to" content={metaData.email} />
      <link rel="canonical" href={metaData.siteUrl} />

      {/* 로봇 방문 허용 */}
      <meta name="robots" content="follow, index" />

      {/* Open Graph */}
      <meta property="og:site_name" content={metaData.sitename} />
      <meta property="og:title" content={metaData.title} />
      <meta property="og:description" content={metaData.description} />
      <meta property="og:image" content={metaData.image} />
      <meta property="og:url" content={metaData.siteUrl} />
      <meta property="og:locale" content={metaData.locale} />
      <meta property="og:type" content={metaData.type} />

      {/* Twitter card */}
      <meta name="twitter:title" content={metaData.title} />
      <meta name="twitter:description" content={metaData.description} />
      <meta name="twitter:image" content={metaData.image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default SEO;
