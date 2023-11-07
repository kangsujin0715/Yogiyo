import FormArticle from 'src/components/ui/form/FormArticle';
import { FormRow } from 'src/components/ui/form/shared/FormStyled';
import FormCell from 'src/components/ui/form/shared/FormCell';
import FormRadioElement from 'src/components/ui/form/elements/FormRadioElement';

/**
 * 브랜드 사용여부 폼 컴포넌트
 * @returns {JSX.Element}
 * @since 2023.10.26
 * @author : hijoeng@coopnc.com
 */

const UseCheckBox = () => {
  return (
    <FormArticle title={'사용여부'}>
      <FormRow>
        <FormCell label={'사용여부'}>
          <FormRadioElement
            id="useYn"
            options={[
              { name: '사용', value: 'Y' },
              { name: '사용안함', value: 'N' },
            ]}
          />
        </FormCell>
      </FormRow>
    </FormArticle>
  );
};

export default UseCheckBox;
