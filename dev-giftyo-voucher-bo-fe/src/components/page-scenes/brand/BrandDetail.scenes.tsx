// @flow
import * as React from 'react';
import { useBrand } from 'src/query/brand/useBrand';

interface Props {
  code: string;
}

/**
 * 브랜드 상세 데이터 레이어 컴포넌트
 * @param {string} code
 * @returns {React.JSX.Element}
 * @since 2023.10.18
 * @author : yhju@coopnc.com
 */
export const BrandDetailScenes = ({ code }: Props) => {
  const { data, isLoading, error } = useBrand(code);
  if (isLoading) {
    return <p> Loading... </p>;
  }
  return (
    <>
      {data && (
        <>
          <p>{data.code}</p>
          <p>{data.name}</p>
          <p>{data.menuCategoryCode}</p>
          <p>{data.imgUrl ?? 'URL 미설정'}</p>
          <p>{data.linkUrl ?? 'URL 미설정'}</p>
        </>
      )}
    </>
  );
};
