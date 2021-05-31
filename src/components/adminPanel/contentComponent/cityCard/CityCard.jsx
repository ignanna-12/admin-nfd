import { Card } from '@material-ui/core';
import React from 'react';
import styles from './CityCard.module.scss';
const CityCard = ({ id }) => {
  return (
    <div className={styles.car_card}>
      <div className={styles.title}>Карточка города {id}</div>
      <Card className={styles.card}></Card>
    </div>
  );
};

export default CityCard;
