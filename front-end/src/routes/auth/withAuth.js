import { Redirect } from 'react-router-dom';
import { getLocalStorage } from '../../utils/localStorage';

const withAuth = (component) => {
  const userData = getLocalStorage('user');
  return userData?.token ? component : <Redirect to="/login" />;
};

export default withAuth;
