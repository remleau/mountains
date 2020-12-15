import { useDispatch } from 'react-redux';
import { logMeOut } from '../redux/reducerUsers.js';

// traduction
import { withTranslation } from '../i18n';

const Logout = ({ t }) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logMeOut());
  }

  return (
    <section className="logout">
      <button onClick={logout}>
        {t('logout')}
      </button>
    </section>
  )
}

Logout.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

export default withTranslation('common')(Logout)