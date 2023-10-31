import styled from 'styled-components';
import { Stack } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import MultipleButtonGroup, {
  GroupButton
} from 'src/components/ui/button/MultipleButtonGroup';
import { useRouter } from 'next/router';
import BasicBox
  from 'src/components/page-scenes/customer/brand/register/form/BasicBox';
import CustomerBox
  from 'src/components/page-scenes/customer/brand/register/form/CustomerBox';
import UseCheckBox
  from 'src/components/page-scenes/customer/brand/register/form/UseCheckBox';
import {
  BrandType
} from 'src/components/page-scenes/customer/brand/register/brand.type';

/**
 * 브랜드 등록 컴포넌트
 * @returns {JSX.Element}
 * @since 2023.10.26
 * @author : hijoeng@coopnc.com
 */

const BrandRegisterScenes = () => {
  const router = useRouter();
  const form = useForm<BrandType>({
    defaultValues: {},
  });
  const { handleSubmit } = form;

  const onSubmit = (data: BrandType) => {
    // if (Object.values(data).every((v) => !v)) {
    //   alert('검색어를 입력해주세요');
    //   return;
    // }

    alert(JSON.stringify(data));
    console.log('data = ', data);
  };

  return (
    <FormProvider {...form}>
      <RegisterContainer onSubmit={handleSubmit(onSubmit)}>
        <BasicBox />
        <CustomerBox />
        <UseCheckBox />

        <MultipleButtonGroup
          direction={'row'}
          spacing={2}
          justifyContent={'center'}
          marginTop={'16px'}
        >
          <GroupButton size={'large'} variant={'outlined'} onClick={() => router.back()}>
            취소
          </GroupButton>
          <GroupButton type={'submit'} size={'large'} variant={'contained'}>
            저장
          </GroupButton>
        </MultipleButtonGroup>
      </RegisterContainer>
    </FormProvider>
  );
};

export default BrandRegisterScenes;

const RegisterContainer = styled.form`
  display: flex;
  width: auto;
  height: auto;
  padding: 24px;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: var(--borderRadius, 4px);
  background: var(--background-paper-elevation-1, #fff);

  /* elevation/1 */
  box-shadow:
    0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const RowContainer = styled(Stack)`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
  align-items: center;
`;
