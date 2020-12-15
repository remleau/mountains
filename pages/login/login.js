import { useDispatch } from 'react-redux';
import { logMeIn } from '../../redux/reducerUsers.js';

import { withTranslation } from '../../i18n';

const Login = ({ t }) => {
  const dispatch = useDispatch();


  const log = () => {
    dispatch(logMeIn());
  }

  return (
    <div onClick={()=> log()}>Login</div>
  )
}


Login.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
});

export default withTranslation('about')(Login);