import React from 'react';
import Head from 'next/head';
import Header from './header.js';
import Footer from './footer.js';
import { withTranslation } from '../i18n';

function Layout({ children, meta, t}) {
  const default_meta = {
    title: t('page_title'),
    description: t('page_description'),
    component: ''
  }

  const {
    title,
    description,
    component
  } = {...default_meta, ...meta};

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      
      <div className="wrapper">
        {component}
        <div className="sub-wrapper">
          {children}
        </div>
        <Footer />
      </div>

    </React.Fragment>
  )
}

export default withTranslation('common')(Layout)