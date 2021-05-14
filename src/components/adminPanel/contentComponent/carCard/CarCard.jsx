import { Card, CardContent, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import ProgressBar from '../../../adminUIKit/progressBar/ProgressBar';
import FileUpload from '../../../adminUIKit/fileUpload/FileUpload';
import Textarea from '../../../adminUIKit/textarea/Textarea';
import Car from './car/Car';
import styles from './CarCard.module.scss';

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
const CarCard = () => {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);
  return (
    <div className={styles.car_card}>
      <div className={styles.title}>Карточка автомобиля</div>
      <Card className={classes.root}>
        <CardContent>
          <Car />
          <FileUpload />
          <ProgressBar />
          <Textarea title={'Описание'} />
        </CardContent>
      </Card>
    </div>
  );
};

export default CarCard;
