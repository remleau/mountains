import React, { useEffect } from 'react';

import Layout from '../../components/layout.js';
import SubHeader from '../../components/sub-header.js';

import { useSelector } from 'react-redux';

import { withTranslation } from '../../i18n';


const About = ({ t }) => {
  const meta = {
    title: t('page_title'),
    description: t('page_description'),
    component: <SubHeader title={t('menu_title')} link={'/about'} />
  }

  const { isLoggedIn } = useSelector((state) => state.users);


  useEffect(()=> {
    console.log(isLoggedIn);
  }, [])

  return (
    <Layout meta={meta}>
      <h1>About app</h1>

    </Layout>
  )
}


About.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
});

export default withTranslation('about')(About)