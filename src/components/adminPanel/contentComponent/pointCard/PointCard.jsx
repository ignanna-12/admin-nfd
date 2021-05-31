import { Card } from '@material-ui/core';
import React from 'react';
import styles from './PointCard.module.scss';
const PointCard = ({ id }) => {
  return (
    <div className={styles.car_card}>
      <div className={styles.title}>Карточка пункта {id}</div>
      <Card className={styles.card}></Card>
    </div>
  );
};

export default PointCard;
