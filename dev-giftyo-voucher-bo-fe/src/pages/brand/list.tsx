// @flow
import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { BrandListScenes } from 'src/components/page-scenes/brand/BrandList.scenes';

interface Props {}

/**
 * 브랜드 목록 페이지 컴포넌트
 * @param {Props} props
 * @returns {React.JSX.Element}
 * @since 2023.10.18
 * @author : yhju@coopnc.com
 */
const BrandList = (props: Props) => {
  const params = useSearchParams();
  const payload = {
    code: params.get('code') ?? '',
    name: params.get('name') ?? '',
    menuCategoryCode: params.get('menuCategoryCode') ?? '',
  };
  return <BrandListScenes {...payload} />;
};

export default BrandList;
