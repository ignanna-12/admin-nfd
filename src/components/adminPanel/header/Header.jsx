import React from 'react';
import Search from '@material-ui/icons/Search';
import styles from './Header.module.scss';
import { Grid, makeStyles, TextField } from '@material-ui/core';
import Noti from '../../../assets/images/Notifications.png';
import UserFace from '../../../assets/images/User Details.png';

const useStyles = makeStyles((theme) => ({
  root: {
    border: 0,
    outline: 'none',
  },
  margin: {
    margin: theme.spacing(1),
    border: 0,
    outline: 0,
  },
}));
const Header = () => {
  const classes = useStyles();

  return (
    <div className={styles.header}>
      <div className={styles.search}>
        <div className={{ root: classes.root, margin: classes.margin }}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <Search />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="Поиск..." />
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={styles.images}>
        <img src={Noti} />
        <img src={UserFace} style={{ height: '50px', marginLeft: '16px' }} />
      </div>
    </div>
  );
};

export default Header;
