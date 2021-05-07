import React from 'react';
import './App.css';
import MyButtonBlue from './components/adminUIKit/MyButtonBlue';
import MyButtonGroup from './components/adminUIKit/MyButtonGroup';
import MyCheckbox from './components/adminUIKit/MyCheckbox';
import MyInputField from './components/adminUIKit/myInputField/MyInputField';
import MySelect from './components/adminUIKit/mySelect/MySelect';

function App() {
  return (
    <div className="App">
      <MyButtonGroup />
      <MyButtonBlue />
      <MyInputField title={'Модель автомобиля'} defaultValue={'Hundai'} />
      <MyInputField
        error={true}
        helperText="Error reason"
        title={'Тип автомобиля'}
        defaultValue={'Компакт-кар'}
      />
      <MySelect title={'Select'} defaultValue={'Choose'} />
      <MyCheckbox checkedBefore={true} />
      <MyCheckbox />
      <MyCheckbox disabled={true} />
    </div>
  );
}

export default App;
