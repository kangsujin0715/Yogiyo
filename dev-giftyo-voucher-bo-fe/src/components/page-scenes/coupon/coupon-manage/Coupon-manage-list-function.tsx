import {
  Stack,
  Button,
  Container,
  TextField,
  Autocomplete,
  Typography,
  Divider,
} from '@mui/material';

const options = ['10개', '20개'];

const centerText = {
  display: 'flex',
  alignItems: 'center', // 세로 중앙 정렬
};
/**
 *
 * @returns {JSX.Element}
 * @constructor
 * @author jockbal@coopnc.com
 * @since 2023.10.23
 */
const CouponManageListFunction = () => {
  return (
    <>
      <Container sx={{ height: 40, paddingTop: 4 }}>
        <Stack direction="row" spacing={2} justifyContent="end">
          <Button variant="contained">일괄 유효기간 연장</Button>
          <Button variant="contained">일괄 발행취소</Button>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}>
            <Button variant="contained">엑셀 다운로드</Button>
            <Autocomplete
              options={options}
              id="CouponManageFilterInput"
              renderInput={(params) => (
                <TextField {...params} label={'10개'} variant="standard" />
              )}
            />
          </Stack>
        </Stack>

        <Container>
          <div style={centerText}>
            <Typography variant="body1">
              검색결과 <span style={{ color: 'blue' }}>0</span>건
            </Typography>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default CouponManageListFunction;
