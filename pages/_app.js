import '../styles/index.scss';
import { Provider } from 'react-redux'
import initStore from '../redux';
import withRedux from "next-redux-wrapper";
import React from 'react';
import { appWithTranslation } from '../i18n';


const MyApp = ({ Component, pageProps }) => {

    return (
      <Provider store={initStore()}>
        <Component {...pageProps} />
      </Provider>
    );
}

export default withRedux(initStore)(appWithTranslation(MyApp));