import React from "react";
import Head from "next/head";
import "./global.css";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>launchmystore</title>
       
         <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <div className="font-FreeSans overflow-x-hidden">
      <SessionProvider session={pageProps.session}>  
      <Component {...pageProps} />
      <ToastContainer />
      </SessionProvider>   
      </div>
    </React.Fragment>
  );
}

export default MyApp;
