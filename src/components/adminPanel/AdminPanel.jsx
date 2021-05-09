import React from 'react';
import styles from './AdminPanel.module.scss';
import ResponsiveDrawer from './sideBar/AppToolBar';
import SideBar from './sideBar/SideBar';

const AdminPanel = () => {
  return (
    <div className={styles.panel}>
      <SideBar />
    </div>
  );
};

export default AdminPanel;
