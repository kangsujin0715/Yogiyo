import React from 'react';
import CustomSelect from './CustomSelect';
import '../css/customSelect.css';

const BankSelect = () => {
  const options = [
    { value: '우리', label: '우리' },
    { value: '신한', label: '신한' },
    { value: '농협', label: '농협' },
  ];

  const handleSelect = (selectedValue) => {
    console.log('Selected Option:', selectedValue);
  };

  return (
      <CustomSelect pSelectTitle='은행' options={options} onSelect={handleSelect} />
  );
};

export default BankSelect;