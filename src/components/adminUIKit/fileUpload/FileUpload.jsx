import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCarFile, setImageCar } from '../../../redux/actions/carActions';
import styles from './FileUpload.module.scss';

const FileUpload = () => {
  const [choosedFile, setChoosedFile] = useState('Выберите файл...');
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const handleFile = (file) => {
    const type = file.type.replace(/\/.+/, '');
    if (type == 'image') {
      setError(false);
      dispatch(setImageCar(URL.createObjectURL(file)));
    } else {
      setError(true);
    }
  };
  return (
    <div className={styles.input_file}>
      <input
        type="file"
        name=""
        onChange={(v) => {
          setChoosedFile(v.target.files[0].name);
          handleFile(v.target.files[0]);
          dispatch(setCarFile(new FormData(v.target.files)));
        }}
      />
      <div className={error ? styles.fake_file_error : styles.fake_file}>
        <input
          type="text"
          value={error ? 'Выберите изображение' : choosedFile}
          className={styles.fake_file_input}
          error={true}
        />
        <input type="button" value="Обзор" className={styles.fake_file_button} />
      </div>
    </div>
  );
};

export default FileUpload;
