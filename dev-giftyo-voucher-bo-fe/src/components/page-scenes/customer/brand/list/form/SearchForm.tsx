import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import SearchFilterBox from 'src/components/ui/filter/SearchFilterBox';
import SearchFilterInput from 'src/components/ui/filter/SearchFilterInput';

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

interface BrandListSearchProps {
  onSearch: (data: FormValue) => void;
}

/**
 * 브랜드 목록 검색 폼 컴포넌트
 * @returns {JSX.Element}
 * @since 2023.10.24
 * @author : hijoeng@coopnc.com
 */
const SearchForm = (props: BrandListSearchProps) => {
  const { reset, handleSubmit } = useForm<FormValue>({
    defaultValues: {
      franchiseId: '',
      brandCode: '',
      brandName: '',
      corporationName: '',
      registerDate: '',
    },
  });

  const onSubmit = (data: FormValue) => {
    props.onSearch(data);
    console.log(data);
  };

  return (
    <Container>
      <SearchFilterBox onSearch={handleSubmit(onSubmit)} onReset={() => reset()}>
        {formList.map((data) => (
          <SearchFilterInput key={data.id} label={data.label} />
        ))}
      </SearchFilterBox>
    </Container>
  );
};

export default SearchForm;

const Container = styled.form``;
