import '@/styles/globals.css';
import Head from 'next/head';
import { Fragment, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    })
  }, [])

  return (
    <>
      <Head>
        <title>
          Omladinska zadruga - Gradac
        </title>
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  )

}
