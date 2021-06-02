import { Card } from '@material-ui/core';
import React from 'react';
import styles from './OrderCard.module.scss';
const OrderCard = ({ order, id }) => {
  let preview;
  {
    if (order.carId && order.carId.thumbnail && order.carId.thumbnail.path) {
      if (order.carId.thumbnail.path.slice(0, 7) == '/files/') {
        preview = 'https://api-factory.simbirsoft1.com' + order.carId.thumbnail.path;
      } else {
        preview = order.carId.thumbnail.path;
      }
    }
  }

  return (
    <div className={styles.car_card}>
      <div className={styles.title}>Карточка заказа {id}</div>
      <img src={preview}></img>
      <Card className={styles.card}></Card>
    </div>
  );
};

export default OrderCard;
