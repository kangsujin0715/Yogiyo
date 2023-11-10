import React from 'react';
import { TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


function GiftDetail() {
  return (
    <div>
      <div className="card-view">요기요 상품권</div>
      <div className="padding-box">
		<h2 className='inline title'>받는 사람</h2>
		<span>&#40;최대 100명&#41;</span>
		<div>
			<Button variant="outlined" startIcon={<AddIcon />}>최근</Button>
			<Button variant="outlined" startIcon={<AddIcon />}>연락처</Button>
			<Button variant="outlined" startIcon={<AddIcon />}>직접</Button>
		</div>
      </div>
      <div className="padding-box">
		<h2 className='title'>보내는 사람</h2>
		<TextField id="outlined-basic" placeholder='이름' variant="outlined"/>
      </div>
      <div className="padding-box">
		<div>
			<h2>결제수단</h2>
			<span></span>
		</div>
      </div>
      <div className="padding-box">
		<div>
			<h3>상품권 금액</h3>
			<span></span>
		</div>
		<div>
			<h2>총 결제금액</h2>
			<span></span>
		</div>
      </div>
    </div>
  );
}

export default GiftDetail;
