import React from 'react';
import styles from './SideBar.module.scss';
import Logo from '../../../assets/icons/Logo Icon.svg';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SVG from 'react-inlinesvg';
import { Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));

const SideBar = () => {
  const classes = useStyles();
  return (
    <div className={styles.side_bar}>
      <div className={styles.logo}>
        <SVG src={Logo} />
        <p>Need for drive</p>
      </div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Карточка автомобиля', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SideBar;
