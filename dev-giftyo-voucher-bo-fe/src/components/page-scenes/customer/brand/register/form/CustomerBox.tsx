import { Divider, Typography } from '@mui/material';
import LabelTextField from 'src/components/ui/textfield/LabelTextField';
import {
    RowContainer
} from 'src/components/page-scenes/customer/brand/register/BrandRegister.scenes';
import { useFormContext } from 'react-hook-form';
import {
    CustomerFormType
} from 'src/components/page-scenes/customer/brand/register/brand.type';

/**
 * 브랜드 등록 담당자 정보 폼 컴포넌트
 * @returns {JSX.Element}
 * @since 2023.10.26
 * @author : hijoeng@coopnc.com
 */

const CustomerBox = () => {
  const { control } = useFormContext<CustomerFormType>();

  return (
    <>
      <Typography sx={{ fontSize: '20px', fontWeight: '700', marginTop: 5 }}>
        담당자 정보
      </Typography>

      <Divider sx={{ color: '#0000001F', marginTop: '16px' }} />

      <RowContainer spacing={10} direction={'row'}>
        <LabelTextField
          stackProps={{
            direction: 'row',
            spacing: 10,
          }}
          textFieldProps={{
            variant: 'outlined',
            size: 'small',
            width: '300',
          }}
          control={control}
          name={'contactName'}
        >
          담당자명
        </LabelTextField>

        <LabelTextField
          stackProps={{
            direction: 'row',
            spacing: 10,
          }}
          textFieldProps={{
            variant: 'outlined',
            size: 'small',
            width: '300',
            placeholder: '숫자만 입력하세요.',
            inputProps: { inputMode: 'numeric' },
          }}
          control={control}
          name={'contactPhone'}
        >
          담당자 전화번호
        </LabelTextField>
      </RowContainer>

      <Divider sx={{ color: '#0000001F', marginTop: '16px' }} />

      <RowContainer spacing={10} direction={'row'}>
        <LabelTextField
          stackProps={{
            direction: 'row',
            spacing: 10,
          }}
          textFieldProps={{
            variant: 'outlined',
            size: 'small',
            width: '300',
            placeholder: '예시) yogiyo@yogiyo.co.kr',
          }}
          control={control}
          name={'contactEmail'}
        >
          담당자 이메일 주소
        </LabelTextField>
      </RowContainer>

      <Divider sx={{ color: '#0000001F', marginTop: '16px' }} />
    </>
  );
};

export default CustomerBox;
