import { SelectChangeEvent, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { BasicFormType } from 'src/components/page-scenes/customer/brand/register/brand.type';
import GenericLabelSelect from 'src/components/ui/select/GenericLabelSelect';
import FormArticle from 'src/components/ui/form/FormArticle';
import FormCell from 'src/components/ui/form/shared/FormCell';
import { FormRow } from 'src/components/ui/form/shared/FormStyled';
import AddressInput from 'src/components/common/AddressInput';
import { useState } from 'react';
import { Address } from 'react-daum-postcode/lib/loadPostcode';

const selectItems = [
  {
    name: '전체',
    value: 'all',
  },
  {
    name: '쿠프마케팅',
    value: 'coop',
  },
  {
    name: '페이즈',
    value: 'pays',
  },
  {
    name: '북앤라이프',
    value: 'book',
  },
];

/**
 * 브랜드 등록 기본정보 폼 컴포넌트
 * @returns {JSX.Element}
 * @since 2023.10.26
 * @author : hijoeng@coopnc.com
 */

const BasicBox = () => {
  const { control } = useFormContext<BasicFormType>();
  const [addr, setAddr] = useState<Address>();

  return (
    <FormArticle title={'기본정보'} unMask={() => {}}>
      <FormRow>
        <FormCell label={'사업자명'}>
          <GenericLabelSelect
            defaultValue={'all'}
            items={selectItems}
            getItemLabel={(item) => item.name}
            getItemValue={(item) => item.value}
            name={'corporationName'}
            control={control}
            rules={{
              onChange: (e: SelectChangeEvent) => console.log('select change = ', e),
            }}
          />
        </FormCell>

        <FormCell label={'브랜드명'}>
          <TextField id="brandName" />
        </FormCell>
      </FormRow>

      <FormRow>
        <FormCell label="주소">
          <AddressInput
            onChange={(arg) => setAddr(arg)}
            address={addr?.address}
            zipCode={addr?.zonecode}
          />
        </FormCell>
      </FormRow>
    </FormArticle>
  );
};

export default BasicBox;
