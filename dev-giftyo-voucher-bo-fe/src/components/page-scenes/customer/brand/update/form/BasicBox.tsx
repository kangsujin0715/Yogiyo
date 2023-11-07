import { TextField, Typography } from '@mui/material';
import FormArticle from 'src/components/ui/form/FormArticle';
import FormCell from 'src/components/ui/form/shared/FormCell';
import { FormRow } from 'src/components/ui/form/shared/FormStyled';
import AddressInput from 'src/components/common/AddressInput';
import { useState } from 'react';
import { Address } from 'react-daum-postcode/lib/loadPostcode';
import { useRouterQuery } from 'src/hooks/useRouterQuery';
import { useCustomerBrandDetailQuery } from 'src/query/customer/useCustomerBrandQuery';

/**
 * 브랜드 수정 기본정보 폼 컴포넌트
 * @returns {JSX.Element}
 * @since 2023.10.26
 * @author : hijoeng@coopnc.com
 */

type QueryParams = {
  no: string;
};

const BasicBox = () => {
  const params = useRouterQuery<QueryParams>();
  const [addr, setAddr] = useState<Address>();
  const query = useCustomerBrandDetailQuery({ params: params.no });

  return (
    <FormArticle title={'기본정보'} unMask={() => {}}>
      <FormRow>
        <FormCell label={'브랜드 코드'}>
          <Typography>{query.data?.brandCode}</Typography>
        </FormCell>

        <FormCell label={'프랜차이즈 ID'}>
          <Typography>{query.data?.franchiseId}</Typography>
        </FormCell>
      </FormRow>

      <FormRow>
        <FormCell label={'사업자명'}>
          <Typography>{query.data?.corporationName}</Typography>
        </FormCell>

        <FormCell label="브랜드명">
          <TextField id="brandName" value={query.data?.brandName} />
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
