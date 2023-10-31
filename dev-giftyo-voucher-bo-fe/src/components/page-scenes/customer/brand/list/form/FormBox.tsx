import LabelTextField from 'src/components/ui/textfield/LabelTextField';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import MultipleButtonGroup, {
  GroupButton,
} from 'src/components/ui/button/MultipleButtonGroup';

interface DataType {
  id: number;
  label: string;
  formName: keyof FormValue;
}

const formList: DataType[] = [
  {
    id: 1,
    label: '프렌차이즈 ID',
    formName: 'franchiseId',
  },
  {
    id: 2,
    label: '브랜드 코드',
    formName: 'brandCode',
  },
  {
    id: 3,
    label: '브랜드명',
    formName: 'brandName',
  },
  {
    id: 4,
    label: '사업자명',
    formName: 'corporationName',
  },
  {
    id: 5,
    label: '등록일',
    formName: 'registerDate',
  },
];

export interface FormValue {
  franchiseId: string;
  brandCode: string;
  brandName: string;
  corporationName: string;
  registerDate: string;
}

interface FormBoxProps {
  onSearch: (data: FormValue) => void;
}

/**
 * 브랜드 목록 폼 컴포넌트
 * @returns {JSX.Element}
 * @since 2023.10.24
 * @author : hijoeng@coopnc.com
 */
const FormBox = (props: FormBoxProps) => {
  const { reset, control, handleSubmit } = useForm<FormValue>({
    defaultValues: {
      franchiseId: '',
      brandCode: '',
      brandName: '',
      corporationName: '',
      registerDate: '',
    },
  });

  const onSubmit = (data: FormValue) => {
    // if (Object.values(data).every((v) => !v)) {
    //   alert('검색어를 입력해주세요');
    //   return;
    // }

    props.onSearch(data);
    console.log(data);
  };

  const onReset = () => {
    reset(control._defaultValues);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        {formList.map((data) => (
          <LabelTextField
            key={data.formName}
            stackProps={{
              direction: 'row',
              spacing: 2,
              sx: { padding: '20px' },
            }}
            textFieldProps={{ variant: 'outlined', size: 'small' }}
            control={control}
            name={data.formName}
            rules={{
              maxLength: {
                value: 10,
                message: '10자 이상 입력 할 수 없습니다.',
              },
            }}>
            {data.label}
          </LabelTextField>
        ))}
      </FormContainer>

      <MultipleButtonGroup direction={'row'} spacing={2}>
        <GroupButton size={'large'} variant={'outlined'} onClick={onReset}>
          초기화
        </GroupButton>
        <GroupButton type={'submit'} size={'large'} variant={'contained'}>
          검색
        </GroupButton>
      </MultipleButtonGroup>
    </Container>
  );
};

export default FormBox;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-items: center;

  border-radius: var(--borderRadius, 4px);
  background: var(--background-paper-elevation-1, #fff);

  /* elevation/1 */
  box-shadow:
    0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

const FormContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
