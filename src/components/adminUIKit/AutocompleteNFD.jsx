import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles({
  autocomplete: {
    marginTop: 20,
    fontSize: 13,
    fontFamily: 'Helvetica',
    '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
      marginTop: 8,
      width: 334,
      padding: 0,
      fontSize: 13,
      fontFamily: 'Helvetica',
    },
    '& .MuiAutocomplete-paper': {
      fontSize: 13,
    },
  },
});
const AutocompleteNFD = ({ options, getOptionLabel, label, onChange }) => {
  const classes = useStyles();
  return (
    <Autocomplete
      className={classes.autocomplete}
      options={options}
      getOptionLabel={getOptionLabel}
      renderInput={(params) => (
        <TextField {...params} label={label} style={{ fontSize: 13 }} variant="outlined" />
      )}
      onChange={onChange}
    />
  );
};
export default AutocompleteNFD;
