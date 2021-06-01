import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  CarColorsSel,
  CarDescriptionSel,
  CarNameSel,
  CarPriceMaxSel,
  CarPriceMinSel,
  CarThumbnailSel,
} from '../../../redux/selectors/carSelectors';
import { CategorySel } from '../../../redux/selectors/categorySelectors';
import styles from './ProgressBar.module.scss';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const priceMin = useSelector(CarPriceMinSel);
  const priceMax = useSelector(CarPriceMaxSel);
  const carName = useSelector(CarNameSel);
  const thumbnail = useSelector(CarThumbnailSel);
  const description = useSelector(CarDescriptionSel);
  const category = useSelector(CategorySel);
  const colors = useSelector(CarColorsSel);
  const changeProgress = () => {
    if (priceMin != 0) {
      setProgress(progress + 14);
    }
    if (priceMax != 0) {
      setProgress(progress + 14);
    }
    if (carName != '') {
      setProgress(progress + 14);
    }
    if (thumbnail != {}) {
      setProgress(progress + 16);
    }
    if (description != '') {
      setProgress(progress + 14);
    }
    if (category != '') {
      setProgress(progress + 14);
    }
    if (colors != []) {
      setProgress(progress + 14);
    }
  };

  useEffect(() => {
    changeProgress();
  }, [colors, category, description, carName, thumbnail, priceMax, priceMin]);

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
