import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';

import GiftCardViewBtn from './GiftCardViewBtn';

import '../css/imgTab.css';

function ImgTab() {
  const [imgTab, setImgTab] = useState(0);
  const imgClick = (imgNumber) => {
    setImgTab(imgNumber);
  };

  const imgTabList = [
    { img: <img className='img-view' src='/images/gift-card/gift-img.png' alt='이미지 없음' /> },
    { img: <img className='img-view' src='/images/gift-card/gift-img01.png' alt='꽃다발' /> },
    { img: <img className='img-view' src='/images/gift-card/gift-img02.png' alt='케이크' /> },
    { img: <img className='img-view' src='/images/gift-card/gift-img03.png' alt='선물' /> },
    { img: <img className='img-view' src='/images/gift-card/gift-img04.png' alt='산타' /> },
    { img: <img className='img-view' src='/images/gift-card/gift-img05.png' alt='자동차' /> },
    { img: <img className='img-view' src='/images/gift-card/gift-img06.png' alt='개구리' /> },
  ];

  return (
	<Box>
		<Box className='horizontal-scroll'>
			<ul className='img-select'>
			{imgTabList.map((list, i) => {
				return (
				<li key={i} onClick={() => imgClick(i)} className={imgTab === i ? 'selected ' : ''}>
					{list.img}
				</li>
				);
			})}
			</ul>
			<GiftCardViewBtn/>
		</Box>
	</Box>
  );
}

export default ImgTab;
