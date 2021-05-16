import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  isErrorAuthSel,
  isLoadingAuthSel,
  userIdLoginSel,
} from '../../../redux/selectors/auth_selectors';
import { requestAccess, requestAuth } from '../../../redux/thunk/auth.thunk';
import { requestRate } from '../../../redux/thunk/category.thunk';
import ButtonBlue from '../../adminUIKit/ButtonBlue';
import InputField from '../../adminUIKit/inputField/InputField';
import Preloader from '../../adminUIKit/preloader/Preloader';
import styles from './LoginForm.module.scss';

let LoginForm = ({ onSubmit }) => {
  const userIdLogin = useSelector(userIdLoginSel);
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
      {isLoading && <Preloader />}
      {userIdLogin && <Redirect to="/admin"></Redirect>}
      <InputField
        title={'Почта'}
        error={emptyEmail || isError}
        errorReason={emptyEmail ? 'Заполните поле' : 'Пользователь не найден'}
        onChange={(e) => {
          setEmail(e.target.value);
          setEmptyEmail(false);
        }}
      />
      <InputField
        title={'Пароль'}
        error={emptyPassword || isError}
        errorReason={emptyPassword ? 'Заполните поле' : 'Пользователь не найден'}
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
        <ButtonBlue
          title={'Войти'}
          onClick={() => {
            reqAuth(email, password);
          }}
        />
      </div>
    </div>
  );
};

export default LoginForm;
