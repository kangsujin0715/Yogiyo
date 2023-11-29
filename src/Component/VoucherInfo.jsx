import React from 'react';
import { Box } from '@mui/material';

import '../css/common.css';

function VoucherInfo({ pVoucher, pbalance, pSale, pPrice, pAfterPrice, giftBoxInfoUrl, giftBoxUrl }) {
  return (
    <Box className="voucher-info-box gird-box">
      <ul className="price-info">
        <li className="voucher">{pVoucher ? pVoucher : <span className='none'></span>}</li>
        <li className="balance">{pbalance ? pbalance : <span className='none'></span>}</li>
        <li className="sale">{pSale ? pSale : <span className='none'></span>}</li>
        <li className="price">{pPrice ? pPrice : <span className='none'></span>}</li>
        <li className="after-price">{pAfterPrice ? pAfterPrice : <span className='none'></span>}</li>
      </ul>
      <Box>
        <ul className="gift-img-info">
          <li className="gift-box-info"><img src={giftBoxInfoUrl} alt='선물정보'/></li>
          <li className="gift-box"><img src={giftBoxUrl} alt='선물'/></li>
        </ul>
      </Box>
    </Box>
  );
}

VoucherInfo.defaultProps = {
  pVoucher: '',
  pbalance: '',
  pSale: '',
  pPrice: '',
  pAfterPrice: '',
  giftBoxInfoUrl: '',
  giftBoxUrl: '',
};
export default VoucherInfo;
