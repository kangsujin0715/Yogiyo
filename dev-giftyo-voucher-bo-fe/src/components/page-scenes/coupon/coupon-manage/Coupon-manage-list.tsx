import { CouponManageList_mock } from 'src/components/page-scenes/coupon/common/Coupon-constants';
import CouponManageListItem from 'src/components/page-scenes/coupon/coupon-manage/Coupon-manage-list-item';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  Autocomplete,
  TextField,
  Typography,
  ButtonGroup,
  IconButton,
} from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

/**
 *
 * @type {{alignItems: string, flex: string, flexDirection: string, display: string, gap: string}}
 */
const tableStyle = {
  display: 'inline-flex',
  flex: '1',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0px',
};

/**
 *
 * @returns {JSX.Element}
 * @constructor
 * @author jockbal@coopnc.com
 * @since 2023.10.23
 */
const CouponManageList = () => {
  return (
    <>
      <Container sx={{ paddingTop: 6 }}>
        <TableContainer sx={tableStyle} component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">No</TableCell>
                <TableCell align="right">발행 요청번호</TableCell>
                <TableCell align="right">상품권번호</TableCell>
                <TableCell align="right">수신자번호</TableCell>
                <TableCell align="right">상품명</TableCell>
                <TableCell align="right">상품권상태</TableCell>
                <TableCell align="right">사용여부</TableCell>
                <TableCell align="right">판매채널</TableCell>
                <TableCell align="right">신청서구분</TableCell>
                <TableCell align="right">신청서명</TableCell>
                <TableCell align="right">상품종류</TableCell>
                <TableCell align="right">발행일시</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {CouponManageList_mock.map((row) => (
                <TableRow
                  key={row.orderNo}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <CouponManageListItem data={row} />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Container sx={{ height: 40, paddingTop: 1 }}>
          <Stack
            direction="row"
            spacing={4}
            justifyContent="end"
            alignItems="stretch">
            <Autocomplete
              options={['10', '20', '30']}
              getOptionLabel={(option) => option}
              id="disable-close-on-select"
              disableCloseOnSelect
              renderInput={(params) => (
                <TextField {...params} variant="standard" />
              )}
            />

            <Typography
              variant="body1"
              gutterBottom
              style={{ verticalAlign: 'middle' }}>
              1-5 of 13
            </Typography>

            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group">
              <IconButton aria-label="before">
                <NavigateBeforeIcon />
              </IconButton>
              <IconButton aria-label="next">
                <NavigateNextIcon />
              </IconButton>
            </ButtonGroup>
          </Stack>
        </Container>
      </Container>
    </>
  );
};

export default CouponManageList;
