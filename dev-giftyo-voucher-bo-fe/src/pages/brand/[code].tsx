// @flow
import * as React from 'react';
import { BrandDetailScenes } from 'src/components/page-scenes/brand/BrandDetail.scenes';

interface Props {
  code: string;
}

/**
 * 브랜드 상세 페이지 컴포넌트
 * @param {string} code
 * @returns {React.JSX.Element}
 * @since 2023.10.18
 * @author : yhju@coopnc.com
 */
const BrandDetail = ({ code }: Props) => {
  return <BrandDetailScenes code={code} />;
};

export default BrandDetail;
