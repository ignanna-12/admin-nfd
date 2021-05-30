import { Card } from '@material-ui/core';
import React from 'react';
import styles from './OrderCard.module.scss';
const OrderCard = ({ id }) => {
  return (
    <div className={styles.car_card}>
      <div className={styles.title}>Карточка заказа {id}</div>
      <Card className={styles.card}></Card>
    </div>
  );
};

export default OrderCard;
