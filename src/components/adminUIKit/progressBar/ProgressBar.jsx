import React, { useState } from 'react';
import styles from './ProgressBar.module.scss';

const ProgressBar = () => {
  const [progress, setProgress] = useState(74);
  return (
    <div className={styles.progress_bar}>
      <div className={styles.top_row}>
        <div>Заполнено</div>
        <div>{progress}%</div>
      </div>
      <div className={styles.progress_line}></div>
    </div>
  );
};

export default ProgressBar;
