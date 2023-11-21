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
	<Box className="view-box">
      <Box className="horizontal-scroll">
        <ul className="img-select">
          <li onClick={() => imgClick(1)} className={imgTab === 1 ? 'selected ' : ''}>
            <img className="img-view" src={process.env.PUBLIC_URL + '/images/gift-card/gift-img.png'}/>
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
	  </Box>
      <Box className="gift-card">
        <Box className={`card-box ${isHovered ? 'hover' : ''} manual-flip `}>
          <Box className="card-view">
            <Link className="front card sparkles animated" onClick={rotateCard}>
              <img className="img-view" src={process.env.PUBLIC_URL + '/images/gift-card/card-img.png'}/>
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
			{/* 카드 앞 */}

            <Box className="back" sx={{ backgroundColor: '#2d863c' }}>
              {/* <Box className="text-box">
				<label for="text" className='label-box'>{labelText}</label>
				<textarea id="text" onChange={onTextHandler} onClick={clearLabel} maxLength="150">
				</textarea>
                <button className="click" onClick={rotateCard}>
                  카드 뒤집기
                </button>
                <p className="byte">{textCount}/150</p>
              </Box> */}
			  {/* 카드 뒤 */}

              <Link className="complete-box" onClick={rotateCard}>
				<Box className="complete">
					<Typography className="brand" variant="h2" component="h2">To.<span className='name'>김민지</span></Typography>
					<p className='content'>최소글자는 1글자, 최대 글자는 150자로 맞춰 놓으면 어떨까요? 충분해 보이는 영역입니다.</p>
				</Box>
			  </Link>
			
			  {/* 카드 완료 */}
			 
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="horizontal-scroll">
        <ul className="money-voucher">
          <li onClick={() => moneyClick(1)} className={moneyTab === 1 ? 'selected' : 'disable'}>10,000원</li>
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
