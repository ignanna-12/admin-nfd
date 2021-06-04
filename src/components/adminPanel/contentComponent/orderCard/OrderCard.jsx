import { Card } from '@material-ui/core';
import React from 'react';
import Checkbox from '../../../adminUIKit/checkbox/Checkbox';
import ButtonGroupThree from '../../../adminUIKit/ButtonGroupThree';
import styles from './OrderCard.module.scss';
import { deleteOrder } from '../../../../api/api';
const OrderCard = ({ order, setActivePage, setOrderId, setCurrentOrder }) => {
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
  let model;
  {
    if (order.carId && order.carId.name) {
      model = order.carId.name;
    }
  }
  let city;
  {
    if (order.cityId && order.cityId.name) {
      city = order.cityId.name;
    }
  }
  let address;
  {
    if (order.pointId && order.pointId.address) {
      address = order.pointId.address;
    }
  }
  const issueDate = (d) => {
    const date = new Date(d);
    const options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return date.toLocaleDateString('ru', options);
  };
  let dates;
  {
    if (order.dateFrom && order.dateTo) {
      dates = issueDate(order.dateFrom) + '-' + issueDate(order.dateTo);
    }
  }
  let color;
  {
    if (order.color) {
      color = order.color;
    }
  }
  let price;
  {
    if (order.price) {
      price = order.price;
    }
  }

  return (
    <div className={styles.order_card}>
      {/* <div className={styles.title}>Карточка заказа {id}</div> */}
      <div className={styles.for_mobile}>
        <img src={preview}></img>
        <div className={styles.info}>
          <div className={styles.info_row}>
            {model}
            <div className={styles.info_row_p}> в </div>
            {city}
            <div className={styles.info_row_p}>{address}</div>
          </div>
          <div className={styles.info_row}>
            <div className={styles.info_row_p}>{dates}</div>
          </div>
          <div className={styles.info_row}>
            <div className={styles.info_row_p}>Цвет:</div>
            {color}
          </div>
        </div>
      </div>
      <div className={styles.for_mobile}>
        <div className={styles.checkboxes}>
          <Checkbox checkedBefore={order.isFullTank} label={'Полный бак'} />
          <Checkbox checkedBefore={order.isNeedChildChair} label={'Детское кресло'} />
          <Checkbox checkedBefore={order.isRightWheel} label={'Правый руль'} />
        </div>
        <div className={styles.price}>{price} ₽</div>
      </div>
      <div className={styles.for_buttons}>
        <ButtonGroupThree
          onClickDelete={() => {}}
          onClickChange={() => {
            setActivePage(4);
            setOrderId(order.id);
            setCurrentOrder(order);
          }}
        />
      </div>
    </div>
  );
};

export default OrderCard;
