import React from 'react';
import styles from './SideBar.module.scss';
import Logo from '../../../assets/icons/Logo Icon.svg';
import DynamicFeed from '@material-ui/icons/DynamicFeed';
import EmojiTransportation from '@material-ui/icons/EmojiTransportation';
import DirectionsCar from '@material-ui/icons/DirectionsCar';
import Commute from '@material-ui/icons/Commute';
import Apartment from '@material-ui/icons/Apartment';
import Reorder from '@material-ui/icons/Reorder';
import SVG from 'react-inlinesvg';
import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    color: '#3D5170',
    '& .MuiTypography-body1': {
      fontSize: 15,
      fontFamily: 'Helvetica',
    },
    '& svg': {
      fill: '#CACEDB',
    },
    '& .MuiListItem-button': {
      height: '57.5px',
      width: '285px',
      border: 'solid 1px #CACEDB',
      paddingLeft: '28.5px',
    },
    '& .MuiListItem-button:hover': {
      color: '#007BFF',
      border: 'solid 1px #CACEDB',
      '& svg': {
        fill: '#007BFF',
      },
    },
    '& .MuiListItem-button:focus': {
      color: '#007BFF',
      border: 'solid 1px #CACEDB',
      borderLeft: 'solid 3px #007BFF',
      '& svg': {
        fill: '#007BFF',
      },
    },
    '& .MuiListItemIcon-root': {
      minWidth: '40px',
    },
  },
}));

const SideBar = ({ onClick }) => {
  const classes = useStyles();
  return (
    <div className={styles.side_bar}>
      <div className={styles.logo}>
        <SVG src={Logo} />
        <p>Need for drive</p>
      </div>
      <List classes={{ root: classes.root }}>
        {[
          'Карточка автомобиля',
          'Список авто',
          'Города',
          'Пункты выдачи',
          'Карточка заказа',
          'Заказы',
        ].map((text, index) => (
          <ListItem button key={text} onClick={() => onClick(index)}>
            <ListItemIcon>
              {index == 0 ? (
                <DirectionsCar />
              ) : index == 1 ? (
                <Commute />
              ) : index == 2 ? (
                <Apartment />
              ) : index == 3 ? (
                <EmojiTransportation />
              ) : index == 4 ? (
                <Reorder />
              ) : (
                <DynamicFeed />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SideBar;
