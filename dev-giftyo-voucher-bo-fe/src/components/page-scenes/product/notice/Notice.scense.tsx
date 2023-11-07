import * as React from 'react';
import { useState } from 'react';
import DivisionBox from 'src/components/ui/box/DivisionBox';
import { Box } from '@mui/material';
import BrandList from 'src/components/page-scenes/product/notice/BrandList';
import CategoryList from 'src/components/page-scenes/product/notice/CategoryList';
import NoticeList from 'src/components/page-scenes/product/notice/NoticeList';
import { QueryErrorBoundary } from 'src/components/common/error/boundary/QueryErrorBoundary';

const NoticeScenes = () => {
  const [brandCode, setBrandCode] = useState('');
  const [noticeCategorySeq, setNoticeCategorySeq] = useState<number>();
  return (
    <Box display="flex">
      <DivisionBox title="브랜드" flex={3}>
        <QueryErrorBoundary>
          <BrandList
            onClick={(code) => {
              setBrandCode(code);
            }}
          />
        </QueryErrorBoundary>
      </DivisionBox>
      <DivisionBox title="고시정보 분류" flex={4}>
        <QueryErrorBoundary>
          <CategoryList
            onClick={(seq) => {
              setNoticeCategorySeq(seq);
            }}
            brandCode={brandCode}
          />
        </QueryErrorBoundary>
      </DivisionBox>
      <DivisionBox title="고시정보" flex={5}>
        <QueryErrorBoundary>
          <NoticeList noticeCategorySeq={noticeCategorySeq} />
        </QueryErrorBoundary>
      </DivisionBox>
    </Box>
  );
};
export default NoticeScenes;
