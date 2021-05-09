import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    width: 110,
    height: 29,
    backgroundColor: '#007BFF',
  },
  label: {
    color: '#FFFFFF',
    textTransform: 'none',
    fontFamily: 'Helvetica',
    fontSize: '11.5px',
    fontWeight: 400,
    lineHeight: '12.65px',
  },
});

const MyButtonBlue = () => {
  const classes = useStyles();
  return (
    <div>
      <Button
        classes={{
          root: classes.root,
          label: classes.label,
        }}
        variant="contained"
        color="primary"
        type="submit"
      >
        Войти
      </Button>
    </div>
  );
};

export default MyButtonBlue;
