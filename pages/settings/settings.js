import Layout from '../../components/layout.js';
import SubHeader from '../../components/sub-header.js';

import { withTranslation } from '../../i18n';


const Settings = ({ t }) => {
  const meta = {
    title: t('page_title'),
    description: t('page_description'),
    component: <SubHeader title={'Settings'} link={'/settings'} />
  }

  return (
    <Layout meta={meta}>
      <h1>Settings app</h1>

    </Layout>
  )
}


Settings.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
});

export default withTranslation('about')(Settings)