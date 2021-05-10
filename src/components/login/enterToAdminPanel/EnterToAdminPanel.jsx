import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import styles from './EnterToAdminPanel.module.scss';
import { CardContent } from '@material-ui/core';
import LoginForm from '../loginForm/LoginForm';
import Logo from '../../../assets/icons/Logo Icon.svg';
import SVG from 'react-inlinesvg';

const useStyles = makeStyles({
  root: {
    width: 376,
    height: 253,
    color: 'red',
    padding: '0',
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 17,
    color: '#3D5170',
    marginTop: '0',
    marginBottom: '16px',
  },
  '& .MuiPaper-root': {
    color: 'red',
  },
});

const EnterToAdminPanel = () => {
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
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default EnterToAdminPanel;
