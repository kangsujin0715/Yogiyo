import * as React from 'react';
import { ChangeEvent, useState } from 'react';
import { Box, Button } from '@mui/material';
import SearchFilterInput from 'src/components/ui/filter/SearchFilterInput';
import BasicTable from 'src/components/ui/table/BasicTable';
import { useNoticeList } from 'src/query/product/notice/useNotice';

const noticeColumns = [
  { text: 'No.', name: 'no' },
  { text: '기본값', name: 'defaultYn' },
  { text: '제목', name: 'title' },
  { text: '사용어부', name: 'useYn' },
  { text: '등록일', name: 'regDateTime' },
  { text: '수정', name: 'modifyButton' },
];
interface Props {
  noticeCategorySeq?: number;
}
const NoticeList = ({ noticeCategorySeq }: Props) => {
  const [noticeKeyword, setNoticeKeyword] = useState('');

  const noticeList = useNoticeList(
    {
      keyword: noticeKeyword,
      noticeCategorySeq: noticeCategorySeq,
    },
    { enabled: !!noticeCategorySeq }
  );

  const handleNoticeKeywordChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
    setNoticeKeyword(value);

  return (
    <>
      <Box display="flex" alignItems="flex-end" mb="24px">
        <Box mr="8px" flex={1}>
          <SearchFilterInput
            label="제목 검색"
            variant="standard"
            id="title"
            onChange={handleNoticeKeywordChange}
          />
        </Box>
        <Box mr="8px">
          <Button color="info">기본값 저장</Button>
        </Box>
        <Box mr="8px">
          <Button color="info">추가</Button>
        </Box>
      </Box>
      <BasicTable
        columns={noticeColumns}
        data={noticeList.data?.map((item) => ({
          ...item,
          modifyButton: <Button>수정</Button>,
        }))}
      />
    </>
  );
};
export default NoticeList;
