import React from 'react';
import { Box } from '@mui/material';

import '../css/giftViewImg.css';

function GiftCardViewImg() {
  const giftCardImgList = [
    { img: <img className="img-view" src="/images/gift-card01.svg" alt="선물카드 이미지" /> },
    { img: <img className="img-view" src="/images/gift-card02.svg" alt="선물카드 이미지" /> },
    { img: <img className="img-view" src="/images/gift-card03.svg" alt="선물카드 이미지" /> },
    { img: <img className="img-view" src="/images/gift-card04.svg" alt="선물카드 이미지" /> },
    { img: <img className="img-view" src="/images/gift-card05.svg" alt="선물카드 이미지" /> },
    { img: <img className="img-view" src="/images/gift-card06.svg" alt="선물카드 이미지" /> },
    { img: <img className="img-view" src="/images/gift-card01.svg" alt="선물카드 이미지" /> },
    { img: <img className="img-view" src="/images/gift-card02.svg" alt="선물카드 이미지" /> },
    { img: <img className="img-view" src="/images/gift-card03.svg" alt="선물카드 이미지" /> },
    { img: <img className="img-view" src="/images/gift-card04.svg" alt="선물카드 이미지" /> },
    { img: <img className="img-view" src="/images/gift-card05.svg" alt="선물카드 이미지" /> },
    { img: <img className="img-view" src="/images/gift-card06.svg" alt="선물카드 이미지" /> },
  ];

  return (
	<Box className="giftcard-box" sx={{ paddingTop: '16px' }}>
		<ul className="img-box">
		{giftCardImgList.map((list, i) => {
			return (
			<li key={i} className="img-item">
				{list.img}
			</li>
			);
		})}
		</ul>
	</Box>
  );
}

export default GiftCardViewImg;
