import React from "react";
import { Helmet } from "react-helmet";

const MetaData = ({ title, content, keyword }) => {
  return (
    <Helmet>
      <title>{`Osperb | ${title}`}</title>
      <link rel="canonical" href="/" />
      <meta name="Description" content={content} />
      <meta property="og:title" content={content} />
      <meta property="og:description" content={content} />
      <meta property="og:type" content="website" />
      <meta name="keywords" content={keyword}></meta>
      <meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34=" />
      <meta name="robots" content="noindex,nofollow" />
    </Helmet>
  );
};

export default MetaData;
