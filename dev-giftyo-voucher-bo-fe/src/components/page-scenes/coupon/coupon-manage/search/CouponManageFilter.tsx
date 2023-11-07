import { MenuItem } from '@mui/material';
import * as React from 'react';
import SearchFilterInput from 'src/components/ui/filter/SearchFilterInput';
import SearchFilterSelect from 'src/components/ui/filter/SearchFilterSelect';
import SearchFilterBox from 'src/components/ui/filter/SearchFilterBox';
import { couponManageSearchFilter } from 'src/recoil/coupon/couponAtoms';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { CouponSearchFilter } from 'src/interface/coupon/CouponManage.interface';

interface Props {
  onSearch: (filter: CouponSearchFilter) => void;
}

/**
 *
 * 상품권관리 검색 필터
 * @param {Props} props
 * @returns {JSX.Element}
 * @constructor
 * @author jockbal@coopnc.com
 * @since 2023.10.23
 */
const CouponManageFilter = (props: Props) => {
  const reset = useResetRecoilState(couponManageSearchFilter);
  const [filterData, setFilterData] = useRecoilState(couponManageSearchFilter);
  const handleReset = () => {
    reset();
  };
  const handleChange = (name: string, value: string) => {
    console.log(name);
    console.log(value);
    setFilterData({ ...filterData, [name]: value });
  };
  return (
    <SearchFilterBox onSearch={() => props.onSearch(filterData)} onReset={handleReset}>
      <SearchFilterInput
        label="발행 요청번호"
        name="issueNum"
        value={filterData.issueNum}
        onChange={({ target: { name, value } }) => handleChange(name, value)}
      />
      <SearchFilterInput
        label="상품권 번호"
        name="couponNum"
        value={filterData.couponNum}
        onChange={({ target: { name, value } }) => handleChange(name, value)}
      />
      <SearchFilterInput
        label="수신자 번호"
        name="receiverNum"
        value={filterData.receiverNum}
        onChange={({ target: { name, value } }) => handleChange(name, value)}
      />
      <SearchFilterSelect
        label="상품권 형태"
        name="couponType"
        value={filterData.couponType}
        onChange={({ target: { name, value } }) => handleChange(name, value as string)}
        startWith={<MenuItem value={'A'}>전체</MenuItem>}
      >
        <MenuItem value={'B'}>111</MenuItem>
        <MenuItem value={'C'}>222</MenuItem>
        <MenuItem value={'D'}>333</MenuItem>
      </SearchFilterSelect>
      <SearchFilterSelect
        label="사용여부"
        name="useYn"
        value={filterData.useYn}
        onChange={({ target: { name, value } }) => handleChange(name, value as string)}
        startWith={<MenuItem value={'A'}>사용안함</MenuItem>}
      >
        <MenuItem value={'B'}>111</MenuItem>
        <MenuItem value={'C'}>222</MenuItem>
        <MenuItem value={'D'}>333</MenuItem>
      </SearchFilterSelect>
      <SearchFilterSelect
        label="판매채널"
        name="sellingChannel"
        value={filterData.sellingChannel}
        onChange={({ target: { name, value } }) => handleChange(name, value as string)}
        startWith={<MenuItem value={'A'}>전체</MenuItem>}
      >
        <MenuItem value={'B'}>111</MenuItem>
        <MenuItem value={'C'}>222</MenuItem>
        <MenuItem value={'D'}>333</MenuItem>
      </SearchFilterSelect>
      <SearchFilterSelect
        label="신청서 구분"
        name="formType"
        value={filterData.formType}
        onChange={({ target: { name, value } }) => handleChange(name, value as string)}
        startWith={<MenuItem value={'A'}>전체</MenuItem>}
      >
        <MenuItem value={'B'}>111</MenuItem>
        <MenuItem value={'C'}>222</MenuItem>
        <MenuItem value={'D'}>333</MenuItem>
      </SearchFilterSelect>
      <SearchFilterInput
        label="신청서명"
        name="formName"
        value={filterData.formName}
        onChange={({ target: { name, value } }) => handleChange(name, value as string)}
      />
      <SearchFilterSelect
        label="상품종류"
        name="productType"
        value={filterData.productType}
        onChange={({ target: { name, value } }) => handleChange(name, value as string)}
        startWith={<MenuItem value={'A'}>전체</MenuItem>}
      >
        <MenuItem value={'B'}>111</MenuItem>
        <MenuItem value={'C'}>222</MenuItem>
        <MenuItem value={'D'}>333</MenuItem>
      </SearchFilterSelect>
      <SearchFilterInput
        label="발행일시"
        name="date"
        value={filterData.date}
        onChange={({ target: { name, value } }) => handleChange(name, value as string)}
      />
    </SearchFilterBox>
  );
};

export default CouponManageFilter;
