import { useRouter } from 'next/router';
import SearchResultBox from 'src/components/ui/table/common/SearchResultBox';
import { CommonTable } from 'src/components/ui/table/common/CommonTable';
import { GroupButton } from 'src/components/ui/button/MultipleButtonGroup';
import { Add, FileDownload } from '@mui/icons-material';
import { TableColumnType } from 'src/components/ui/table/common/stuff/CommonTableHeader';
import { ContentType } from 'src/components/ui/table/common/stuff/CommonTableBody';
import { Typography } from '@mui/material';
import { FormValue } from 'src/components/page-scenes/customer/brand/list/form/SearchForm';
import { useCustomerBrandListQuery } from 'src/query/customer/useCustomerBrandQuery';
import { CustomerBrandVO } from 'src/interface/customer/CustomerBrandVO';
import { toQueryParams } from 'src/common/utils/commonUtils';

const columns: TableColumnType[] = [
  {
    id: 'no',
    label: 'No',
    hasFilter: true,
  },
  {
    id: 'franchiseId',
    label: '프랜차이즈 ID',
  },
  {
    id: 'brandCode',
    label: '브랜드 코드',
  },
  {
    id: 'brandName',
    label: '브랜드명',
  },
  {
    id: 'corporationName',
    label: '사업자명',
  },
  {
    id: 'registerDate',
    label: '등록일',
    hasFilter: true,
  },
];

interface BrandListProps {
  searchValue: FormValue;
}

/**
 * 브랜드 목록 테이블 컴포넌트
 * @returns {JSX.Element}
 * @since 2023.10.24
 * @author : hijoeng@coopnc.com
 */
const BrandListTable = (props: BrandListProps) => {
  const query = useCustomerBrandListQuery({
    params: {},
    options: {
      onSuccess: (data) => {
        console.log('useCustomerBrandList success = ', data);
      },
      onError: (e) => {
        console.log('useCustomerBrandList error = ', e);
      },
    },
  });
  const router = useRouter();
  const filterRows =
    query.data?.filter((data) => {
      if (Object.values(props.searchValue).every((v) => !v)) return query.data;

      return (
        data.franchiseId === props.searchValue.franchiseId ||
        data.brandCode === props.searchValue.brandCode ||
        data.brandName === props.searchValue.brandName ||
        data.corporationName === props.searchValue.corporationName
      );
    }) ?? [];

  const renderCustomCell = (cell: keyof CustomerBrandVO, contents: ContentType) => {
    if (cell === 'franchiseId') {
      return (
        <Typography
          fontSize={'14px'}
          sx={{ color: '#2196F3' }}
          onClick={() => alert('프랜차이즈 클릭')}
        >
          {contents}
        </Typography>
      );
    }

    return <>{contents}</>;
  };

  return (
    <>
      <SearchResultBox count={filterRows.length}>
        <GroupButton size={'large'} variant={'outlined'} startIcon={<FileDownload />}>
          엑셀 다운로드
        </GroupButton>
        <GroupButton
          type={'submit'}
          size={'large'}
          variant={'contained'}
          startIcon={<Add />}
          onClick={() => router.push('/voucher/customer/brand/register')}
        >
          등록
        </GroupButton>
      </SearchResultBox>

      <CommonTable
        data={filterRows}
        columns={columns}
        onRowClick={(item) => router.push(`/voucher/customer/brand/update?${toQueryParams(item)}`)}
        onRowSelectChanged={(items) => console.log(JSON.stringify(items))}
        renderCustomCell={renderCustomCell}
      />
    </>
  );
};

export default BrandListTable;
