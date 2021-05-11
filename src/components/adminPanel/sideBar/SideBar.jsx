import React from 'react';
import styles from './SideBar.module.scss';
import Logo from '../../../assets/icons/Logo Icon.svg';
import DynamicFeed from '@material-ui/icons/DynamicFeed';
import EmojiTransportation from '@material-ui/icons/EmojiTransportation';
import DirectionsCar from '@material-ui/icons/DirectionsCar';
import Commute from '@material-ui/icons/Commute';
import Apartment from '@material-ui/icons/Apartment';
import SVG from 'react-inlinesvg';
import { Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiListItemText-root': {
      color: '#3D5170',
      fontSize: '15px',
      fontFamily: 'Helvetica',
      colorHover: '#007BFF',
    },
    '& .MuiListItem-button:hover': {
      color: '#007BFF',
      borderHover: 'solid 1px #007BFF',
    },
  },
}));

const SideBar = () => {
  const classes = useStyles();
  return (
    <div className={styles.side_bar}>
      <div className={styles.logo}>
        <SVG src={Logo} />
        <p>Need for drive</p>
      </div>
      <List>
        {['Карточка автомобиля', 'Список авто', 'Города', 'Пункты выдачи', 'Заказы'].map(
          (text, index) => (
            <ListItem classes={{ root: classes.root }} className={styles.list} button key={text}>
              <ListItemIcon>
                {index == 0 ? (
                  <DirectionsCar />
                ) : index == 1 ? (
                  <Commute />
                ) : index == 2 ? (
                  <Apartment />
                ) : index == 3 ? (
                  <EmojiTransportation />
                ) : (
                  <DynamicFeed />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </div>
  );
};

export default SideBar;
