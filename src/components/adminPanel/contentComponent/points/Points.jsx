import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Points.module.scss';
import Preloader from '../../../adminUIKit/preloader/Preloader';
import { Card } from '@material-ui/core';
import Pagination from 'react-pagination-library';
import 'react-pagination-library/build/css/index.css';
import AutocompleteNFD from '../../../adminUIKit/autocomplete/AutocompleteNFD';
import { CitySel } from '../../../../redux/selectors/citySelectors';
import { Redirect } from 'react-router';
import ButtonRed from '../../../adminUIKit/ButtonRed';
import ButtonBlue from '../../../adminUIKit/ButtonBlue';
import {
  isErrorPointsSel,
  isLoadingPointsSel,
  PointsSel,
} from '../../../../redux/selectors/pointSelectors';
import { requestPoints } from '../../../../redux/thunk/pointThunk';
import TableRowPoint from '../../../adminUIKit/table/TableRowPoint';

const Points = ({ setActivePage, setPointId }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingPointsSel);
  const isError = useSelector(isErrorPointsSel);
  const points = useSelector(PointsSel);
  const cities = useSelector(CitySel);
  const [city, setCity] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const titles = ['название', 'адрес', 'город'];
  const [currentPage, setcurrentPage] = useState(1);
  const count = Math.floor(points.count / 15);

  useEffect(() => {
    dispatch(requestPoints());
  }, []);

  const changeCurrentPage = (pageNumber) => {
    dispatch(requestPoints(pageNumber, city));
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
            <div className={styles.selector}>
              <AutocompleteNFD
                options={cities}
                getOptionLabel={(cities) => cities.name}
                label={'Город'}
                onChange={(v) => {
                  for (var i in cities) {
                    if (cities[i].name == v.target.textContent) {
                      setCity('&cityId[id]=' + cities[i].id);
                    }
                  }
                  setSelectedCity(v.target.textContent);
                }}
                inputValue={selectedCity}
              />
            </div>
          </div>
          <div className={styles.buttons}>
            <ButtonRed
              title="Reset"
              onClick={() => {
                setCity('');
                setSelectedCity('');
                setcurrentPage(1);
                dispatch(requestPoints(currentPage, city));
              }}
            />
            <ButtonBlue
              title="Apply"
              onClick={() => {
                dispatch(requestPoints(currentPage, city));
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
        {points.data &&
          points.data.map((o, i) => (
            <div key={i}>
              <button
                className={styles.row_button}
                onClick={() => {
                  setActivePage(7);
                  setPointId(o.id);
                }}
              >
                <TableRowPoint striped={!(i % 2)} value={o} />
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

export default Points;
