import React from 'react';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import MyButtonBlue from '../../adminUIKit/MyButtonBlue';
import styles from './LoginForm.module.scss';

let LoginForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="eMail">Почта</label>
        <Field name="email" component="input" type="text" />
      </div>
      <div className={styles.field}>
        <label htmlFor="password">Пароль</label>
        <Field name="password" component="input" type="password" />
      </div>
      <div className={styles.buttons}>
        <button className={styles.textButton}>Запросить доступ</button>
        <NavLink to="/admin">
          <MyButtonBlue />
        </NavLink>
      </div>
    </form>
  );
};

LoginForm = reduxForm({
  form: 'login',
})(LoginForm);

export default LoginForm;
