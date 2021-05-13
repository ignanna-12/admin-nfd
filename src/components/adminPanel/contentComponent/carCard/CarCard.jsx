import { Card, CardContent, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import ProgressBar from '../../../adminUIKit/progressBar/ProgressBar';
import Car from './car/Car';
import styles from './CarCard.module.scss';

const useStyles = makeStyles({
  root: {
    marginLeft: 16,
    width: 376,
    height: 700,
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
const CarCard = () => {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);
  return (
    <div className={styles.car_card}>
      <div className={styles.title}>Карточка автомобиля</div>
      <Card className={classes.root}>
        <CardContent>
          <Car />
          <div className={styles.progress}>
            <ProgressBar />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CarCard;
