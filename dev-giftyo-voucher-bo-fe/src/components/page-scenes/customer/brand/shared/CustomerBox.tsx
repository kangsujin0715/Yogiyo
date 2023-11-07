import { TextField } from '@mui/material';
import FormArticle from 'src/components/ui/form/FormArticle';
import React from 'react';
import FormCell from 'src/components/ui/form/shared/FormCell';
import { FormRow } from 'src/components/ui/form/shared/FormStyled';

/**
 * 브랜드 담당자 정보 폼 컴포넌트
 * @returns {JSX.Element}
 * @since 2023.10.26
 * @author : hijoeng@coopnc.com
 */

const CustomerBox = () => {
  return (
    <FormArticle title={'담당자 정보'} unMask={() => {}}>
      <FormRow>
        <FormCell label={'담당자명'}>
          <TextField id="contactName" />
        </FormCell>
        <FormCell label={'담당자 전화번호'}>
          <TextField id="contactPhone" placeholder={'숫자만 입력하세요.'} />
        </FormCell>
      </FormRow>
      <FormRow>
        <FormCell label={'담당자 이메일 주소'}>
          <TextField id="contactName" placeholder={'예시) yogiyo@yogiyo.co.kr'} />
        </FormCell>
      </FormRow>
    </FormArticle>
  );
};

export default CustomerBox;
