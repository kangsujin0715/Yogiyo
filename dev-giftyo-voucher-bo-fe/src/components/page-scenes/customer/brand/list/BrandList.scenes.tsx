import { useState } from 'react';
import BrandListTable from './table/BrandListTable';
import SearchForm, { FormValue } from './form/SearchForm';
import FormBox from 'src/components/ui/form/FormBox';
import { QueryErrorBoundary } from 'src/components/common/error/boundary/QueryErrorBoundary';

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
    <FormBox>
      <SearchForm onSearch={(data) => setSearchValue(data)} />
      <QueryErrorBoundary>
        <BrandListTable searchValue={searchValue} />
      </QueryErrorBoundary>
    </FormBox>
  );
};

export default BrandListScenes;
