import { withTranslation } from '../i18n';
import Layout from '../components/layout.js';

function Home({ t }) {
  return (
    <Layout title={t('page_title')} description={t('page_description')}>
      {t('page_title')}{t('page_description')}
    </Layout>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['home', 'footer'],
});

export default withTranslation('home')(Home)