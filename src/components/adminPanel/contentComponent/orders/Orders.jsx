import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Orders.module.scss';
import TableRow from '../../../adminUIKit/table/TableRow';
import { requestOrders } from '../../../../redux/thunk/ordersThunk';
import {
  isErrorOrdersSel,
  isLoadingOrdersSel,
  OrdersSel,
} from '../../../../redux/selectors/ordersSelectors';
import Preloader from '../../../adminUIKit/preloader/Preloader';
import { Card } from '@material-ui/core';

const Orders = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingOrdersSel);
  const isError = useSelector(isErrorOrdersSel);
  const orders = useSelector(OrdersSel);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    dispatch(requestOrders());
  }, []);

  useEffect(() => {
    setTitles(Object.keys(orders.fields));
  }, [orders]);
  return (
    <div className={styles.block}>
      <Card>
        {isLoading && <Preloader />}
        {isError && <h1>Не удалось загрузить заказы</h1>}
        <div className={styles.titleRow}>
          {titles &&
            titles.map((o, i) => (
              <h1 key={i} className={styles.h1}>
                {o}
              </h1>
            ))}
        </div>
        {orders &&
          orders.data.map((o, i) => (
            <TableRow striped={!(i % 2)} title={titles} value={o} key={i} />
          ))}
      </Card>
    </div>
  );
};

export default Orders;
