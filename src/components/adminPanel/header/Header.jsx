import React from 'react';
import Search from '@material-ui/icons/Search';
import styles from './Header.module.scss';
import { Grid, makeStyles, TextField } from '@material-ui/core';
import Noti from '../../../assets/images/Notifications.svg';
import UserFace from '../../../assets/images/user-avatar.svg';

const useStyles = makeStyles((theme) => ({
  root: {},
}));
const Header = () => {
  const classes = useStyles();

  return (
    <div className={styles.header}>
      <div className={styles.search}>
        <div className={{ root: classes.root }}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <Search />
            </Grid>
            <Grid item>
              <TextField id="" label="Поиск..." />
            </Grid>
          </Grid>
        </div>
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
