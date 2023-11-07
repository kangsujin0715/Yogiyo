import { Typography } from '@mui/material';
import FormArticle from 'src/components/ui/form/FormArticle';
import FormCell from 'src/components/ui/form/shared/FormCell';
import { FormRow } from 'src/components/ui/form/shared/FormStyled';

/**
 * 브랜드 수정 등록 수정자 폼 컴포넌트
 * @returns {JSX.Element}
 * @since 2023.10.26
 * @author : hijoeng@coopnc.com
 */

const ManagerBox = () => {
  return (
    <FormArticle title={'등록자/수정자'} unMask={() => {}}>
      <FormRow>
        <FormCell label={'등록자'}>
          <Typography>요기요</Typography>
        </FormCell>

        <FormCell label={'등록일시'}>
          <Typography>2023-12-31 14:32:30</Typography>
        </FormCell>
      </FormRow>
      <FormRow>
        <FormCell label={'수정자'}>
          <Typography>요기요</Typography>
        </FormCell>

        <FormCell label={'수정일시'}>
          <Typography>2023-12-31 17:32:30</Typography>
        </FormCell>
      </FormRow>
    </FormArticle>
  );
};

export default ManagerBox;
