import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import styles from './Textarea.module.scss';

const Textarea = ({ title, onChange }) => (
  <div className={styles.inputField}>
    <p>{title}</p>
    <TextareaAutosize style={{ width: '90%' }} onChange={onChange} />
  </div>
);

export default Textarea;
