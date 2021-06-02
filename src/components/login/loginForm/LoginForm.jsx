import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  isErrorAuthSel,
  isLoadingAuthSel,
  userIdLoginSel,
} from '../../../redux/selectors/authSelectors';
import { requestAccess, requestAuth } from '../../../redux/thunk/authThunk';
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
  const handleKeyPress = (event) => {
    if (event.keyCode == 13) {
      console.log('enter press here!');
    }
  };

  return (
    <div className={styles.form}>
      {isLoading && <Preloader />}
      {userIdLogin && <Redirect to="/admin"></Redirect>}
      <form>
        <InputField
          title={'Почта'}
          error={emptyEmail || isError}
          errorReason={emptyEmail ? 'Заполните поле' : 'Пользователь не найден'}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmptyEmail(false);
          }}
        />
        <div className={styles.space}></div>
        <InputField
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
          <ButtonBlue
            title={'Войти'}
            type="submit"
            onClick={(e) => {
              reqAuth(email, password);
            }}
            tabIndex="1"
          />
          <button
            className={styles.textButton}
            onClick={() => {
              reqAccess(email, password);
            }}
            tabIndex="2"
          >
            Запросить доступ
          </button>
          {/* <button
          onClick={() => alert('Привет!')}
          onKeyPress={(e) => {
            handleKeyPress(e);
          }}
        >
          жми
        </button> */}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
