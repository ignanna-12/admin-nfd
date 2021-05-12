import React, { useState } from 'react';
import styles from './AdminPanel.module.scss';
import CarCard from './contentComponent/carCard/CarCard';
import CarsList from './contentComponent/carsList/CarsList';
import Cities from './contentComponent/cities/Cities';
import ContentComponent from './contentComponent/ContentComponent';
import Orders from './contentComponent/orders/Orders';
import Points from './contentComponent/points/Points';
import Header from './header/Header';
import SideBar from './sideBar/SideBar';

const AdminPanel = () => {
  const [activePage, setActivePage] = useState(0);
  return (
    <div className={styles.panel}>
      <div className={styles.header_sidebar}>
        <Header />
        <SideBar onClick={(v) => setActivePage(v)} />
      </div>
      <div className={styles.content}>
        {activePage == 0 ? (
          <ContentComponent title={'Карточка автомобиля'} />
        ) : activePage == 1 ? (
          <CarsList />
        ) : activePage == 2 ? (
          <Cities />
        ) : activePage == 3 ? (
          <Points />
        ) : (
          activePage == 4 && <Orders />
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
