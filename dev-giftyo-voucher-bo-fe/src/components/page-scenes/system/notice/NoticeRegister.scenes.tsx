import FormBox from 'src/components/ui/form/FormBox';
import FormArticle from 'src/components/ui/form/FormArticle';
import { FormRow } from 'src/components/ui/form/shared/FormStyled';
import FormCell from 'src/components/ui/form/shared/FormCell';
import { Button, TextField, Typography } from '@mui/material';
import FormRadioElement from 'src/components/ui/form/elements/FormRadioElement';
import React from 'react';

/**
 * 공지사항 등록 컴포넌트
 * @returns {React.JSX.Element}
 */
const NoticeRegisterScenes = (): React.JSX.Element => {
  return (
    <div>
      <FormBox onSubmit={() => {}}>
        <FormArticle title={'기본정보'}>
          <FormRow>
            <FormCell label="제목">
              <TextField id="test" />
            </FormCell>

            <FormCell label="팝업기간">
              <TextField id="test" />
            </FormCell>
          </FormRow>

          <FormRow>
            <FormCell label="팝업닫기 설정">
              <FormRadioElement
                id="useYn"
                options={[
                  { name: '오늘 그만 보기', value: 'Y' },
                  { name: '다시 열지 않음', value: 'N' },
                ]}
              />
            </FormCell>

            <FormCell label="파일첨부">
              <Button color="info">파일선택</Button>
              <Typography>제한용량 1MB</Typography>
            </FormCell>
          </FormRow>

          <FormRow>
            <FormCell label="내용">
              <Typography>에디터 영역</Typography>
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

export default NoticeRegisterScenes;
