import { Card, CardContent, TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import InputField from '../../../../adminUIKit/inputField/InputField';
import ButtonBlue from '../../../../adminUIKit/ButtonBlue';
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
import AutocompleteNFD from '../../../../adminUIKit/autocomplete/AutocompleteNFD';
import ButtonRed from '../../../../adminUIKit/ButtonRed';

const CarOptions = () => {
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
    <div>
      <Card className={styles.card}>
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
              label={'Выберите категорию'}
              onChange={(v) => {
                for (var i in category) {
                  if (category[i].name == v.target.textContent) {
                    dispatch(setCarCategoryId(category[i].id));
                  }
                }
              }}
            />
          </div>
          <div className={styles.row}>
            <div className={styles.range}>
              <input
                name="minprice"
                value={priceMin}
                type="range"
                min="0"
                max="10000"
                step="1000"
                list="tickmarks"
                onChange={(e) => dispatch(setCarPriceMin(e.target.value))}
              />
              <label htmlFor="minprice" className={styles.range_label}>
                Минимальная цена={priceMin}
              </label>
              <datalist id="tickmarks">
                <option value="0" label="0p" />
                <option value="1000" />
                <option value="2000" />
                <option value="3000" />
                <option value="4000" />
                <option value="5000" label="5000p" />
                <option value="6000" />
                <option value="7000" />
                <option value="8000" />
                <option value="9000" />
                <option value="10000" label="10000p" />
              </datalist>
            </div>
            <div className={styles.range}>
              <input
                name="maxprice"
                value={priceMax}
                type="range"
                min={priceMin}
                max={Number.parseInt(priceMin) + 10000}
                step="1000"
                list="tickmarks2"
                onChange={(e) => dispatch(setCarPriceMax(e.target.value))}
              />
              <label htmlFor="minprice" className={styles.range_label}>
                Максимальная цена цена={priceMax}
              </label>
              <datalist id="tickmarks2">
                <option value={priceMin} />
                <option value={Number.parseInt(priceMin) + 1000} />
                <option value={Number.parseInt(priceMin) + 2000} />
                <option value={Number.parseInt(priceMin) + 3000} />
                <option value={Number.parseInt(priceMin) + 4000} />
                <option value={Number.parseInt(priceMin) + 5000} />
                <option value={Number.parseInt(priceMin) + 6000} />
                <option value={Number.parseInt(priceMin) + 7000} />
                <option value={Number.parseInt(priceMin) + 8000} />
                <option value={Number.parseInt(priceMin) + 9000} />
                <option value={Number.parseInt(priceMin) + 10000} />
              </datalist>
            </div>
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
          {console.log(getCookie('access_token'))}
          <div className={styles.row}>
            <ButtonBlue
              title={'Сохранить'}
              onClick={() => {
                dispatch(
                  sendCar(
                    priceMin,
                    priceMax,
                    carName,
                    thumbnail,
                    description,
                    carCategoryId,
                    colors
                  )
                );
              }}
            />
            <ButtonRed title={'Удалить'} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CarOptions;
