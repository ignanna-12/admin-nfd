import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import styles from './MyTextarea.module.scss';

const MyTextarea = ({ title }) => (
  <div className={styles.inputField}>
    <p>{title}</p>
    <TextareaAutosize />
  </div>
);

export default MyTextarea;
