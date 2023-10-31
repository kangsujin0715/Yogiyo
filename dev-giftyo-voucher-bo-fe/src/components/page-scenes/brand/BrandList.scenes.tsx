// @flow
import * as React from 'react';
import { useBrandList } from 'src/query/brand/useBrand';
import { BrandSearchPayload } from 'src/interface/brand/BrandVO';
import Link from 'next/link';

/**
 * 브랜드 목록 데이터 레이어 컴포넌트
 * @param {BrandSearchPayload} props
 * @returns {React.JSX.Element}
 * @since 2023.10.18
 * @author : yhju@coopnc.com
 */
export const BrandListScenes = (props: BrandSearchPayload) => {
  const { data, isLoading, error } = useBrandList(props);
  if (error) {
    return <h1>Error...</h1>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>코드</th>
          <th>이름</th>
          <th>카테고리 코드</th>
          <th>이미지 경로</th>
          <th>링크</th>
        </tr>
      </thead>
      <tbody>
        {isLoading && (
          <tr>
            <td colSpan={5}>loading...</td>
          </tr>
        )}
        {data?.map((brand) => (
          <tr key={brand.code}>
            <td>
              <Link href={`/brand/${brand.code}`}>{brand.code}</Link>
            </td>
            <td>{brand.name}</td>
            <td>{brand.menuCategoryCode}</td>
            <td>{brand.imgUrl}</td>
            <td>{brand.linkUrl}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
