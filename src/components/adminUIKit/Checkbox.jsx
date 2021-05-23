import React, { useState } from 'react';

const Checkbox = ({ checkedBefore, disabled, label, onClick, value }) => {
  const [checked, setChecked] = useState(checkedBefore ? checkedBefore : false);
  return (
    <div>
      <div>
        <input
          type="checkbox"
          value={value}
          checked={checkedBefore ? checkedBefore : checked}
          onClick={() => {
            onClick(value);
            setChecked(!checked);
          }}
          disabled={disabled}
        />
        <lable style={{ fontSize: 11, fontFamily: 'Helvetica', color: '##3D5170' }}>{label}</lable>
      </div>
    </div>
  );
};

export default Checkbox;
