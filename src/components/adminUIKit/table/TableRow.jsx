import React from 'react';
import styles from './TableRow.module.scss';

let TableRow = ({ value, striped }) => {
  const rowClassName = striped ? styles.m_striped : styles.m;
  const issueDate = (d) => {
    const date = new Date(d);
    const options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return date.toLocaleDateString('ru', options);
  };
  const row = [];
  {
    value.orderStatusId && value.orderStatusId.name
      ? row.push(value.orderStatusId.name)
      : row.push('-');
  }
  {
    value.cityId && value.cityId.name ? row.push(value.cityId.name) : row.push('-');
  }
  {
    value.pointId && value.pointId.name ? row.push(value.pointId.name) : row.push('-');
  }
  {
    value.carId && value.carId.name ? row.push(value.carId.name) : row.push('-');
  }
  {
    value.color ? row.push(value.color) : row.push('-');
  }
  {
    value.dateFrom && value.dateTo
      ? row.push(issueDate(value.dateFrom) + '-' + issueDate(value.dateTo))
      : row.push('-');
  }
  {
    value.price ? row.push(value.price) : row.push('-');
  }
  {
    value.isFullTank ? row.push('да') : row.push('-');
  }
  {
    value.isNeedChildChair ? row.push('да') : row.push('-');
  }
  {
    value.isRightWheel ? row.push('да') : row.push('-');
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

export default TableRow;
