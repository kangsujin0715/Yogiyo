import { Button, Divider, SelectChangeEvent, Stack, Typography } from '@mui/material';
import LabelTextField from 'src/components/ui/textfield/LabelTextField';
import { RowContainer } from 'src/components/page-scenes/customer/brand/register/BrandRegister.scenes';
import { useFormContext } from 'react-hook-form';
import { BasicFormType } from 'src/components/page-scenes/customer/brand/register/brand.type';
import GenericLabelSelect from 'src/components/ui/select/GenericLabelSelect';

const selectItems = [
  {
    name: '전체',
    value: 'all',
  },
  {
    name: '쿠프마케팅',
    value: 'coop',
  },
  {
    name: '페이즈',
    value: 'pays',
  },
  {
    name: '북앤라이프',
    value: 'book',
  },
];

/**
 * 브랜드 등록 기본정보 폼 컴포넌트
 * @returns {JSX.Element}
 * @since 2023.10.26
 * @author : hijoeng@coopnc.com
 */

const BasicBox = () => {
  const { control } = useFormContext<BasicFormType>();

  return (
    <>
      <Typography sx={{ fontSize: '20px', fontWeight: '700' }}>기본정보</Typography>

      <Divider sx={{ color: '#0000001F', marginTop: '16px' }} />

      <RowContainer spacing={10} direction={'row'}>
        <GenericLabelSelect
          defaultValue={'all'}
          items={selectItems}
          getItemLabel={(item) => item.name}
          getItemValue={(item) => item.value}
          name={'corporationName'}
          control={control}
          rules={{
            onChange: (e: SelectChangeEvent) => console.log('select change = ', e),
          }}
          selectProps={{
            size: 'small',
            sx: { width: '300px' },
          }}
          stackProps={{
            direction: 'row',
            alignItems: 'center',
            spacing: 10,
          }}
        >
          사업자명
        </GenericLabelSelect>

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
          name={'brandName'}
        >
          브랜드명
        </LabelTextField>
      </RowContainer>

      <Divider sx={{ color: '#0000001F', marginTop: '16px' }} />

      <Stack spacing={1} marginTop={'16px'}>
        <RowContainer spacing={1} direction={'row'}>
          <LabelTextField
            stackProps={{
              direction: 'row',
              spacing: 10,
            }}
            textFieldProps={{
              variant: 'outlined',
              size: 'small',
              width: '176',
              disabled: true,
              placeholder: '06655',
            }}
            control={control}
            name={'zipCode'}
          >
            주소
          </LabelTextField>
          <Button variant="outlined" color="inherit" size="small">
            주소검색
          </Button>
        </RowContainer>

        <RowContainer spacing={1} direction={'row'}>
          <LabelTextField
            stackProps={{
              direction: 'row',
              spacing: 10,
            }}
            textFieldProps={{
              variant: 'outlined',
              size: 'small',
              width: '300',
              disabled: true,
              placeholder: '도로명주소 또는 지번주소',
            }}
            control={control}
            name={'address'}
          />

          <LabelTextField
            textFieldProps={{
              variant: 'outlined',
              size: 'small',
              width: '300',
              placeholder: '상세주소',
            }}
            control={control}
            name={'detailAddress'}
          />
        </RowContainer>
      </Stack>

      <Divider sx={{ color: '#0000001F', marginTop: '16px' }} />
    </>
  );
};

export default BasicBox;
