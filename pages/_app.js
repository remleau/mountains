import '../styles/index.scss';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Provider } from 'react-redux'
import { useStore } from '../redux';
import { isLogged } from '../redux/reducerUsers.js';

import { i18n, appWithTranslation } from '../i18n';


const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  const store = useStore(pageProps.initialReduxState);

  useEffect(() => {
    store.dispatch(isLogged()).then((result) => {
      if (result == true) {
        if(router.pathname == '/login'){
          router.push(i18n.language + '/');
        } else {
          router.push(router.asPath);
        }
      }

      if (result == false) {
        router.push(i18n.language + '/login');
      }
    })
  }, [])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(MyApp);