import React from 'react';
import { useSelector } from 'react-redux';
import { imageCarSel } from '../../../../../redux/selectors/car_selectors';
import styles from './Car.module.scss';
import defCar from '../../../../../assets/images/4BCmG_w4dvvs_tzfWACzk8mLiPA-1920.jpg';

const Car = ({ model, categ, image }) => {
  const imageCar = useSelector(imageCarSel);
  return (
    <div className={styles.cell}>
      <div className={styles.car_image}>
        <img src={imageCar ? imageCar : defCar} />
      </div>
      <div className={styles.model}>{model ? model : 'Model'}</div>
      <div className={styles.categ}>{categ ? categ : 'no-category'}</div>
    </div>
  );
};

export default Car;
