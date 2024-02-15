import React, { useState } from 'react';

import MoneyTab3 from './MoneyTab3';
import CardDesign5 from './CardDesign5';
import ImgTab from './ImgTab';

function CardMoneyBox2() {
  const [money, setMoney] = useState(10000);
  const [image, setImage] = useState('');

  const handleMoneyChange = (money) => {
    setMoney(money);
  };

  const handleImgChange = (image) => {
    setImage(image);
  };
  
  return (
    <>
      <ImgTab onChange={handleImgChange} />
      <CardDesign5 money={money} images={image} />
      <MoneyTab3 onChange={handleMoneyChange} />
    </>
  );
}

export default CardMoneyBox2;
