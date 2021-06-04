import React from 'react';
import Search from '@material-ui/icons/Search';
import styles from './Header.module.scss';
import Noti from '../../../assets/images/Notifications.svg';
import UserFace from '../../../assets/images/user-avatar.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.search}>
        <Search />
        <div>Поиск...</div>
      </div>
      <div className={styles.images}>
        <img src={Noti} />
        <img
          src={UserFace}
          style={{
            height: '50px',
            marginLeft: '51.5px',
            marginRight: '32px',
            borderRadius: '100%',
          }}
        />
        <div className={styles.admin}>Admin</div>
      </div>
    </div>
  );
};

export default Header;
