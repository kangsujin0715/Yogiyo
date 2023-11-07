import * as React from 'react';
import { ChangeEvent, useState } from 'react';
import { Box, Button } from '@mui/material';
import SearchFilterInput from 'src/components/ui/filter/SearchFilterInput';
import BasicTable from 'src/components/ui/table/BasicTable';
import { LinkStyleText } from 'src/components/common/text/StyledText';
import { useNoticeCategoryList } from 'src/query/product/notice/useNotice';

const categoryColumns = [
  { text: 'No.', name: 'no' },
  { text: '고시정보 분류', name: 'name' },
  { text: '사용여부', name: 'useYn' },
  { text: '수정', name: 'modifyButton' },
];

interface Props {
  brandCode?: string;
  onClick: (code: number) => void;
}
const CategoryList = ({ brandCode, onClick }: Props) => {
  const [noticeCategoryKeyword, setNoticeCategoryKeyword] = useState('');

  const { data } = useNoticeCategoryList(
    {
      keyword: noticeCategoryKeyword,
      brandCode: brandCode ?? '',
    },
    { enabled: !!brandCode }
  );

  const handleCategoryKeywordChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
    setNoticeCategoryKeyword(value);

  return (
    <>
      <Box display="flex" alignItems="flex-end" mb="24px">
        <Box mr="8px" flex={1}>
          <SearchFilterInput
            label="고시정보 분류 검색"
            variant="standard"
            id="category"
            onChange={handleCategoryKeywordChange}
          />
        </Box>
        <Box>
          <Button color="info">추가</Button>
        </Box>
      </Box>
      <BasicTable
        columns={categoryColumns}
        data={data?.map((row) => ({
          ...row,
          name: <LinkStyleText onClick={() => onClick(row.seq)}>{row.name}</LinkStyleText>,
          modifyButton: <Button>수정</Button>,
        }))}
      />
    </>
  );
};
export default CategoryList;
