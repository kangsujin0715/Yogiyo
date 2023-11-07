import * as React from 'react';
import { ChangeEvent, useState } from 'react';
import { Box } from '@mui/material';
import SearchFilterInput from 'src/components/ui/filter/SearchFilterInput';
import BasicTable from 'src/components/ui/table/BasicTable';
import { Brand } from 'src/interface/brand/BrandVO';
import { useBrandList } from 'src/query/brand/useBrand';
import { LinkStyleText } from 'src/components/common/text/StyledText';

const brandColumns = [
  { text: 'No.', name: 'no' },
  { text: '브랜드코드', name: 'code' },
  { text: '브랜드명', name: 'name' },
];

interface Props {
  onClick: (code: string) => void;
}
const BrandList = ({ onClick }: Props) => {
  const [brandKeyword, setBrandKeyword] = useState('');
  const brandList = useBrandList({ name: brandKeyword });

  const handleBrandClick = (brand: Brand) => onClick(brand.code);

  const handleBrandKeywordChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
    setBrandKeyword(value);

  return (
    <>
      <Box mb="24px">
        <SearchFilterInput
          label="브랜드명, 브랜드코드 검색"
          variant="standard"
          id="brand"
          onChange={handleBrandKeywordChange}
        />
      </Box>
      <BasicTable<Brand>
        columns={brandColumns}
        data={brandList.data?.map((row) => ({
          ...row,
          name: <LinkStyleText onClick={() => handleBrandClick(row)}>{row.name}</LinkStyleText>,
        }))}
      />
    </>
  );
};
export default BrandList;
