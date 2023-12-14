import React from 'react';
import ImgMore from './GiftCardView';

import '../css/customSelect.css';

const GiftCardView = () => {
  const handleSelect = (selectedValue) => {
    console.log('Selected Option:', selectedValue);
  };

  return (
      <ImgMore pTitle='선물카드 전체보기' onSelect={handleSelect} />
  );
};

export default GiftCardView;