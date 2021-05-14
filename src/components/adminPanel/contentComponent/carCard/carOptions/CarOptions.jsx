import { Card, CardContent, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import styles from './CarOptions.module.scss';

const useStyles = makeStyles({
  root: {
    marginLeft: 16,
    width: 376,
    height: 700,
    padding: '0',
    alignItems: 'center',
    '& .MuiCardContent-root': {
      padding: 0,
    },
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 17,
    color: '#3D5170',
    marginTop: '0',
    marginBottom: '16px',
  },
});
const CarOptions = () => {
  const classes = useStyles();
  return (
    <div className={styles.car_options}>
      <Card className={classes.root}>
        <div className={styles.title}>Настройки автомобиля</div>
        <CardContent></CardContent>
      </Card>
    </div>
  );
};

export default CarOptions;
