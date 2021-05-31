import React from 'react';
import ButtonBlue from '../../adminUIKit/ButtonBlue';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import SideBar from '../sideBar/SideBar';
import styles from './Error.module.scss';
const Error = () => {
  return (
    <div className={styles.panel}>
      <div className={styles.header_sidebar}>
        <SideBar onClick={(v) => setActivePage(v)} />
        <div className={styles.header_footer}>
          <Header />
          <div className={styles.content}>
            <div className={styles.error}>
              <div className={styles.h1}>500</div>
              <div className={styles.text}>Что то пошло не так</div>
              <div className={styles.more_text}>Попробуйте перезагрузить страницу</div>
              <ButtonBlue title={'Назад'} onClick={() => history.back()} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Error;
