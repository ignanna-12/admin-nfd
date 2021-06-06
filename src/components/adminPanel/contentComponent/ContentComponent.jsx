import React from 'react';
import CarCard from './carCard/CarCard';
import CarOptions from './carCard/carOptions/CarOptions';
import styles from './ContentComponent.module.scss';

const ContentComponent = () => {
  return (
    <div className={styles.component}>
      <CarCard />
      <div className={styles.for_mobile}>
        <CarOptions />
      </div>
    </div>
  );
};

export default ContentComponent;
