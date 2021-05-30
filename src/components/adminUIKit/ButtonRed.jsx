import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    width: 110,
    height: 29,
    backgroundColor: '#C4183C',
  },
  label: {
    color: '#FFFFFF',
    textTransform: 'none',
    fontFamily: 'Helvetica',
    fontSize: '11.5px',
    fontWeight: 400,
    border: 'none',
    outline: 'none',
  },
});

const ButtonRed = ({ onClick, title }) => {
  const classes = useStyles();
  return (
    <div>
      <Button
        classes={{
          root: classes.root,
          label: classes.label,
        }}
        variant="contained"
        onClick={onClick}
      >
        {title}
      </Button>
    </div>
  );
};

export default ButtonRed;
