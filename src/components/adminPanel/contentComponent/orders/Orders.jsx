import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Orders.module.scss';
import { requestOrders } from '../../../../redux/thunk/ordersThunk';
import {
  isErrorOrdersSel,
  isLoadingOrdersSel,
  OrdersSel,
  orderStatusSel,
} from '../../../../redux/selectors/ordersSelectors';
import Preloader from '../../../adminUIKit/preloader/Preloader';
import { Card } from '@material-ui/core';
import Pagination from 'react-pagination-library';
import 'react-pagination-library/build/css/index.css';
import AutocompleteNFD from '../../../adminUIKit/autocomplete/AutocompleteNFD';
import { CitySel } from '../../../../redux/selectors/citySelectors';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Redirect } from 'react-router';
import ButtonRed from '../../../adminUIKit/ButtonRed';
import ButtonBlue from '../../../adminUIKit/ButtonBlue';
import TableRowOrder from '../../../adminUIKit/table/TableRowOrder';
import OrderCard from '../orderCard/OrderCard';

const Orders = ({ setActivePage, setOrderId, setCurrentOrder }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingOrdersSel);
  const isError = useSelector(isErrorOrdersSel);
  const orders = useSelector(OrdersSel);
  const orderStatus = useSelector(orderStatusSel);
  const cities = useSelector(CitySel);
  const [status, setStatus] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [city, setCity] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [selectedDateFrom, setSelectedDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState('');
  const [selectedDateTo, setSelectedDateTo] = useState(new Date());
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
  const [currentPage, setcurrentPage] = useState(1);
  const count = Math.floor(orders.count / 5);

  useEffect(() => {
    dispatch(requestOrders());
  }, []);

  const changeCurrentPage = (pageNumber) => {
    dispatch(requestOrders(pageNumber, status, city, dateFrom, dateTo));
    setcurrentPage(pageNumber);
  };

  return (
    <div className={styles.block}>
      <div className={styles.header}>Заказы</div>
      <Card>
        {isLoading && (
          <div className={styles.for_preloader}>
            <Preloader />
          </div>
        )}
        {isError && <Redirect to="/error" />}
        <div className={styles.selectors}>
          <div className={styles.selector}>
            <AutocompleteNFD
              options={orderStatus}
              getOptionLabel={(orderStatus) => orderStatus.name}
              label={'Статус'}
              onChange={(v) => {
                for (var i in orderStatus) {
                  if (orderStatus[i].name == v.target.textContent) {
                    setStatus('&orderStatusId[id]=' + orderStatus[i].id);
                  }
                }
                setSelectedStatus(v.target.textContent);
              }}
              inputValue={selectedStatus}
            />
          </div>
          <div className={styles.selector}>
            <AutocompleteNFD
              options={cities}
              getOptionLabel={(cities) => cities.name}
              label={'Город'}
              onChange={(v) => {
                for (var i in cities) {
                  if (cities[i].name == v.target.textContent) {
                    setCity('&cityId[id]=' + cities[i].id);
                  }
                }
                setSelectedCity(v.target.textContent);
              }}
              inputValue={selectedCity}
            />
          </div>
          <div className={styles.date}>
            <div className={styles.title}>Даты заказа</div>
            <div className={styles.picks}>
              <div className={styles.withPick}>
                <p> с</p>
                <DatePicker
                  className={styles.datapick}
                  selected={selectedDateFrom}
                  onChange={(date) => {
                    setDateFrom('&dateFrom[$gt]=' + date);
                    setSelectedDateFrom(date);
                  }}
                  dateFormat="dd.MM.yy"
                  isClearable
                />
              </div>
              <div className={styles.withPick}>
                <p>по</p>
                <DatePicker
                  className={styles.datapick}
                  selected={selectedDateTo}
                  onChange={(date) => {
                    setDateTo('&dateTo[$lt]=' + date);
                    setSelectedDateTo(date);
                  }}
                  dateFormat="dd.MM.yy"
                  isClearable
                />
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            {/* <ButtonRed
              title="Reset"
              onClick={() => {
                setStatus('');
                setCity('');
                setSelectedCity('');
                setSelectedStatus('');
                setDateFrom('');
                setSelectedDateFrom(new Date());
                setDateTo('');
                setSelectedDateTo(new Date());
                setcurrentPage(1);
                dispatch(requestOrders(currentPage, status, city, dateFrom, dateTo));
              }}
            /> */}
            <ButtonBlue
              title="Применить"
              onClick={() => {
                dispatch(requestOrders(currentPage, status, city, dateFrom, dateTo));
              }}
            />
          </div>
        </div>
        {/* <div className={styles.titleRow}>
          {titles &&
            titles.map((o, i) => (
              <h1 key={i} className={styles.h1}>
                {o}
              </h1>
            ))}
        </div> */}
        {orders.data &&
          orders.data.map((o, i) => (
            <div key={i}>
              {/* <button
                className={styles.row_button}
                onClick={() => {
                  setActivePage(4);
                  setOrderId(o.id);
                  setCurrentOrder(o);
                }}
              > */}
              {/* <TableRowOrder striped={!(i % 2)} value={o} /> */}
              <OrderCard
                order={o}
                setActivePage={setActivePage}
                setOrderId={setOrderId}
                setCurrentOrder={setCurrentOrder}
              />
              {/* </button> */}
            </div>
          ))}
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
