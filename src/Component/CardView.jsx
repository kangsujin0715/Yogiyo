import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import '../css/cardSparkles.css';

function CardView() {
  const [isHovered, setIsHovered] = useState(false);
  const rotateCard = () => {
    setIsHovered((prevState) => !prevState);
  };

  return (
    <>
      <Box className="gift-card">
        <Box className={`card-box ${isHovered ? 'hover' : ''} manual-flip `}>
          <Box className="card-view">
            <Link className="front card sparkles animated" onClick={rotateCard}>
              <img className="img-view" src={process.env.PUBLIC_URL + '/images/gift-card/brand-img.png'}/>
              <Box className="card-info" sx={{ backgroundColor: '#2d863c' }}>
                <img className="logo" src={process.env.PUBLIC_URL + '/images/logo/yogiyo.png'} />
                <Box className="title-box">
                  <Typography className="brand" variant="h3" component="h3">
                    요기요 상품권
                  </Typography>
                  <Typography className="price">
                    <span className="num">30,000</span>원
                  </Typography>
                </Box>
              </Box>
            </Link>

            <Box className="back" sx={{ backgroundColor: '#2d863c' }}>
              <TextareaAutosize placeholder="제 마음이에요. (탭하여 메세지를 작성해보세요.)"></TextareaAutosize>
              <button className="click" onClick={rotateCard}>
                카드 뒤집기
              </button>
            </Box>
          </Box>
        </Box>
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
