// important stuff
import React from 'react';

// pages
import Home from './home';

// traduction
import { withTranslation } from '../i18n';

const App = ({ t }) => {

  return (
    <React.Fragment>
      <Home />
    </React.Fragment>
  )
}


// Translation json
App.getInitialProps = async () => ({
  namespacesRequired: ['home', 'footer']
});

export default withTranslation('home')(App)