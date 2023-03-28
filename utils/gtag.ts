import metaData from 'database/metaData';

export const pageview = (url: string) => {
  window.gtag('config', metaData.analytics.google, {
    page_path: url,
  });
};
