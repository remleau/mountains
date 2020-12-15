// important stuff
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

// traduction
import { withTranslation } from '../../i18n';

// components
import Layout from '../../components/layout.js';
import SubHeader from '../../components/sub-header.js';


const SingleMoutain = ({ t }) => {
  const router = useRouter();
  const { mid } = router.query;
  let { mountains } = useSelector((state) => state.mountains);

  const _mountains = () => {
    const single_mountain = Object.keys(mountains).reduce(function (r, e) {
      if (mid == mountains[e].id) r[e] = mountains[e]
      return r
    }, {});

    console.log(single_mountain);

    return single_mountain[mid - 1];
  }

  const { id, title, excerpt, image } = _mountains();

  const meta = {
    title: t('page_title'),
    description: t('page_description'),
    component: <SubHeader title={title} link={'/'} />,
    wrapperClass: 'singles'
  }
  
  return (
    <Layout meta={meta}>
      <div className="hero" style={{ backgroundImage: 'url('+ image +')' }}>
        <h1>{title}</h1>
      </div>
    </Layout>
  );
}


// Translation json
SingleMoutain.getInitialProps = async () => ({
  namespacesRequired: ['home', 'footer']
});

export default withTranslation('home')(SingleMoutain)