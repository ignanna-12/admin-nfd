import React, { useState } from 'react';
import styles from './MyRadios.module.scss';

const MyRadios = ({
  setDefaultValue,
  selectedValue,
  defaultText,
  list,
  holeList,
  vert,
  checkedBefore,
  disabled,
}) => {
  const [checked, setChecked] = useState(checkedBefore ? checkedBefore : defaultText);
  return (
    <div className={vert ? styles.radios_vert : styles.radios}>
      <div
        className={defaultText ? styles.radio : styles.display_none}
        onClick={(e) => {
          setChecked(defaultText);
        }}
      >
        <input type="radio" value={defaultText} checked={checked == defaultText} />
        <label>{defaultText}</label>
      </div>
      {list.map((v, i) => (
        <div
          className={disabled ? styles.disabled : styles.radio}
          key={i}
          onClick={(e) => {
            setChecked(v);
          }}
        >
          <input type="radio" checked={checked == v} />
          <label checked={checked == v}>{v}</label>
        </div>
      ))}
    </div>
  );
};

export default MyRadios;
