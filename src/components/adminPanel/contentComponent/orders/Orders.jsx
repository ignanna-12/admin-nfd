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
import Pagination from 'react-pagination-library';
import 'react-pagination-library/build/css/index.css';

const Orders = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingOrdersSel);
  const isError = useSelector(isErrorOrdersSel);
  const orders = useSelector(OrdersSel);
  const titles = [
    'статус',
    'город',
    'пункт',
    'модель',
    'цвет',
    'период',
    'цена',
    'полный бак',
    'детское кресло',
    'правый руль',
  ];
  const [currentPage, setcurrentPage] = useState(2);
  const count = Math.floor(orders.count / 20);

  useEffect(() => {
    dispatch(requestOrders(currentPage));
  }, [currentPage]);

  const changeCurrentPage = (pageNumber) => {
    dispatch(requestOrders(pageNumber));
    setcurrentPage(pageNumber);
  };

  return (
    <div className={styles.block}>
      <Card>
        {isLoading && (
          <div className={styles.for_preloader}>
            <Preloader />
          </div>
        )}
        {isError && <h1>Не удалось загрузить заказы</h1>}
        <div className={styles.titleRow}>
          {titles &&
            titles.map((o, i) => (
              <h1 key={i} className={styles.h1}>
                {o}
              </h1>
            ))}
        </div>
        {orders.data &&
          orders.data.map((o, i) => <TableRow striped={!(i % 2)} value={o} key={i} />)}
        <div className={styles.page}>
          <Pagination
            currentPage={currentPage}
            totalPages={count}
            changeCurrentPage={changeCurrentPage}
            theme="circle"
          />
        </div>
      </Card>
    </div>
  );
};

export default Orders;
