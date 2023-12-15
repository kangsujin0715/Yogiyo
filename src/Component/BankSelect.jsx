import React from 'react';
import CustomSelect from './CustomSelect';
import '../css/customSelect.css';

const BankSelect = () => {
  const options = [
    { value: '은행', label: '은행' },
    { value: '우리', label: '우리' },
    { value: '신한', label: '신한' },
    { value: '농협', label: '농협' },
    { value: '국민', label: '국민' },
    { value: '하나', label: '하나' },
  ];

  const handleSelect = (selectedValue) => {
    console.log('Selected Option:', selectedValue);
  };

  return (
      <CustomSelect selectTitle='은행' options={options} onSelect={handleSelect} />
  );
};

export default BankSelect;