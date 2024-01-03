import React from 'react';
import { Box } from '@mui/material';

import '../css/price.css';

function VoucherInfo({
  voucher,
  balance,
  sale,
  price,
  afterPrice,
  giftBoxInfoUrl,
  giftBoxUrl,
}) {
  return (
    <Box className="voucher-info-box gird-box">
      <ul className="price-info">
        {voucher && <li className="voucher">{voucher}</li>}
        {balance && <li className="balance">{balance}</li>}
        {sale && <li className="sale">{sale}</li>}
        {price && <li className="price">{price}</li>}
        {afterPrice && <li className="after-price">{afterPrice}</li>}
      </ul>
      <Box className="shrink">
        <ul className="gift-img-info">
          {giftBoxInfoUrl && (
            <li className="gift-box-info">
              <img src={giftBoxInfoUrl} alt="선물정보" />
            </li>
          )}
          {giftBoxUrl && (
            <li className="gift-box-info">
              <img src={giftBoxUrl} alt="선물정보" />
            </li>
          )}
        </ul>
      </Box>
    </Box>
  );
}

VoucherInfo.defaultProps = {
  voucher: '',
  balance: '',
  sale: '',
  price: '',
  afterPrice: '',
  giftBoxInfoUrl: '',
  giftBoxUrl: '',
};
export default VoucherInfo;
