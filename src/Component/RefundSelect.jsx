import React from 'react';
import CustomSelect from './CustomSelect';
import '../css/customSelect.css';

const RefundSelect = () => {
  const options = [
    { value: '사유 선택', label: '사유 선택' },
    { value: '유효기간 만료', label: '유효기간 만료' },
    { value: '유효기간', label: '유효기간' },
  ];

  const handleSelect = (selectedValue) => {
    console.log('Selected Option:', selectedValue);
  };

  return (
      <CustomSelect pSelectTitle='환불 사유' options={options} onSelect={handleSelect} />
  );
};

export default RefundSelect;