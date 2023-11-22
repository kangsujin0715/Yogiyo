import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import '../css/cardSparkles.css';

function GiftCard({ imgViewUrl, imglogoUrl, pBrand, pPrice, pName, pContent }) {
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
  };

  return (
    <Box className="gift-card">
      <Box className={`card-box ${isHovered ? 'hover' : ''} manual-flip `}>
        <Box className="card-view">
          <Box className="front card sparkles animated" onClick={rotateCard}>
            <img className="img-view" src={imgViewUrl} alt="카드 배경 이미지" />
            <button className="message-btn">메세지 쓰기</button>
            <Box className="card-info" sx={{ backgroundColor: '#2d863c' }}>
              <img className="logo" src={imglogoUrl} alt="로고 이미지" />
              <Box className="title-box">
                <Typography className="brand" variant="h3" component="h3">
                  {pBrand}
                </Typography>
                <Typography className="price">{pPrice}</Typography>
              </Box>
            </Box>
          </Box>
          {/* 카드 앞 */}

          <Box className="back" sx={{ backgroundColor: '#2d863c' }}>
            <Box className="text-box">
              <label for="text" className="label-box">
                {labelText}
              </label>
              <textarea
                id="text"
                onChange={onTextHandler}
                onClick={clearLabel}
                maxLength="150"
              ></textarea>
              <button className="click" onClick={rotateCard}>
                카드 뒤집기
              </button>
              <p className="byte">{textCount}/150</p>
            </Box>
            {/* 카드 뒤 */}

            {/* <Box className='complete-box' onClick={rotateCard}>
              <Box className='complete'>
                <Typography variant='h2' component='h2'>
                  {pName}
                </Typography>
                {pContent}
              </Box>
            </Box> */}
            {/* 카드 완료 */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

GiftCard.defaultProps = {
  imgViewUrl: '/images/gift-card/card-img.png',
  imglogoUrl: '/images/logo/yogiyo.png',
  pBrand: '요기요 상품권',
  pPrice: (
    <>
      <span className="num">30,000</span>원
    </>
  ),
  pName: (
    <>
      To.<span className="name">김민지</span>
    </>
  ),
  pContent: (
      <p className="content">
        최소글자는 1글자, 최대 글자는 150자로 맞춰 놓으면 어떨까요? 충분해 보이는 영역입니다.
      </p>
  ),
};

export default GiftCard;
