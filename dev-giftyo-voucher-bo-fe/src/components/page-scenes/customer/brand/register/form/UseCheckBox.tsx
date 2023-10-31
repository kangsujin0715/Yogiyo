import {
    Divider,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography
} from '@mui/material';
import {
    RowContainer
} from 'src/components/page-scenes/customer/brand/register/BrandRegister.scenes';
import { useFormContext } from 'react-hook-form';
import {
    UseFormType
} from 'src/components/page-scenes/customer/brand/register/brand.type';

/**
 * 브랜드 등록 사용여부 폼 컴포넌트
 * @returns {JSX.Element}
 * @since 2023.10.26
 * @author : hijoeng@coopnc.com
 */

const UseCheckBox = () => {
  const { register } = useFormContext<UseFormType>();

  return (
    <>
      <Typography
        sx={{
          fontSize: '20px',
          fontWeight: '700',
          marginTop: 5,
        }}
      >
        사용여부
      </Typography>

      <Divider sx={{ color: '#0000001F', marginTop: '16px' }} />

      <RowContainer spacing={10} direction={'row'}>
        <Typography
          sx={{
            fontSize: '14px',
            color: '#00000099',
          }}
        >
          사용여부
        </Typography>

        <RadioGroup row>
          <FormControlLabel
            {...register('used')}
            value="use"
            control={
              <Radio
                sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: 22,
                  },
                }}
              />
            }
            label={
              <Typography
                sx={{
                  fontSize: '14px',
                  color: '#000000DE',
                }}
              >
                사용
              </Typography>
            }
          />
          <FormControlLabel
            {...register('used')}
            value="unuse"
            control={
              <Radio
                sx={{
                  '& .MuiSvgIcon-root': {
                    fontSize: 22,
                  },
                }}
              />
            }
            label={<Typography sx={{ fontSize: '14px', color: '#000000DE' }}>사용 안함</Typography>}
          />
        </RadioGroup>
      </RowContainer>

      <Divider sx={{ color: '#0000001F', marginTop: '16px' }} />
    </>
  );
};

export default UseCheckBox;
