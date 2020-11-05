import Layout from '../../components/layout.js';
import { withTranslation } from '../../i18n';

function About({ t }) {
  return (
    <Layout title={t('title')} description={t('description')}>
      about
    </Layout>
  )
}

About.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
});

export default withTranslation('common')(About)