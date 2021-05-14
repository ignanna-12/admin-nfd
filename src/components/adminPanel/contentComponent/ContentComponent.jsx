import React from 'react';
import CarCard from './carCard/CarCard';
import CarOptions from './carCard/carOptions/CarOptions';
import styles from './ContentComponent.module.scss';

const ContentComponent = () => {
  return (
    <div className={styles.component}>
      <CarCard />
      <CarOptions />
    </div>
  );
};

export default ContentComponent;
