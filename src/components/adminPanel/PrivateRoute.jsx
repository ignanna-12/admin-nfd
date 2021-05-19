import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { userIdLoginSel } from '../../redux/selectors/authSelectors';
import EnterToAdminPanel from '../login/enterToAdminPanel/EnterToAdminPanel';
import AdminPanel from '../adminPanel/AdminPanel';

const PrivateRoute = () => {
  const userIdLogin = useSelector(userIdLoginSel);

  return (
    <div>{userIdLogin ? <Route path="/admin" component={AdminPanel} /> : <Redirect to="/" />}</div>
  );
};
export default PrivateRoute;
