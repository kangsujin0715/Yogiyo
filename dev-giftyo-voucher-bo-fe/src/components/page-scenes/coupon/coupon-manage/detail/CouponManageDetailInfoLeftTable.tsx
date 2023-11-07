import { Container, Table } from '@mui/material';
import styled from 'styled-components';
import { SearchTable } from 'src/components/ui/table/search/SearchTable';
import * as React from 'react';
import { CouponSendHistoryData } from 'src/interface/coupon/CouponManage.interface';
import { useCouponDetailSendList } from 'src/query/coupon/useCoupon';

const renderRow = (item: CouponSendHistoryData) => {
  return (
    <SearchTable.Row key={item.id}>
      {Object.values(item).map((contents) => (
        <SearchTable.Cell key={`${item.id}_${contents}`}>{contents}</SearchTable.Cell>
      ))}
    </SearchTable.Row>
  );
};

interface InfoTableProps {
  columns: string[];
  couponNum: string;
}

/**
 *
 * 상품권 상세 왼쪽영역 두번째 테이블
 * @param {InfoTableProps} props
 * @returns {React.JSX.Element}
 * @author jockbal@coopnc.com
 * @since 2023.11.01
 */

const CouponManageDetailInfoLeftTable = (props: InfoTableProps) => {
  const { data } = useCouponDetailSendList({ couponNum: props.couponNum });

  return (
    <InboxTableStyle>
      <Table>
        <SearchTable.Thead columns={props.columns} />
        {!!data && <SearchTable.Tbody data={data.list} renderRow={renderRow} />}
      </Table>
    </InboxTableStyle>
  );
};

export default CouponManageDetailInfoLeftTable;

const InboxTableStyle = styled(Container)`
  width: 1450px;
  display: inline-flex;
  padding: var(--3, 24px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--none, 0px);
  border-radius: var(--none, 0px);
`;
