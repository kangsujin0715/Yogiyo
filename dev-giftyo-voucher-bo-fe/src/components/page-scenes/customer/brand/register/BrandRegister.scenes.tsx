import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import BasicBox from 'src/components/page-scenes/customer/brand/register/form/BasicBox';
import CustomerBox from 'src/components/page-scenes/customer/brand/shared/CustomerBox';
import UseCheckBox from 'src/components/page-scenes/customer/brand/shared/UseCheckBox';
import { BrandType } from 'src/components/page-scenes/customer/brand/register/brand.type';
import FormBox from 'src/components/ui/form/FormBox';
import { useBrandRegisterMutation } from 'src/query/customer/useCustomerBrandMutation';

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

  const mutation = useBrandRegisterMutation({
    onSuccess: () => {
      alert('등록되었습니다.');
      router.back();
    },
  });

  const onSubmit = (data: BrandType) => {
    mutation.mutate(data);
    console.log('data = ', data);
  };

  return (
    <FormProvider {...form}>
      <FormBox onSubmit={handleSubmit(onSubmit)} onCancel={() => router.back()}>
        <BasicBox />
        <CustomerBox />
        <UseCheckBox />
      </FormBox>
    </FormProvider>
  );
};

export default BrandRegisterScenes;
