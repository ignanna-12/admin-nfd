import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  CarCategoryIdSel,
  CarColorsSel,
  CarDescriptionSel,
  CarNameSel,
  CarPriceMaxSel,
  CarPriceMinSel,
  CarThumbnailSel,
} from '../../../redux/selectors/carSelectors';
import styles from './ProgressBar.module.scss';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const priceMin = useSelector(CarPriceMinSel);
  const priceMax = useSelector(CarPriceMaxSel);
  const carName = useSelector(CarNameSel);
  const thumbnail = useSelector(CarThumbnailSel);
  const description = useSelector(CarDescriptionSel);
  const categoryId = useSelector(CarCategoryIdSel);
  const colors = useSelector(CarColorsSel);
  const changeProgress = () => {
    let pr1;
    if (priceMin != 0) {
      pr1 = 1;
    } else {
      pr1 = 0;
    }
    let pr2;
    if (priceMax != 0) {
      pr2 = 1;
    } else {
      pr2 = 0;
    }
    let pr3;
    if (carName != '') {
      pr3 = 1;
    } else {
      pr3 = 0;
    }
    let pr4;
    if (thumbnail.name) {
      pr4 = 1;
    } else {
      pr4 = 0;
    }
    let pr5;
    if (description != '') {
      pr5 = 1;
    } else {
      pr5 = 0;
    }
    let pr6;
    if (categoryId != '') {
      pr6 = 1;
    } else {
      pr6 = 0;
    }
    let pr7;
    if (colors.length > 0) {
      pr7 = 1;
    } else {
      pr7 = 0;
    }
    setProgress(Math.floor(((pr1 + pr2 + pr3 + pr4 + pr5 + pr6 + pr7) * 100) / 7));
    console.log(pr1, pr2, pr3, pr4, pr5, pr6, pr7);
  };

  useEffect(() => {
    changeProgress();
  }, [colors, categoryId, description, carName, thumbnail, priceMax, priceMin]);

  return (
    <div className={styles.progress_bar}>
      <div className={styles.top_row}>
        <div>Заполнено</div>
        <div>{progress}%</div>
      </div>
      <div className={styles.progress_line}>
        <div className={styles.done_line} style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
