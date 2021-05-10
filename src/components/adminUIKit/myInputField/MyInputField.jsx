import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import styles from './MyInputField.module.scss';

const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-input': {
      padding: '8px 0 8px 10px',
      width: '320px',
      height: '20px',
      fontFamily: 'Helvetica',
      fontSize: '11px',
      lineHeight: '13px',
    },
  },
  outlined: {
    outline: '1px solid #BECAD6',
  },
});

const MyInputField = ({ title, defaultValue, error, onChange }) => {
  const classes = useStyles();
  return (
    <div className={styles.inputField}>
      <p>{title}</p>
      <TextField
        classes={{
          root: classes.root,
          outlined: classes.outlined,
        }}
        defaultValue={defaultValue}
        error={error}
        helperText={error ? 'Error reason' : ''}
        variant="outlined"
        onChange={onChange}
      />
    </div>
  );
};

export default MyInputField;
