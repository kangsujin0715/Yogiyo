import React from 'react';
import CustomRecent from './CustomRecent';

import '../css/customSelect.css';
import '../css/bottomSheet.css';

const Recent = () => {
  const handleSelect = (selectedValue) => {
    console.log('Selected Option:', selectedValue);
  };

  return (
      <CustomRecent pTitle='최근 내역' onSelect={handleSelect} />
  );
};

export default Recent;