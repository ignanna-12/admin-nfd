import React, { useState } from 'react';
import styles from './TableRow.module.scss';

let TableRowCar = ({ value, striped }) => {
  const rowClassName = striped ? styles.m_striped : styles.m;
  const row = [];
  {
    value.name ? row.push(value.name) : row.push('-');
  }
  {
    value.description ? row.push(value.description) : row.push('-');
  }
  {
    value.categoryId && value.categoryId.name ? row.push(value.categoryId.name) : row.push('-');
  }
  {
    value.priceMin ? row.push(value.priceMin) : row.push('-');
  }
  {
    value.priceMax ? row.push(value.priceMax) : row.push('-');
  }
  {
    value.colors ? row.push(value.colors.join('\n')) : row.push('-');
  }
  {
    value.tank ? row.push(value.tank) : row.push('-');
  }
  {
    value.number ? row.push(value.number) : row.push('-');
  }
  return (
    <div className={rowClassName}>
      {row.map((v, i) => (
        <div className={styles.column} key={i}>
          {v}
        </div>
      ))}
    </div>
  );
};

export default TableRowCar;
