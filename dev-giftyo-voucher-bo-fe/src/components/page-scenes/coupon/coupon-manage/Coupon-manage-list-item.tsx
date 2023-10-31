import { CouponManageVO } from 'src/components/page-scenes/coupon/common/Coupon-constants';

import TableCell from '@mui/material/TableCell';

export interface CouponManageListItemProps {
  data: CouponManageVO;
}

/**
 *
 * @returns {JSX.Element}
 * @constructor
 * @author jockbal@coopnc.com
 * @since 2023.10.23
 */
const CouponManageListItem = (props: CouponManageListItemProps) => {
  const typographyStyle = {
    width: 90,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  };
  return (
    <>
      <TableCell sx={typographyStyle}>{props.data.orderNo}</TableCell>
      <TableCell sx={typographyStyle}>{props.data.giftNo}</TableCell>
      <TableCell sx={typographyStyle}>{props.data.receiverNo}</TableCell>
      <TableCell sx={typographyStyle}>{props.data.giftName}</TableCell>
      <TableCell sx={typographyStyle}>{props.data.giftStatus}</TableCell>
      <TableCell sx={typographyStyle}>{props.data.giftUse}</TableCell>
      <TableCell sx={typographyStyle}>{props.data.giftChannel}</TableCell>
      <TableCell sx={typographyStyle}>{props.data.applyCategory}</TableCell>
      <TableCell sx={typographyStyle}>{props.data.applyName}</TableCell>
      <TableCell sx={typographyStyle}>{props.data.giftType}</TableCell>
      <TableCell sx={typographyStyle}>{props.data.date}</TableCell>
    </>
  );
};

export default CouponManageListItem;
