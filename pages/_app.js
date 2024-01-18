import React from "react";
import Head from "next/head";
import "../styles/global.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import SEOHead from "../components/head";



function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <React.StrictMode>
      {/* <Head>
        <title>launchmystore</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head> */}
      <SEOHead />
      <div className="font-freesans overflow-x-hidden">
        <SessionProvider session={pageProps.session}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Component {...pageProps} />
            </PersistGate>
          </Provider>
        </SessionProvider>
      </div>
    </React.StrictMode>
  );
}

export default MyApp;
