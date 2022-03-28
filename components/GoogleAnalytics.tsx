import Script from 'next/script';

import siteMetadata from 'database/sitemap';

export const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${siteMetadata.analytics.google}`}
      ></Script>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${siteMetadata.analytics.google}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};
