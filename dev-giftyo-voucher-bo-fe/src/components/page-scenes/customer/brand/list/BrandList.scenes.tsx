import styled from 'styled-components';
import { Box } from '@mui/material';
import FormBox, {
  FormValue
} from 'src/components/page-scenes/customer/brand/list/form/FormBox';
import { useState } from 'react';
import TableBox from './table/TableBox';

/**
 * 브랜드 목록 컴포넌트
 * @returns {JSX.Element}
 * @since 2023.10.24
 * @author : hijoeng@coopnc.com
 */
const BrandListScenes = () => {
  const [searchValue, setSearchValue] = useState<FormValue>({
    franchiseId: '',
    brandCode: '',
    brandName: '',
    corporationName: '',
    registerDate: '',
  });

  return (
    <BrandContainer>
      <FormBox onSearch={(data) => setSearchValue(data)} />
      <TableBox searchValue={searchValue} />
    </BrandContainer>
  );
};

export default BrandListScenes;

const BrandContainer = styled(Box)`
  display: flex;
  width: auto;
  height: 100%;
  border-radius: var(--none, 0px);
  background: #fafafa;
  flex-direction: column;
`;
