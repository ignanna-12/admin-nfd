import React, { useState } from 'react';

const MyCheckbox = ({ checkedBefore, disabled }) => {
  const [checked, setChecked] = useState(checkedBefore ? checkedBefore : false);
  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={checkedBefore ? checkedBefore : checked}
          onClick={() => setChecked(!checked)}
          disabled={disabled}
        />
        <lable>label example</lable>
      </div>
    </div>
  );
};

export default MyCheckbox;
