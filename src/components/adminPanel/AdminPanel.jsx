import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestCategory } from '../../redux/thunk/categoryThunk';
import { requestCity } from '../../redux/thunk/cityThunk';
import { requestOrderStatus } from '../../redux/thunk/ordersThunk';
import styles from './AdminPanel.module.scss';
import CarsList from './contentComponent/carsList/CarsList';
import Cities from './contentComponent/cities/Cities';
import CityCard from './contentComponent/cityCard/CityCard';
import ContentComponent from './contentComponent/ContentComponent';
import OrderCard from './contentComponent/orderCard/OrderCard';
import Orders from './contentComponent/orders/Orders';
import PointCard from './contentComponent/pointCard/PointCard';
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
  const [currentOrder, setCurrentOrder] = useState({});
  const [carId, setCarId] = useState('');
  const [cityId, setCityId] = useState('');
  const [pointId, setPointId] = useState('');
  return (
    <div className={styles.panel}>
      <div className={styles.header_sidebar}>
        <SideBar onClick={(v) => setActivePage(v)} />
        <div className={styles.header_footer}>
          <Header />
          <div className={styles.content}>
            {activePage == 0 ? (
              <ContentComponent id={carId} />
            ) : activePage == 1 ? (
              <CarsList setActivePage={setActivePage} setCarId={setCarId} />
            ) : activePage == 2 ? (
              <Cities setActivePage={setActivePage} setCityId={setCityId} />
            ) : activePage == 3 ? (
              <Points setActivePage={setActivePage} setPointId={setPointId} />
            ) : activePage == 4 ? (
              <OrderCard id={orderId} order={currentOrder} />
            ) : activePage == 5 ? (
              <Orders
                setActivePage={setActivePage}
                setOrderId={setOrderId}
                setCurrentOrder={setCurrentOrder}
              />
            ) : activePage == 6 ? (
              <CityCard id={cityId} />
            ) : (
              activePage == 7 && <PointCard id={pointId} />
            )}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
