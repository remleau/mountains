import React from 'react';
import Head from 'next/head';
import Header from './header.js';
import Footer from './footer.js';

export default function Layout({
  children,
  title = 'Moutains',
  description = 'This is the description',
}) {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      {children}

      <Footer />
    </React.Fragment>
  )
}