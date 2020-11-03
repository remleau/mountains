
import PropTypes from 'prop-types'
import React from 'react';
import { i18n, withTranslation } from '../i18n';

const Switcher = ({ t }) => (
  <React.Fragment>
    <button type='button' onClick={() => i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr')}>
      change language
    </button>
  </React.Fragment>
)

Switcher.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Switcher)