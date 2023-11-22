import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';
import '../css/cardSparkles.css';

function ImgTab({imgTabUrl}) {
  const [imgTab, setImgTab] = useState(1);
  const imgClick = (imgNumber) => {
	setImgTab(imgNumber);
  }

  return (
    <>
      <Box className="horizontal-scroll">
        <ul className="img-select">
          <li onClick={() => imgClick(1)} className={imgTab === 1 ? 'selected ' : ''}>
            <img className="img-view" src={imgTabUrl}/>
          </li>
          <li onClick={() => imgClick(2)} className={imgTab === 2 ? 'selected ' : ''}>
            <img className="img-view" src={process.env.PUBLIC_URL + '/images/gift-card/gift-img01.png'}/>
          </li>
          <li onClick={() => imgClick(3)} className={imgTab === 3 ? 'selected ' : ''}>
            <img className="img-view" src={process.env.PUBLIC_URL + '/images/gift-card/gift-img02.png'}/>
		  </li>
          <li onClick={() => imgClick(4)} className={imgTab === 4 ? 'selected ' : ''}>
            <img className="img-view" src={process.env.PUBLIC_URL + '/images/gift-card/gift-img03.png'}/>
		  </li>
          <li onClick={() => imgClick(5)} className={imgTab === 5 ? 'selected ' : ''}>
            <img className="img-view" src={process.env.PUBLIC_URL + '/images/gift-card/gift-img04.png'}/>
		  </li>
          <li onClick={() => imgClick(6)} className={imgTab === 6 ? 'selected ' : ''}>
            <img className="img-view" src={process.env.PUBLIC_URL + '/images/gift-card/gift-img05.png'}/>
		  </li>
          <li onClick={() => imgClick(7)} className={imgTab === 7 ? 'selected ' : ''}>
            <img className="img-view" src={process.env.PUBLIC_URL + '/images/gift-card/gift-img06.png'}/>
		  </li>
        </ul>
		<button className='view-btn'></button>
      </Box>
    </>
  );
}

ImgTab.defaultProps = {
    imgTabUrl: '/images/gift-card/gift-img.png'
}

export default ImgTab;
