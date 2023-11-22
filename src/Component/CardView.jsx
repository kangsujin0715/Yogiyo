import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import '../css/cardSparkles.css';

import GiftCard from '../Component/GiftCard';
import ImgTab from '../Component/ImgTab';

function CardView() {
  const [isHovered, setIsHovered] = useState(false);
  const rotateCard = () => {
    setIsHovered((prevState) => !prevState);
  };

  const [textCount, setTextCount] = useState(0);
  const onTextHandler = (e) => {
    setTextCount(e.target.value.length);
  };

  const labelBox = (
	<>
		제 마음이에요.<p>(탭하여 메세지를 작성해보세요.)</p>
	</>
  );
  const [labelText, setLabelText] = useState(labelBox);
  const clearLabel = () => {
	setLabelText('');
  }

  const [imgTab, setImgTab] = useState(1);
  const imgClick = (imgNumber) => {
	setImgTab(imgNumber);
  }


  const [moneyTab, setMoneyTab] = useState(1);
  const moneyClick = (moneyNumber) => {
	setMoneyTab(moneyNumber);
  }

  return (
    <>
      <Box className="horizontal-scroll">
        <ImgTab></ImgTab>
      </Box>
      
	  <GiftCard></GiftCard>

      <Box className="horizontal-scroll">
        <ul className="money-voucher">
          <li onClick={() => moneyClick(1)} className={moneyTab === 1 ? 'selected disable' : 'disable'}>10,000원</li>
          <li onClick={() => moneyClick(2)} className={moneyTab === 2 ? 'selected' : ''}>15,000원</li>
          <li onClick={() => moneyClick(3)} className={moneyTab === 3 ? 'selected' : ''}>20,000원</li>
          <li onClick={() => moneyClick(4)} className={moneyTab === 4 ? 'selected' : ''}>30,000원</li>
          <li onClick={() => moneyClick(5)} className={moneyTab === 5 ? 'selected' : ''}>50,000원</li>
          <li onClick={() => moneyClick(6)} className={moneyTab === 6 ? 'selected' : ''}>100,000원</li>
        </ul>
      </Box>

      <Box className="card-info-box">
        <ul className="price-info">
          <li className="sale">5%</li>
          <li className="price">24,000원</li>
          <li className="after-price">30,000원</li>
        </ul>
        <Typography className="date">유효기간 : 구매일로부터 1년</Typography>
      </Box>
    </>
  );
}

export default CardView;
