import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  CarCategoryIdSel,
  CarNameSel,
  imageCarSel,
} from '../../../../../redux/selectors/car_selectors';
import styles from './Car.module.scss';
import defCar from '../../../../../assets/images/4BCmG_w4dvvs_tzfWACzk8mLiPA-1920.jpg';
import { CategorySel } from '../../../../../redux/selectors/category_selectors';

const Car = () => {
  const imageCar = useSelector(imageCarSel);
  const carName = useSelector(CarNameSel);
  const category = useSelector(CategorySel);
  const categoryId = useSelector(CarCategoryIdSel);
  const [categ, setCateg] = useState('');

  useEffect(() => {
    for (var i in category) {
      if (category[i].id == categoryId) {
        setCateg(category[i].name);
      }
    }
  }, [categoryId]);

  return (
    <div className={styles.cell}>
      <div className={styles.car_image}>
        <img src={imageCar ? imageCar : defCar} />
      </div>
      <div className={styles.model}>{carName ? carName : 'Model'}</div>
      <div className={styles.categ}>{categ ? categ : 'no-category'}</div>
    </div>
  );
};

export default Car;
