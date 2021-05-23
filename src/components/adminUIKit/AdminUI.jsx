import React from 'react';
import MyButtonBlue from './MyButtonBlue';
import MyButtonGroup from './MyButtonGroup';
import MyCheckbox from './MyCheckbox';
import MyFileUpload from './myFileUpload/MyFileUpload';
import MyInputField from './myInputField/MyInputField';
import MyRadios from './myRadios/MyRadios';
import MySelect from './mySelect/MySelect';
import MyTextarea from './myTextarea/MyTextarea';

const AdminUI = () => {
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
      <MyFileUpload />
      <MyRadios defaultText={'checked'} checkedBefore={'checked'} list={['unchecked']} />
      <MyRadios list={['disabled']} disabled={true} />
      <MyTextarea title={'Textarea'} />
    </div>
  );
};

export default AdminUI;
