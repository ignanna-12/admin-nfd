import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  isErrorAuthSel,
  isLoadingAuthSel,
  userIdLoginSel,
  userIdRegSel,
} from '../../../redux/selectors/selectors';
import { requestAccess, requestAuth } from '../../../redux/thunk/auth.thunk';
import MyButtonBlue from '../../adminUIKit/MyButtonBlue';
import MyInputField from '../../adminUIKit/myInputField/MyInputField';
import Preloader from '../../adminUIKit/preloader/Preloader';
import styles from './LoginForm.module.scss';

let LoginForm = ({ onSubmit }) => {
  const userIdLogin = useSelector(userIdLoginSel);
  const userIdReg = useSelector(userIdRegSel);
  const isLoading = useSelector(isLoadingAuthSel);
  const isError = useSelector(isErrorAuthSel);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);

  const reqAuth = (e, p) => {
    if (e == '') {
      setEmptyEmail(true);
    } else if (p == '') {
      setEmptyPassword(true);
    } else if (e != '' && p != '') {
      dispatch(requestAuth(e, p));
    }
  };
  const reqAccess = (e, p) => {
    if (e == '') {
      setEmptyEmail(true);
    } else if (p == '') {
      setEmptyPassword(true);
    } else if (e != '' && p != '') {
      dispatch(requestAccess(e, p));
    }
  };

  return (
    <div onSubmit={onSubmit} className={styles.form}>
      {userIdReg && <div style={{ color: '#0EC261' }}>Доступ разрешен</div>}
      {isLoading && <Preloader />}
      {userIdLogin && <Redirect to="/admin"></Redirect>}
      <MyInputField
        title={'Почта'}
        error={emptyEmail || isError}
        errorReason={emptyEmail ? 'Заполните поле' : 'Пользователь не найден'}
        onChange={(e) => {
          setEmail(e.target.value);
          setEmptyEmail(false);
        }}
      />
      <MyInputField
        title={'Пароль'}
        error={emptyPassword}
        errorReason={'Заполните поле'}
        password={'password'}
        onChange={(e) => {
          setPassword(e.target.value);
          setEmptyPassword(false);
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
