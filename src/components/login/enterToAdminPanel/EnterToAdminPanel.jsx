import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import styles from './EnterToAdminPanel.module.scss';
import { CardContent } from '@material-ui/core';
import LoginForm from '../loginForm/LoginForm copy';
import Logo from '../../../assets/icons/Logo Icon.svg';
import SVG from 'react-inlinesvg';
import { useDispatch, useSelector } from 'react-redux';
import { passwordSel, userNameSel } from '../../../redux/selectors/selectors';
import store from '../../../redux/store';
import { setPassword, setUserName } from '../../../redux/actions/actions';

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
  const dispatch = useDispatch();
  const onSubmit = () => {
    //dispatch(setUserName(store.getState().form.email));
    //dispatch(setPassword(store.getState().form.password));
    //console.log(store.getState().form.email.value);
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
