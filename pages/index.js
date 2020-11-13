import React from 'react';
import { withTranslation } from '../i18n';
import Layout from '../components/layout.js';
import SubHeader from '../components/sub-header.js';
import CardMountain from '../components/cardMountain.js';

function Home({ t }) {
  const meta = {
    title: t('page_title'),
    description: t('page_description'),
    component: <SubHeader title={t('menu_title')} />
  }

  const mountains = {
    0: {
      title: 'mountain 1'
    },
    1: {
      title: 'mountain 2'
    },
  }

  return (
    <Layout meta={meta}>
      <h1>Mes montagnes</h1>
      {Object.keys(mountains).map(function (key) {
        return <CardMountain key={key} data={mountains[key]} />
      })}
    </Layout>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['home', 'footer'],
});

export default withTranslation('home')(Home)