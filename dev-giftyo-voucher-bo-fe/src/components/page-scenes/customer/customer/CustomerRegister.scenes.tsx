import FormBox from 'src/components/ui/form/FormBox';
import FormArticle from 'src/components/ui/form/FormArticle';
import { FormRow } from 'src/components/ui/form/shared/FormStyled';
import FormCell from 'src/components/ui/form/shared/FormCell';
import { Button, MenuItem, Select, TextField, Typography } from '@mui/material';
import FormRadioElement from 'src/components/ui/form/elements/FormRadioElement';
import AddressInput from 'src/components/common/AddressInput';
import React from 'react';

/**
 * 사업자 등록 컴포넌트
 * @returns {React.JSX.Element}
 * @since 2023.10.24
 * @author : sung7760@coopnc.com
 */
const CustomerRegisterScenes = (): React.JSX.Element => {
  return (
    <div>
      <FormBox onSubmit={() => {}}>
        <FormArticle title={'기본정보'}>
          <FormRow>
            <FormCell label="사업자명">
              <Select label="사업자명">
                <MenuItem value={'A'}>사업자A</MenuItem>
                <MenuItem value={'B'}>사업자B</MenuItem>
                <MenuItem value={'C'}>사업자C</MenuItem>
              </Select>
            </FormCell>
            <FormCell label="사업자번호">
              <Select label="사업자번호">
                <MenuItem value={'A'}>100-100-10000</MenuItem>
                <MenuItem value={'B'}>200-200-20000</MenuItem>
                <MenuItem value={'C'}>300-300-30000</MenuItem>
              </Select>
            </FormCell>
          </FormRow>

          <FormRow>
            <FormCell label="사업자등록증">
              <Button color="info">파일선택</Button>
              <Typography> jpeg, pdf(제한용량 5MB 미만)</Typography>
            </FormCell>
          </FormRow>

          <FormRow>
            <FormCell label="업태">
              <TextField id="test" />
            </FormCell>

            <FormCell label="종목">
              <TextField id="test" />
            </FormCell>
          </FormRow>

          <FormRow>
            <FormCell label="대표자명">
              <TextField id="test" />
            </FormCell>

            <FormCell label="대표 전화번호">
              <TextField id="test" />
            </FormCell>
          </FormRow>

          <FormRow>
            <FormCell label="주소">
              <AddressInput onChange={() => {}} address={''} zipCode={''} />
            </FormCell>
          </FormRow>

          <FormRow>
            <FormCell label="사업자 연동여부">
              <FormRadioElement
                id="useYn"
                options={[
                  { name: '연동', value: 'Y' },
                  { name: '연동안함', value: 'N' },
                ]}
              />
            </FormCell>
            <FormCell label="연동코드">
              <TextField id="test" disabled />
            </FormCell>
          </FormRow>
        </FormArticle>

        <FormArticle title={'담당자 정보'}>
          <FormRow>
            <FormCell label="담당자명">
              <TextField id="test" />
            </FormCell>

            <FormCell label="담당자 전화번호">
              <TextField id="test" />
            </FormCell>
          </FormRow>

          <FormRow>
            <FormCell label="담당자 이메일 주소">
              <TextField id="test" />
            </FormCell>
          </FormRow>
        </FormArticle>

        <FormArticle title={'사용여부'}>
          <FormRow>
            <FormCell label="사용여부">
              <FormRadioElement
                id="useYn"
                options={[
                  { name: '사용', value: 'Y' },
                  { name: '미사용', value: 'N' },
                ]}
              />
            </FormCell>
          </FormRow>
        </FormArticle>
      </FormBox>
    </div>
  );
};

export default CustomerRegisterScenes;
