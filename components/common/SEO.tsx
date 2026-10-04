import Head from 'next/head';
import metaData, { PageSEO } from 'database/metaData';

const toAbsoluteUrl = (path: string) =>
  path.startsWith('http') ? path : `${metaData.siteUrl}${path}`;

const SEO = ({ title, description, image, path, noindex }: PageSEO) => {
  const pageTitle = title ? `${title} | ${metaData.title}` : metaData.title;
  const pageDescription = description || metaData.description;
  const pageImage = toAbsoluteUrl(image || metaData.image);
  // 홈은 끝에 '/' 없이 대표 주소 그대로 사용
  const pageUrl = path && path !== '/' ? toAbsoluteUrl(path) : metaData.siteUrl;

  return (
    <Head>
      {/* Default SEO */}
      <title>{pageTitle}</title>
      <link rel="icon" href="/assets/images/favicon.png" />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={metaData.keywords} />
      <meta name="author" content={metaData.author} />
      <meta name="reply-to" content={metaData.email} />
      {!noindex && <link rel="canonical" href={pageUrl} />}

      {/* 로봇 방문 허용 */}
      <meta
        name="robots"
        content={noindex ? 'noindex, follow' : 'follow, index'}
      />

      {/* Open Graph */}
      <meta property="og:site_name" content={metaData.sitename} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:locale" content={metaData.locale} />
      <meta property="og:type" content={metaData.type} />

      {/* Twitter card */}
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default SEO;
