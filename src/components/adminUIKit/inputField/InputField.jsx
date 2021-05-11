import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import styles from './InputField.module.scss';

const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-input': {
      padding: '8px 0 8px 10px',
      width: '334px',
      height: '20px',
      fontFamily: 'Helvetica',
      fontSize: '11px',
      lineHeight: '13px',
      borderColorActive: '#007BFF',
    },
  },
  outlined: {
    outline: '1px solid #BECAD6',
  },
});

const InputField = ({ title, defaultValue, error, onChange, password, errorReason }) => {
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
        helperText={error ? errorReason : ''}
        variant="outlined"
        onChange={onChange}
        type={password}
      />
    </div>
  );
};

export default InputField;
