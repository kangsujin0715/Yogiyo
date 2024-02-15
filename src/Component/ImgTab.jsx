import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import GiftCardViewBtn from './GiftCardViewBtn';
import '../css/imgTab.css';

const ImgTab = ({ onChange }) => {
  const [selectedImage, setSelectedImage] = useState('/images/gift-card/gift-card-test.gif');

  useEffect(() => {
    onChange(selectedImage);
  }, [selectedImage, onChange]);

  const imgTabList = [
    { src: '/images/gift-card/gift-card-test.gif', alt: '크리스마스' },
    { src: '/images/gift-card/gift-card-test01.svg', alt: '케이크' },
    { src: '/images/gift-card/gift-card-test02.png', alt: '산타' },
    { src: '/images/gift-card/brand-img.png', alt: '스테이크' },
    { src: '/images/gift-card/card-img.png', alt: '선물' },
    { src: '/images/gift-card/gift-img_lg01.png', alt: '파티' },
    { src: '/images/gift-card/gift-img_lg02.png', alt: '개구리' },
  ];

  return (
    <Box>
      <Box className='horizontal-scroll'>
        <ul className='img-select'>
          {imgTabList.map((image, i) => (
            <li key={i} onClick={() => setSelectedImage(image.src)} className={selectedImage === image.src ? 'selected' : ''}>
              <img className='img-view' src={image.src} alt={image.alt} />
            </li>
          ))}
        </ul>
        <GiftCardViewBtn />
      </Box>
    </Box>
  );
}

export default ImgTab;
