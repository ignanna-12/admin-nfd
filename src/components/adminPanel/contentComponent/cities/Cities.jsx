import React from 'react';
import { Redirect } from 'react-router';
import styles from './Cities.module.scss';
const Cities = () => {
  return (
    <div className={styles.cities}>
      <Redirect to="/error"></Redirect>
    </div>
  );
};

export default Cities;
