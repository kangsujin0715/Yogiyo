import {
  Button,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import styled, { css } from 'styled-components';

const FormItem = styled(Grid).attrs({ item: true })({
  borderBottom: '1px solid rgba(5,5,5,.06)',
  display: 'flex',
  alignItems: 'center',
});

const FormTitle = styled(Grid)<{ required?: boolean }>`
  padding: 16px 24px;
  height: 100%;
  flex-basis: 150px;
  background-color: rgba(0, 0, 0, 0.02);
  border-inline-end: 1px solid rgba(5, 5, 5, 0.06);
  ${(props) =>
    props.required &&
    css`
      &::after {
        content: '*';
        color: red;
        margin-left: 3px;
      }
    `}
`;

const FormContent = styled(Grid)({
  padding: '0 10px',
  flexBasis: 'calc(100% - 150px)',
});

const ButtonContainer = styled(Grid).attrs({ container: true })({
  textAlign: 'right',
  paddingTop: '5px',
  ' button': {
    marginLeft: '5px',
  },
});

/**
 * 사업자 등록 컴포넌트
 * @returns {JSX.Element}
 * @since 2023.10.24
 * @author : sung7760@coopnc.com
 */
const CustomerAddScenes = () => {
  return (
    <div>
      <Paper elevation={3} sx={{ padding: '10px' }}>
        <Stack spacing={2}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5">기본 정보</Typography>
            </Grid>

            <FormItem xs={6}>
              <FormTitle required>사업자명</FormTitle>
              <FormContent>
                <TextField size="small" fullWidth label={'사업자명'} />
              </FormContent>
            </FormItem>

            <FormItem xs={6}>
              <FormTitle required>사업자번호</FormTitle>
              <FormContent>
                <TextField size="small" fullWidth label={'사업자번호'} />
              </FormContent>
            </FormItem>

            <FormItem xs={12}>
              <FormTitle>사업자등록증</FormTitle>
              <FormContent>
                <Button variant="outlined">파일 선택</Button>
                <span> jpeg, pdf (제한용량 5MB 미만)</span>
              </FormContent>
            </FormItem>

            <FormItem xs={6}>
              <FormTitle>업태</FormTitle>
              <FormContent>
                <TextField size="small" fullWidth label={'업태'} />
              </FormContent>
            </FormItem>
            <FormItem xs={6}>
              <FormTitle>종목</FormTitle>
              <FormContent>
                <TextField size="small" fullWidth label={'종목'} />
              </FormContent>
            </FormItem>

            <FormItem xs={6}>
              <FormTitle>대표자명</FormTitle>
              <FormContent>
                <TextField size="small" fullWidth label={'대표자명'} />
              </FormContent>
            </FormItem>
            <FormItem xs={6}>
              <FormTitle>대표 전화번호</FormTitle>
              <FormContent>
                <TextField size="small" fullWidth label={'대표 전화번호'} />
              </FormContent>
            </FormItem>

            <FormItem xs={12}>
              <FormTitle>주소</FormTitle>
              <FormContent>
                <div
                  style={{
                    display: 'flex',
                  }}
                >
                  <TextField size="small" label={'우편번호'} disabled />
                  <Button variant="outlined">주소 검색</Button>
                </div>
                <div>
                  <TextField
                    size="small"
                    sx={{ width: '48%' }}
                    label={'도로명주소 또는 지번주소'}
                    disabled
                  />
                  <TextField
                    size="small"
                    sx={{ marginLeft: '10px', width: '48%' }}
                    label={'상세주소'}
                  />
                </div>
              </FormContent>
            </FormItem>

            <FormItem xs={6}>
              <FormTitle>사용자 연동여부</FormTitle>
              <FormContent>
                <RadioGroup row>
                  <FormControlLabel value="Y" control={<Radio />} label="연동" />
                  <FormControlLabel value="N" control={<Radio />} label="연동 안함" />
                </RadioGroup>
              </FormContent>
            </FormItem>
            <FormItem xs={6}>
              <FormTitle>연동코드</FormTitle>
              <FormContent>
                <TextField size="small" fullWidth label={'연동코드'} />
              </FormContent>
            </FormItem>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5">담당자 정보</Typography>
            </Grid>

            <FormItem xs={6}>
              <FormTitle>담당자명</FormTitle>
              <FormContent>
                <TextField size="small" fullWidth label={'담당자명'} />
              </FormContent>
            </FormItem>
            <FormItem xs={6}>
              <FormTitle>담당자 전화번호</FormTitle>
              <FormContent>
                <TextField size="small" fullWidth label={'담당자 전화번호'} />
              </FormContent>
            </FormItem>

            <FormItem xs={12}>
              <FormTitle>담당자 이메일 주소</FormTitle>
              <FormContent>
                <TextField size="small" fullWidth label={'담당자 이메일 주소'} />
              </FormContent>
            </FormItem>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5">사용여부</Typography>
            </Grid>

            <FormItem xs={12}>
              <FormTitle>사용여부</FormTitle>
              <FormContent>
                <RadioGroup row>
                  <FormControlLabel value="Y" control={<Radio />} label="사용" />
                  <FormControlLabel value="N" control={<Radio />} label="사용 안함" />
                </RadioGroup>
              </FormContent>
            </FormItem>
          </Grid>
        </Stack>
      </Paper>

      <ButtonContainer>
        <Grid item xs={12}>
          <Button variant="outlined">취소</Button>
          <Button variant="contained">저장</Button>
        </Grid>
      </ButtonContainer>
    </div>
  );
};

export default CustomerAddScenes;
