import React from "react";
import Head from "next/head";
import "./global.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>launchmystore</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div className="font-FreeSans overflow-x-hidden">

      <Component {...pageProps} />
      </div>
    </React.Fragment>
  );
}

export default MyApp;
