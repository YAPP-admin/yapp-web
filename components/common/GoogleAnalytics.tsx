import metaData from 'database/metaData';

export const GoogleAnalyticsScript = () => {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${metaData.analytics.google}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${metaData.analytics.google}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};
