import siteMetadata from 'database/sitemap';

export const pageview = (url: string) => {
  window.gtag('config', siteMetadata.analytics.google, {
    page_path: url,
  });
};
