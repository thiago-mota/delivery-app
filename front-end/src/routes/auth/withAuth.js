import { Redirect } from 'react-router-dom';
import { getLocalStorage } from '../../utils/localStorage';

const withAuth = (component) => {
  const userData = getLocalStorage('user');
  console.log(userData?.role === 'customer');
  return userData?.role === 'customer' ? <Redirect to="/customer/products" /> : component;
};

export default withAuth;
