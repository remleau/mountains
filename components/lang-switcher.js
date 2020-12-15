import { i18n, withTranslation } from '../i18n';

const Switcher = ({ t }) => (
  <div className="lang-switcher">
    <div className="flag">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
      <span>{t('change_locale')}</span>
    </div>
    <div className="buttons">
      <button className={i18n.language === 'fr' ? 'actif' : ''} type='button' onClick={() => i18n.changeLanguage('fr')}>
        <span>{t('locale_fr')}</span>
      </button>
      <button className={i18n.language === 'en' ? 'actif' : ''} type='button' onClick={() => i18n.changeLanguage('en')}>
        <span>{t('locale_en')}</span>
      </button>
    </div>
  </div>
)

Switcher.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

export default withTranslation('common')(Switcher)