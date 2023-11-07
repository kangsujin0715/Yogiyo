import * as React from 'react';
import ResultTable from 'src/components/ui/table/ResultTable';
import SearchFilterBox from 'src/components/ui/filter/SearchFilterBox';
import SearchFilterInput from 'src/components/ui/filter/SearchFilterInput';
import SearchFilterSelect from 'src/components/ui/filter/SearchFilterSelect';
import { MenuItem } from '@mui/material';

interface Record {
  no: number;
  title: string;
  popupPeriod: string;
  registerUser: string;
  isUsed: string;
  registerDatetime: string;
}

/**
 * 공지사항 목록 컴포넌트
 * @returns {React.JSX.Element}
 */
const NoticeListScenes = (): React.JSX.Element => {
  const records: Record[] = [
    {
      no: 2,
      title: '개인정보 보호법 개정안 안내',
      popupPeriod: '2023-09-11 ~ 2023-09-15',
      registerUser: 'Yogiyo (요기요)',
      isUsed: '사용',
      registerDatetime: '2023-09-03 13:13:04',
    },
    {
      no: 1,
      title: '서비스 점검 안내',
      popupPeriod: '2023-09-11 ~ 2023-09-15',
      registerUser: 'Yogiyo (요기요)',
      isUsed: '사용안함',
      registerDatetime: '2023-09-03 13:13:04',
    },
  ];

  const columns = [
    { name: 'no', text: 'No' },
    { name: 'title', text: '제목' },
    { name: 'popupPeriod', text: '팝업기간' },
    { name: 'registerUser', text: '등록자' },
    { name: 'isUsed', text: '사용여부' },
    { name: 'registerDatetime', text: '등록일' },
  ];

  return (
    <>
      <SearchFilterBox onSearch={() => {}} onReset={() => {}}>
        <SearchFilterInput label="제목" />
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

export default NoticeListScenes;
