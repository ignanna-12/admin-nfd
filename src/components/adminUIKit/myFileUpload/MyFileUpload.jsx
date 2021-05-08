import React, { useState } from 'react';
import styles from './MyFileUpload.module.scss';

const MyFileUpload = () => {
  const [choosedFile, setChoosedFile] = useState('Choose file...');
  return (
    <div className={styles.input_file}>
      <input
        type="file"
        name=""
        onChange={(v) => {
          setChoosedFile(v.target.files[0].name);
        }}
      />
      <div className={styles.fake_file}>
        <input type="text" value={choosedFile} className={styles.fake_file_input} />
        <input type="button" value="Browse" className={styles.fake_file_button} />
      </div>
    </div>
  );
};

export default MyFileUpload;
