import { withTranslation } from '../i18n';

function Footer({ t }) {
  return (
    <footer>
      {t('description')}
    </footer>
  )
}

export default withTranslation('footer')(Footer)