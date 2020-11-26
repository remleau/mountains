// important stuff
import React from 'react';
import { useSelector } from 'react-redux';

// traduction
import { withTranslation } from '../i18n';

// components
import Layout from '../components/layout.js';
import SubHeader from '../components/sub-header.js';
import CardMountain from '../components/cardMountain.js';


// page component
const Home = ({ t }) => {
  const { mountains, isFetching } = useSelector((state) => state.mountains);

  const meta = {
    title: t('page_title'),
    description: t('page_description'),
    component: <SubHeader title={t('menu_title')} link={'/'} />
  }

  return (
    <Layout meta={meta}>
      <h1>Mes montagnes</h1>
      <div className="cards">
        {Object.keys(mountains).map(function (key) {
          return <CardMountain key={key} data={mountains[key]} />
        })}
      </div>
    </Layout>
  )
}


// Translation json
Home.getInitialProps = async () => ({
  namespacesRequired: ['home', 'footer']
});

export default withTranslation('home')(Home)