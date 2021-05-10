import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { userIdSel } from '../../../redux/selectors/selectors';
import { requestAccess } from '../../../redux/thunk/auth.thunk';
import MyButtonBlue from '../../adminUIKit/MyButtonBlue';
import MyInputField from '../../adminUIKit/myInputField/MyInputField';
import styles from './LoginForm.module.scss';

let LoginForm = ({ onSubmit }) => {
  const userId = useSelector(userIdSel);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const reqAccess = (e, p) => {
    if (e == '' || p == '') {
      alert('Заполните поля формы');
    } else {
      requestAccess(e, p);
    }
    serverAnswer();
  };
  const serverAnswer = () => {
    if (userId != '') {
      alert('Доступ разрешен');
    } else {
      alert('Сервер не отвечает');
    }
  };
  return (
    <div onSubmit={onSubmit} className={styles.form}>
      <MyInputField
        title={'Почта'}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <MyInputField
        title={'Пароль'}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <div className={styles.buttons}>
        <button className={styles.textButton} onClick={() => reqAccess(email, password)}>
          Запросить доступ
        </button>
        <NavLink to="/admin">
          <MyButtonBlue />
        </NavLink>
      </div>
    </div>
  );
};

// LoginForm = reduxForm({
//   form: 'login',
// })(LoginForm);

export default LoginForm;
