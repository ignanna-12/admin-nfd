import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import styles from './SelectInput.module.scss';

const useStyles = makeStyles({
  root: {
    width: '164px',
    height: '29px',
    padding: 0,
  },
  outlined: {
    outline: '1px solid #BECAD6',
  },
});

const SelectInput = ({ title, defaultValue, onChange, options, getOptionLabel }) => {
  const classes = useStyles();
  return (
    <div className={styles.inputField}>
      <p className={styles.inputField_p}>{title}</p>
      <FormControl>
        <InputLabel
          style={{ marginTop: '8px', marginLeft: '5px', color: '#121212', fontSize: '12px' }}
        >
          Choose
        </InputLabel>
        <Select
          classes={{
            root: classes.root,
            outlined: classes.outlined,
          }}
          defaultValue={defaultValue}
          variant="outlined"
          onChange={onChange}
          options={['options', 'fdsf', 'dvxv']}
        />
      </FormControl>
    </div>
  );
};

export default SelectInput;
