import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import CustomerBox from 'src/components/page-scenes/customer/brand/shared/CustomerBox';
import UseCheckBox from 'src/components/page-scenes/customer/brand/shared/UseCheckBox';
import { BrandType } from 'src/components/page-scenes/customer/brand/register/brand.type';
import FormBox from 'src/components/ui/form/FormBox';
import BasicBox from './form/BasicBox';
import ManagerBox from './form/ManagerBox';
import { QueryErrorBoundary } from 'src/components/common/error/boundary/QueryErrorBoundary';
import { useBrandUpdateMutation } from 'src/query/customer/useCustomerBrandMutation';

/**
 * 브랜드 수정 컴포넌트
 * @returns {JSX.Element}
 * @since 2023.10.26
 * @author : hijoeng@coopnc.com
 */

const BrandUpdateScenes = () => {
  const router = useRouter();
  const mutation = useBrandUpdateMutation({
    onSuccess: () => {
      alert('변경되었습니다.');
      router.back();
    },
  });
  const form = useForm<BrandType>({
    defaultValues: {},
  });
  const { handleSubmit } = form;

  const onSubmit = (data: BrandType) => {
    console.log('data = ', data);
    mutation.mutate(data);
  };

  return (
    <FormProvider {...form}>
      <FormBox
        onSubmit={handleSubmit(onSubmit)}
        onDelete={() => console.log('삭제')}
        onCancel={() => router.back()}
      >
        <QueryErrorBoundary>
          <BasicBox />
        </QueryErrorBoundary>

        <CustomerBox />
        <UseCheckBox />
        <ManagerBox />
      </FormBox>
    </FormProvider>
  );
};

export default BrandUpdateScenes;
