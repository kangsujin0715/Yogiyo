import { CouponFilterTypes } from 'src/components/page-scenes/coupon/common/Coupon-constants';
import CouponManageFilterInput from 'src/components/page-scenes/coupon/coupon-manage/Coupon-manage-filter-input';
import { Grid, Container, Button, Stack } from '@mui/material';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 * @author jockbal@coopnc.com
 * @since 2023.10.23
 */
const CouponManageFilter = () => {
  return (
    <>
      <Container>
        <Grid container spacing={1}>
          {CouponFilterTypes.map((filter) => (
            <Grid key={filter.title} item sx={{ width: 240 }}>
              <CouponManageFilterInput
                key={filter.no}
                title={filter.title}
                options={filter.options}
                type={filter.type}
                onChanged={(typeValue: string) => console.log(typeValue)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Stack direction="row" spacing={2}>
          <Button variant="contained">초기화</Button>
          <Button variant="contained">검색</Button>
        </Stack>
      </Container>
    </>
  );
};

export default CouponManageFilter;
