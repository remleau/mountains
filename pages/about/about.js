import Layout from '../../components/layout.js';
import { withTranslation } from '../../i18n';

function About({ t }) {
  return (
    <Layout>
      <h1>About app</h1>

    </Layout>
  )
}

About.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
});

export default withTranslation('common')(About)