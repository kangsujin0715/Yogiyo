import * as React from 'react';
import ResultTable from 'src/components/ui/table/ResultTable';
import SearchFilterBox from 'src/components/ui/filter/SearchFilterBox';
import SearchFilterInput from 'src/components/ui/filter/SearchFilterInput';
import SearchFilterSelect from 'src/components/ui/filter/SearchFilterSelect';
import { MenuItem } from '@mui/material';

interface Record {
  no: number;
  code: string;
  name: string;
  category: string;
  customerNumber: string;
  phoneNumber: string;
  isUsed: string;
  registerDatetime: string;
}

/**
 * 사업자 목록 컴포넌트
 * @returns {React.JSX.Element}
 * @since 2023.10.23
 * @author : sung7760@coopnc.com
 */
const CustomerListScenes = (): React.JSX.Element => {
  const records: Record[] = [
    {
      no: 2,
      code: 'QC214PEO2',
      name: '요기요',
      category: '브랜드',
      customerNumber: '211-88-68802',
      phoneNumber: '070-****-1234',
      isUsed: '사용',
      registerDatetime: '2023-09-03 13:13:04',
    },
    {
      no: 1,
      code: 'VP43PZVC3',
      name: 'SPC',
      category: '판매채널',
      customerNumber: '133-81-22244',
      phoneNumber: '070-****-4444',
      isUsed: '사용안함',
      registerDatetime: '2023-08-31 13:13:11',
    },
  ];

  const columns = [
    { name: 'no', text: 'No' },
    { name: 'code', text: '사업자코드' },
    { name: 'name', text: '사업자명' },
    { name: 'customerNumber', text: '사업자등록번호' },
    { name: 'phoneNumber', text: '대표 전화번호' },
    { name: 'isUsed', text: '사용여부' },
    { name: 'registerDatetime', text: '등록일' },
  ];

  return (
    <>
      <SearchFilterBox onSearch={() => {}} onReset={() => {}}>
        <SearchFilterSelect
          label="사업자코드"
          startWith={<MenuItem value={''}>전체</MenuItem>}
          name={'code'}
        >
          <MenuItem value={'A'}>사업자A</MenuItem>
        </SearchFilterSelect>
        <SearchFilterInput label="사업자명" />
        <SearchFilterInput label="사업자 등록번호" />
        <SearchFilterSelect
          label="사용여부"
          startWith={<MenuItem value={''}>전체</MenuItem>}
          name={'useYn'}
        >
          <MenuItem value={'Y'}>사용</MenuItem>
          <MenuItem value={'N'}>사용안함</MenuItem>
        </SearchFilterSelect>
        <SearchFilterInput label="등록일" />
      </SearchFilterBox>

      <ResultTable<Record>
        columns={columns}
        data={records}
        pagination={{
          last: true,
          first: true,
          totalElements: records.length,
          start: 1,
          end: 10,
          size: 10,
          curPage: 1,
        }}
      />
    </>
  );
};

export default CustomerListScenes;
