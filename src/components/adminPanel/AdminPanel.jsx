import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestCategory } from '../../redux/thunk/categoryThunk';
import { requestCity } from '../../redux/thunk/cityThunk';
import { requestOrderStatus } from '../../redux/thunk/ordersThunk';
import styles from './AdminPanel.module.scss';
import CarsList from './contentComponent/carsList/CarsList';
import Cities from './contentComponent/cities/Cities';
import ContentComponent from './contentComponent/ContentComponent';
import OrderCard from './contentComponent/orderCard/OrderCard';
import Orders from './contentComponent/orders/Orders';
import Points from './contentComponent/points/Points';
import Footer from './footer/Footer';
import Header from './header/Header';
import SideBar from './sideBar/SideBar';

const AdminPanel = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestCategory());
    dispatch(requestOrderStatus());
    dispatch(requestCity());
  }, []);
  const [activePage, setActivePage] = useState(0);
  const [orderId, setOrderId] = useState('');
  const [carId, setCarId] = useState('');
  return (
    <div className={styles.panel}>
      <div className={styles.header_sidebar}>
        <SideBar onClick={(v) => setActivePage(v)} />
        <div className={styles.header_footer}>
          <Header />
          <div className={styles.content}>
            {activePage == 0 ? (
              <ContentComponent />
            ) : activePage == 1 ? (
              <CarsList setActivePage={setActivePage} setCarId={setCarId} />
            ) : activePage == 2 ? (
              <Cities />
            ) : activePage == 3 ? (
              <Points />
            ) : activePage == 4 ? (
              <OrderCard id={orderId} />
            ) : (
              activePage == 5 && <Orders setActivePage={setActivePage} setOrderId={setOrderId} />
            )}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
