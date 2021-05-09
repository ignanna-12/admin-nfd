import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import styles from './EnterToAdminPanel.module.scss';
import { CardContent } from '@material-ui/core';
import LoginForm from '../loginForm/LoginForm';
import Logo from '../../../assets/icons/Logo Icon.svg';
import SVG from 'react-inlinesvg';
import { useSelector } from 'react-redux';
import { emailSel, passwordSel } from '../../../redux/selectors/selectors';
import store from '../../../redux/store';

const useStyles = makeStyles({
  root: {
    width: 376,
    height: 253,
    color: 'red',
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 17,
    color: '#3D5170',
  },
  '& .MuiPaper-root': {
    color: 'red',
  },
});

const EnterToAdminPanel = () => {
  // const email = useSelector(emailSel);
  // const password = useSelector(passwordSel);
  const onSubmit = () => {
    console.log(store.getState().form);
  };
  const classes = useStyles();
  return (
    <div className={styles.enter}>
      <div className={styles.logo}>
        <SVG src={Logo} />
        <p>Need for drive</p>
      </div>
      <Card className={classes.root}>
        <CardContent>
          <p className={classes.title}>Вход</p>
          <LoginForm onSubmit={onSubmit()} />
        </CardContent>
      </Card>
    </div>
  );
};

export default EnterToAdminPanel;
