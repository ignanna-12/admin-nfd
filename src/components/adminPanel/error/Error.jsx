import React from 'react';
import ButtonBlue from '../../adminUIKit/ButtonBlue';
import styles from './Error.module.scss';
const Error = () => {
  return (
    <div className={styles.error}>
      <div className={styles.h1}>500</div>
      <div className={styles.text}>Что то пошло не так</div>
      <div className={styles.more_text}>Попробуйте перезагрузить страницу</div>
      <ButtonBlue title={'Назад'} onClick={() => window.history.back()} />
    </div>
  );
};

export default Error;
