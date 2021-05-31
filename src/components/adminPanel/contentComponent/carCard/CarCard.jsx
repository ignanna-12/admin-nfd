import { Card, CardContent } from '@material-ui/core';
import React, { useState } from 'react';
import ProgressBar from '../../../adminUIKit/progressBar/ProgressBar';
import FileUpload from '../../../adminUIKit/fileUpload/FileUpload';
import Textarea from '../../../adminUIKit/textarea/Textarea';
import Car from './car/Car';
import styles from './CarCard.module.scss';
import { useDispatch } from 'react-redux';
import { setCarDescription } from '../../../../redux/actions/carActions';

const CarCard = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.car_card}>
      <div className={styles.title}>Карточка автомобиля</div>
      <Card className={styles.card}>
        <CardContent>
          <Car />
          <FileUpload />
          <ProgressBar />
          <Textarea
            title={'Описание'}
            onChange={(v) => {
              dispatch(setCarDescription(v.target.value));
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default CarCard;
