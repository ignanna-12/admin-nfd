import React from 'react';
import styles from './ContentComponent.module.scss';

const ContentComponent = ({ title }) => {
  return (
    <div className={styles.component}>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default ContentComponent;
