import '../styles/index.scss';
import { compose } from 'redux'
import { Provider } from 'react-redux'
import initStore from '../redux';
import withRedux from "next-redux-wrapper";
import React from 'react';
import App from 'next/app'
import { appWithTranslation } from '../i18n';

class MyApp extends App {
  render() {
    //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps } = this.props;

    return (
      <Provider store={initStore()}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

//makeStore function that returns a new store for every request
//const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
//export default appWithTranslation(MyApp)
//export default withRedux(initStore)(MyApp);

export default withRedux(initStore)(appWithTranslation(MyApp));