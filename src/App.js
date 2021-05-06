import React from 'react';
import './App.css';
import MyButtonBlue from './components/adminUIKit/MyButtonBlue';
import MyButtonGroup from './components/adminUIKit/MyButtonGroup';
import MyInputField from './components/adminUIKit/MyInputField';

function App() {
  return (
    <div className="App">
      <MyButtonGroup />
      <MyButtonBlue />
      <MyInputField title={'Модель автомобиля'} />
    </div>
  );
}

export default App;
