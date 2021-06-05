import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Check from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 71.5,
    height: 24,
    borderColor: '#BECAD6',
    paddingLeft: 0,
  },
  label: {
    color: '#5A6169',
    textTransform: 'none',
    fontFamily: 'Helvetica',
    fontSize: '11px',
    fontWeight: 400,
    lineHeight: '12.65px',
  },
  startIcon: {
    marginLeft: 0,
    marginRight: 0,
  },
  outlined: {
    paddingLeft: '4px',
  },
});

const ButtonGroupThree = ({ onClickDelete, onClickChange, onClickSubmit }) => {
  const classes = useStyles();
  return (
    <div>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button
          classes={{
            root: classes.root,
            label: classes.label,
            outlined: classes.outlined,
            startIcon: classes.startIcon,
          }}
          onClick={onClickSubmit}
          startIcon={<Check style={{ width: '15px', height: '15px', color: '#17C671' }} />}
        >
          Готово
        </Button>
        <Button
          classes={{
            root: classes.root,
            label: classes.label,
            outlined: classes.outlined,
            startIcon: classes.startIcon,
          }}
          onClick={onClickDelete}
          startIcon={<ClearIcon style={{ width: '15px', height: '15px', color: '#C4183C' }} />}
        >
          Отмена
        </Button>
        <Button
          classes={{
            root: classes.root,
            label: classes.label,
            outlined: classes.outlined,
            startIcon: classes.startIcon,
          }}
          onClick={onClickChange}
          startIcon={<MoreVertIcon style={{ width: '15px', height: '15px', color: '#818EA3' }} />}
        >
          Изменить
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonGroupThree;
