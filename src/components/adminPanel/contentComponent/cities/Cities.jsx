import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Cities.module.scss';
import Preloader from '../../../adminUIKit/preloader/Preloader';
import { Card } from '@material-ui/core';
import 'react-pagination-library/build/css/index.css';
import AutocompleteNFD from '../../../adminUIKit/autocomplete/AutocompleteNFD';
import { Redirect } from 'react-router';
import ButtonRed from '../../../adminUIKit/ButtonRed';
import ButtonBlue from '../../../adminUIKit/ButtonBlue';
import {
  CitiesSel,
  isErrorCitiesSel,
  isLoadingCitiesSel,
} from '../../../../redux/selectors/citySelectors';
import { requestCities } from '../../../../redux/thunk/cityThunk';
import TableRowCity from '../../../adminUIKit/table/TableRowCity';

const Cities = ({ setActivePage, setCityId }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingCitiesSel);
  const isError = useSelector(isErrorCitiesSel);
  const cities = useSelector(CitiesSel);
  const titles = ['город', 'id'];

  useEffect(() => {
    dispatch(requestCities());
  }, []);

  return (
    <div className={styles.block}>
      <Card>
        {isLoading && (
          <div className={styles.for_preloader}>
            <Preloader />
          </div>
        )}
        {isError && <Redirect to="/error" />}
        <div className={styles.titleRow}>
          {titles &&
            titles.map((o, i) => (
              <h1 key={i} className={styles.h1}>
                {o}
              </h1>
            ))}
        </div>
        {cities.data &&
          cities.data.map((o, i) => (
            <div key={i}>
              <button
                className={styles.row_button}
                onClick={() => {
                  setActivePage(6);
                  setCityId(o.id);
                }}
              >
                <TableRowCity
                  striped={!(i % 2)}
                  value={o}
                  style={{ 'justify-content': 'flex-start' }}
                />
              </button>
            </div>
          ))}
      </Card>
    </div>
  );
};

export default Cities;
