import React from 'react';
import CustomPayment from './CustomPayment';

import '../css/customSelect.css';
import '../css/bottomSheet.css';

const Payment = () => {
  const handleSelect = (selectedValue) => {
    console.log('Selected Option:', selectedValue);
  };

  return (
      <CustomPayment pTitle='결제 수단' onSelect={handleSelect} />
  );
};

export default Payment;