import { Card, CardContent, makeStyles, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import InputField from '../../../../adminUIKit/inputField/InputField';
import ButtonBlue from '../../../../adminUIKit/ButtonBlue';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AddIcon from '@material-ui/icons/Add';
import styles from './CarOptions.module.scss';
import {
  setCarCategoryId,
  setCarColors,
  setCarName,
  setCarPriceMax,
  setCarPriceMin,
} from '../../../../../redux/actions/carActions';
import { useDispatch, useSelector } from 'react-redux';
import {
  CarCategoryIdSel,
  CarColorsSel,
  CarDescriptionSel,
  CarNameSel,
  CarPriceMaxSel,
  CarPriceMinSel,
  CarThumbnailSel,
} from '../../../../../redux/selectors/carSelectors';
import { CategorySel } from '../../../../../redux/selectors/categorySelectors';
import Checkbox from '../../../../adminUIKit/Checkbox';
import { sendCar } from '../../../../../redux/thunk/carThunk';
import { getCookie } from '../../../../../utils/getCookie';
import { NavLink } from 'react-router-dom';
import AutocompleteNFD from '../../../../adminUIKit/AutocompleteNFD';

const useStyles = makeStyles({
  root: {
    marginTop: 48,
    marginLeft: 16,
    height: 700,
    padding: '0',
    alignItems: 'center',
    '& .MuiCardContent-root': {
      padding: 0,
    },
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
  title: {
    fontFamily: 'Helvetica',
    fontSize: 17,
    color: '#3D5170',
    marginTop: '0',
    marginBottom: '16px',
  },
});
const CarOptions = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const priceMin = useSelector(CarPriceMinSel);
  const priceMax = useSelector(CarPriceMaxSel);
  const carName = useSelector(CarNameSel);
  const thumbnail = useSelector(CarThumbnailSel);
  const description = useSelector(CarDescriptionSel);
  const carCategoryId = useSelector(CarCategoryIdSel);
  const category = useSelector(CategorySel);
  const colors = useSelector(CarColorsSel);
  const [editColors, setEditColors] = useState(colors);
  const [color, setColor] = useState('');
  useEffect(() => {
    dispatch(setCarColors(editColors));
  }, [editColors]);

  return (
    <Card className={classes.root}>
      <div className={styles.title}>Настройки автомобиля</div>
      <CardContent className={styles.car_options}>
        <div className={styles.row}>
          <InputField
            title={'Модель автомобиля'}
            onChange={(e) => {
              dispatch(setCarName(e.target.value));
            }}
          />
          <AutocompleteNFD
            options={category}
            getOptionLabel={(category) => category.name}
            label={'Выберите категорию автомобиля'}
            onChange={(v) => {
              for (var i in category) {
                if (category[i].name == v.target.textContent) {
                  dispatch(setCarCategoryId(category[i].id));
                }
              }
            }}
          />
          {/* <Autocomplete
            className={classes.autocomplete}
            options={category}
            getOptionLabel={(category) => category.name}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Выберите категорию автомобиля"
                style={{ fontSize: 13 }}
                variant="outlined"
              />
            )}
            onChange={(v) => {
              for (var i in category) {
                if (category[i].name == v.target.textContent) {
                  dispatch(setCarCategoryId(category[i].id));
                }
              }
            }}
          /> */}
        </div>
        <div className={styles.row}>
          <InputField
            title={'Минимальная цена'}
            onChange={(e) => {
              dispatch(setCarPriceMin(e.target.value));
            }}
          />
          <InputField
            title={'Максимальная цена'}
            onChange={(e) => {
              dispatch(setCarPriceMax(e.target.value));
            }}
          />
        </div>
        <div className={styles.colors}>
          <div className={styles.color_row}>
            <InputField
              title={'Доступные цвета'}
              defaultValue={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
            <button
              onClick={() => {
                let currentColors = editColors;
                if (!currentColors.includes(color) && color != '') {
                  currentColors.push(color);
                  setEditColors(currentColors);
                  setColor('');
                }
              }}
            >
              <AddIcon />
            </button>
          </div>
          <div className={styles.colors_check}>
            {colors.map((color, index) => {
              return (
                <Checkbox
                  key={index}
                  label={color}
                  checkedBefore={true}
                  value={color}
                  onClick={(v) => {
                    let currentColors = editColors;
                    if (currentColors.includes(v)) {
                      currentColors = currentColors.filter((e) => e !== v);
                    } else {
                      currentColors.push(v);
                    }
                    setEditColors(currentColors);
                  }}
                />
              );
            })}
          </div>
        </div>
        <NavLink to="/error">
          <button>жми</button>
        </NavLink>
        <div className={styles.row}>
          <ButtonBlue
            title={'Сохранить'}
            onClick={() => {
              dispatch(
                sendCar(priceMin, priceMax, carName, thumbnail, description, carCategoryId, colors)
              );
              console.log(getCookie('access_token'));
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default CarOptions;
