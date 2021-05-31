import React, { useState } from 'react';
import styles from './TableRow.module.scss';

let TableRowCity = ({ value, striped }) => {
  const rowClassName = striped ? styles.m_striped : styles.m;
  const row = [];
  {
    value.name ? row.push(value.name) : row.push('-');
  }
  {
    value.id ? row.push(value.id) : row.push('-');
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

export default TableRowCity;
