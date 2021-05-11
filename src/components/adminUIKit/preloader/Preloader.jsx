import React from 'react';
import preloader from '../../../assets/images/loading.gif';
import styles from './Preloader.module.scss';

const Preloader = () => (
  <div className={styles.preloader}>
    <img src={preloader} />
  </div>
);

export default Preloader;
