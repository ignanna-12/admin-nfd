import React from 'react';
import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <NavLink to={'/'}>
        <button className={styles.textButton}>Главная страница</button>
      </NavLink>
      <div className={styles.copyright}>Copyright © 2020 Simbirsoft</div>
    </div>
  );
};

export default Footer;
