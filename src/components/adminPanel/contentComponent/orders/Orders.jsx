import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Orders.module.scss';
import TableRow from '../../../adminUIKit/table/TableRow';
import { requestFullOrders, requestOrders } from '../../../../redux/thunk/ordersThunk';
import {
  FullOrdersSel,
  isErrorOrdersSel,
  isLoadingOrdersSel,
  OrdersSel,
} from '../../../../redux/selectors/ordersSelectors';
import Preloader from '../../../adminUIKit/preloader/Preloader';
import { Card } from '@material-ui/core';
import Pagination from 'react-pagination-library';
import 'react-pagination-library/build/css/index.css';
import { arrayUniqValues } from '../../../../utils/arrayUniqValues';
import AutocompleteNFD from '../../../adminUIKit/autocomplete/AutocompleteNFD';
import { filterFullEntities } from '../../../../utils/filterFullEntities';

const Orders = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingOrdersSel);
  const isError = useSelector(isErrorOrdersSel);
  const orders = useSelector(OrdersSel);
  const fullOrders = useSelector(FullOrdersSel);
  const [statuses, setStatuses] = useState([]);
  const [filterOrders, setFilterOrders] = useState({});
  const [renderOrders, setRenderOrders] = useState(orders);
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
    filterOrders && setRenderOrders(filterOrders);
  }, [currentPage]);

  useEffect(() => {
    dispatch(requestFullOrders());
    setStatuses(arrayUniqValues(fullOrders.data, 'orderStatusId', 'name'));
  }, []);

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
        {statuses.length > 0 && (
          <div className={styles.selector}>
            <AutocompleteNFD
              options={statuses}
              getOptionLabel={(statuses) => statuses}
              label={'Статус'}
              onChange={(v) => {
                setFilterOrders(
                  filterFullEntities(fullOrders.data, 'orderStatusId', 'name', v.target.textContent)
                );
              }}
            />
          </div>
        )}
        <div className={styles.titleRow}>
          {titles &&
            titles.map((o, i) => (
              <h1 key={i} className={styles.h1}>
                {o}
              </h1>
            ))}
        </div>
        {renderOrders.data &&
          renderOrders.data.map((o, i) => <TableRow striped={!(i % 2)} value={o} key={i} />)}
        <div className={styles.page}>
          <Pagination
            currentPage={currentPage}
            totalPages={count}
            changeCurrentPage={changeCurrentPage}
            theme="circle"
          />
          {console.log(filterOrders)}
        </div>
      </Card>
    </div>
  );
};

export default Orders;
