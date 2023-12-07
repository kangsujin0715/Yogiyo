import React from 'react';
import { Box } from '@mui/material';

import '../css/price.css';

function VoucherInfo({
  pVoucher,
  pBalance,
  pSale,
  pPrice,
  pAfterPrice,
  giftBoxInfoUrl,
  giftBoxUrl,
}) {
  return (
    <Box className="voucher-info-box gird-box">
      <ul className="price-info">
        {pVoucher && <li className="voucher">{pVoucher}</li>}
        {pBalance && <li className="balance">{pBalance}</li>}
        {pSale && <li className="sale">{pSale}</li>}
        {pPrice && <li className="price">{pPrice}</li>}
        {pAfterPrice && <li className="after-price">{pAfterPrice}</li>}
      </ul>
      <Box>
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
  pVoucher: '',
  pBalance: '',
  pSale: '',
  pPrice: '',
  pAfterPrice: '',
  giftBoxInfoUrl: '',
  giftBoxUrl: '',
};
export default VoucherInfo;
