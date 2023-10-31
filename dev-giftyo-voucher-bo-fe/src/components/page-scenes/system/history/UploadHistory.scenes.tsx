import * as React from 'react';
import { useState } from 'react';
import { initializeHistorySearchFilter } from 'src/recoil/system/history/historyAtom';
import { useUploadHistory } from 'src/query/system/history/useHistory';
import MenuSearchFilter from 'src/components/page-scenes/system/history/shared/MenuSearchFilter';
import ResultTable from 'src/components/ui/table/ResultTable';
import HistorySearchFilterForm from 'src/components/page-scenes/system/history/shared/HistorySearchFilterForm';
import { History, HistorySearchFilter } from 'src/interface/system/history/History';

const columns = [
  { name: 'no', text: 'No' },
  { name: 'id', text: 'ID' },
  { name: 'name', text: '이름' },
  { name: 'ip', text: 'IP' },
  { name: 'menu', text: '메뉴' },
  { name: 'work', text: '수행업무' },
  { name: 'date', text: '처리일시' },
];
/**
 * 업로드 이력 데이터 레이어 페이지
 * @returns {React.JSX.Element}
 */
const UploadHistoryScenes = () => {
  const [searchParams, setSearchParams] = useState<HistorySearchFilter>(
    initializeHistorySearchFilter
  );
  const { data } = useUploadHistory(searchParams);

  return (
    <>
      <HistorySearchFilterForm
        target={'upload'}
        menuFilter={<MenuSearchFilter target="upload" />}
        onSearch={(filter) => {
          setSearchParams(filter);
        }}
      ></HistorySearchFilterForm>
      <ResultTable<History>
        columns={columns}
        data={data?.list}
        pagination={data?.pagination}
        onPageChange={({ page, size }) => setSearchParams({ ...searchParams, page, size })}
      />
    </>
  );
};
export default UploadHistoryScenes;
