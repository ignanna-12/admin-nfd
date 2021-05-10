import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { accessTokenSel, userIdSel } from '../../../redux/selectors/selectors';
import { requestAccess, requestAuth } from '../../../redux/thunk/auth.thunk';
import MyButtonBlue from '../../adminUIKit/MyButtonBlue';
import MyInputField from '../../adminUIKit/myInputField/MyInputField';
import styles from './LoginForm.module.scss';

let LoginForm = ({ onSubmit }) => {
  const userId = useSelector(userIdSel);
  const accessToken = useSelector(accessTokenSel);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState(false);

  const reqAuth = (e, p) => {
    if (e == '' || p == '') {
      alert('Заполните поля формы');
    } else {
      dispatch(requestAuth(e, p));
    }
    setAuth(true);
    serverAnswer();
  };
  const reqAccess = (e, p) => {
    if (e == '' || p == '') {
      alert('Заполните поля формы');
    } else {
      dispatch(requestAccess(e, p));
    }
  };
  const serverAnswer = () => {
    if (userId != '' && !auth) {
      alert('Доступ разрешен');
    }
    if (userId == '' && auth) {
      alert('Пользователь не найден');
    }
  };
  useEffect(() => {
    serverAnswer();
  }, [userId]);

  return (
    <div onSubmit={onSubmit} className={styles.form}>
      {auth && accessToken && <Redirect to="/admin"></Redirect>}
      <MyInputField
        title={'Почта'}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <MyInputField
        title={'Пароль'}
        password={'password'}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <div className={styles.buttons}>
        <button
          className={styles.textButton}
          onClick={() => {
            reqAccess(email, password);
          }}
        >
          Запросить доступ
        </button>
        <MyButtonBlue onClick={() => reqAuth(email, password)} />
      </div>
    </div>
  );
};

// LoginForm = reduxForm({
//   form: 'login',
// })(LoginForm);

export default LoginForm;
