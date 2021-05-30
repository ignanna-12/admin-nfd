import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, TextField } from '@material-ui/core';
import styles from './AutocompleteNFD.module.scss';

const useStyles = makeStyles({
  root: {
    '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
      padding: 0,
      fontSize: '13px',
    },
  },
});
const AutocompleteNFD = ({ options, getOptionLabel, label, onChange, onClear, inputValue }) => {
  const classes = useStyles();
  return (
    <div className={styles.container}>
      <Autocomplete
        className={styles.autocomplete}
        classes={{ root: classes.root }}
        options={options}
        getOptionLabel={getOptionLabel}
        renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
        onChange={onChange}
        onClear={onClear}
        inputValue={inputValue}
      />
    </div>
  );
};
export default AutocompleteNFD;
