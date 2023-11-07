import { MenuItem } from '@mui/material';
import * as React from 'react';
import SearchFilterInput from 'src/components/ui/filter/SearchFilterInput';
import SearchFilterSelect from 'src/components/ui/filter/SearchFilterSelect';
import SearchFilterBox from 'src/components/ui/filter/SearchFilterBox';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { productManageSearchFilter } from 'src/recoil/product/productAtoms';
import { ProductSearchFilter } from 'src/interface/product/BasicProduct.interface';
import { FilterFormsData } from 'src/interface/product/BasicProduct.interface.mock';

interface Props {
  onSearch: (filter: ProductSearchFilter) => void;
}

/**
 *
 * 상품관리 검색 필터
 * @param {Props} props
 * @returns {JSX.Element}
 * @constructor
 * @author jockbal@coopnc.com
 * @since 2023.11.02
 */
const ProductManageFilter = (props: Props) => {
  const reset = useResetRecoilState(productManageSearchFilter);
  const [filterData, setFilterData] = useRecoilState(productManageSearchFilter);

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
      {FilterFormsData.map((forms) => (
        <>
          {forms.type == 'input' && (
            <SearchFilterInput
              key={forms.name + forms.value}
              label={forms.name}
              name={forms.value}
              value={filterData[forms.value as keyof typeof filterData]}
              onChange={({ target: { name, value } }) => handleChange(name, value)}
            />
          )}
          {forms.type == 'select' && (
            <SearchFilterSelect
              key={forms.name + forms.value}
              label={forms.name}
              name={forms.value}
              value={forms.menus[0].tag}
              onChange={({ target: { name, value } }) => handleChange(name, value as string)}
            >
              {forms.menus.map((menu) => (
                <MenuItem key={menu.tag + menu.title} value={menu.tag}>
                  {menu.title}
                </MenuItem>
              ))}
            </SearchFilterSelect>
          )}
        </>
      ))}
    </SearchFilterBox>
  );
};

export default ProductManageFilter;
