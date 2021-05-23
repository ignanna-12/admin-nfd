import React from 'react';
import styles from './TableRow.module.scss';
import PropTypes from 'prop-types';

let TableRow = ({ value, striped }) => {
  const rowClassName = striped ? styles.m_striped : styles.m;
  const row = [];
  const issueDate = (date) => {
    const thisDate = new Date(date);
    const options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return thisDate.toLocaleDateString('ru', options);
  };

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
    value.price ? row.push(value.price) : row.push('-');
  }
  {
    value.dateFrom && value.dateTo
      ? row.push(issueDate(value.dateFrom) + ' - ' + issueDate(value.dateTo))
      : row.push('-');
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
        <div key={i} className={styles.name_column}>
          {v}
        </div>
      ))}
    </div>
  );
};

export default TableRow;
