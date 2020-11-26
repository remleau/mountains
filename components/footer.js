import { withTranslation } from '../i18n';

function Footer({ t }) {
  return (
    <footer>
      <p>Copyright</p>
    </footer>
  )
}

export default withTranslation('footer')(Footer)