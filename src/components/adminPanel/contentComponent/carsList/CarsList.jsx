import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './CarsList.module.scss';
import TableRow from '../../../adminUIKit/table/TableRowOrder';
import Preloader from '../../../adminUIKit/preloader/Preloader';
import { Card } from '@material-ui/core';
import Pagination from 'react-pagination-library';
import 'react-pagination-library/build/css/index.css';
import AutocompleteNFD from '../../../adminUIKit/autocomplete/AutocompleteNFD';
import { Redirect } from 'react-router';
import ButtonRed from '../../../adminUIKit/ButtonRed';
import ButtonBlue from '../../../adminUIKit/ButtonBlue';
import {
  CarsSel,
  isErrorCarsSel,
  isLoadingCarsSel,
} from '../../../../redux/selectors/carSelectors';
import { requestCars } from '../../../../redux/thunk/carThunk';
import { CategorySel } from '../../../../redux/selectors/categorySelectors';
import TableRowCar from '../../../adminUIKit/table/TableRowCar';

const CarsList = ({ setActivePage, setCarId }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingCarsSel);
  const isError = useSelector(isErrorCarsSel);
  const cars = useSelector(CarsSel);
  const categories = useSelector(CategorySel);
  const [category, setCategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const titles = [
    'модель',
    'описание',
    'категория',
    'минимальная цена',
    'максимальная цена',
    'цвета',
    'бак',
    'номер',
  ];
  const [currentPage, setcurrentPage] = useState(1);
  const count = Math.floor(cars.count / 15);

  useEffect(() => {
    dispatch(requestCars());
  }, []);

  const changeCurrentPage = (pageNumber) => {
    dispatch(requestCars(pageNumber));
    setcurrentPage(pageNumber);
  };

  return (
    <div className={styles.block}>
      <Card>
        {isLoading && (
          <div className={styles.for_preloader}>
            <Preloader />
          </div>
        )}
        {isError && <Redirect to="/error" />}
        <div className={styles.selectors}>
          <div className={styles.selector}>
            <AutocompleteNFD
              options={categories}
              getOptionLabel={(categories) => categories.name}
              label={'Категория'}
              onChange={(v) => {
                for (var i in categories) {
                  if (categories[i].name == v.target.textContent) {
                    setCategory('&category[id]=' + categories[i].id);
                  }
                }
                setSelectedCategory(v.target.textContent);
              }}
              inputValue={selectedCategory}
            />
          </div>
          <div className={styles.buttons}>
            <ButtonRed
              title="Reset"
              onClick={() => {
                setCategory('');
                setSelectedCategory('');
                setcurrentPage(1);
                dispatch(requestCars(currentPage, category));
              }}
            />
            <ButtonBlue
              title="Apply"
              onClick={() => {
                dispatch(requestCars(currentPage, category));
              }}
            />
          </div>
        </div>
        <div className={styles.titleRow}>
          {titles &&
            titles.map((o, i) => (
              <h1 key={i} className={styles.h1}>
                {o}
              </h1>
            ))}
        </div>
        {cars.data &&
          cars.data.map((o, i) => (
            <div key={i}>
              <button
                className={styles.row_button}
                onClick={() => {
                  setActivePage(0);
                  setCarId(o.id);
                }}
              >
                <TableRowCar striped={!(i % 2)} value={o} />
              </button>
            </div>
          ))}
        <div className={styles.page}>
          <Pagination
            currentPage={currentPage}
            totalPages={count}
            changeCurrentPage={changeCurrentPage}
            theme="circle"
          />
        </div>
      </Card>
    </div>
  );
};

export default CarsList;
