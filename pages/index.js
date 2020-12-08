// important stuff
import React, { useEffect } from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { isLogged } from '../redux/reducerUsers.js';

// pages
import Home from './home';
import Login from './login';

// traduction
import { withTranslation } from '../i18n';

const App = ({ t }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(isLogged());
  }, [dispatch])

  return (
    <React.Fragment>
      {isLoggedIn ?  <Home /> : <Login />}
    </React.Fragment>
  )
}


// Translation json
App.getInitialProps = async () => ({
  namespacesRequired: ['home', 'footer']
});

export default withTranslation('home')(App)