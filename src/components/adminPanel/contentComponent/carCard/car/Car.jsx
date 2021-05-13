import React from 'react';
import styles from './Car.module.scss';
import defCar from '../../../../../assets/images/car.jpg';

const Car = ({ model, categ, image }) => {
  return (
    <div className={styles.cell}>
      <div className={styles.car_image}>
        <img src={image ? image : defCar} />
      </div>
      <div className={styles.model}>{model ? model : 'Model'}</div>
      <div className={styles.categ}>{categ ? categ : 'no-category'}</div>
    </div>
  );
};

export default Car;
