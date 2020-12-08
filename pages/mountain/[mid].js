// important stuff
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

// traduction
import { withTranslation } from '../../i18n';

// components
import Layout from '../../components/layout.js';
import SubHeader from '../../components/sub-header.js';
import CardMountain from '../../components/cardMountain.js';


const SingleMoutain = ({ t }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  let { mountains, isFetching } = useSelector((state) => state.mountains);
  const { mid } = router.query;

  const meta = {
    title: t('page_title'),
    description: t('page_description'),
    component: <SubHeader breadcrumbs='allo' title={t('menu_title')} link={'/'} />
  }

  useEffect(() => {
    dispatch({
      type: 'get_by_id/mountains',
      payload: {
        mid: mid,
        isFetching: true
      }
    });
  }, [dispatch]);
  
  return (
    <Layout meta={meta}>
      {
        isFetching ?
        <h2>loading</h2> : 
        Object.keys(mountains).map(function (key) {
          return <CardMountain key={key} data={mountains[key]} />
        })
      }
    </Layout>
  );
}


// Translation json
SingleMoutain.getInitialProps = async () => ({
  namespacesRequired: ['home', 'footer']
});

export default withTranslation('home')(SingleMoutain)