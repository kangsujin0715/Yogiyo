import * as React from 'react';
import { useState } from 'react';
import { initializeHistorySearchFilter } from 'src/recoil/system/history/historyAtom';
import { useDownloadHistory } from 'src/query/system/history/useHistory';
import MenuSearchFilter from 'src/components/page-scenes/system/history/shared/MenuSearchFilter';
import ResultTable from 'src/components/ui/table/ResultTable';
import { History, HistorySearchFilter } from 'src/interface/system/history/History';
import HistorySearchFilterForm from 'src/components/page-scenes/system/history/shared/HistorySearchFilterForm';

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
 * 엑셀 다운로드 이력 데이터 레이어 페이지
 * @returns {React.JSX.Element}
 */
const DownloadHistoryScenes = () => {
  const [searchParams, setSearchParams] = useState<HistorySearchFilter>(
    initializeHistorySearchFilter
  );
  const { data } = useDownloadHistory(searchParams);

  return (
    <>
      <HistorySearchFilterForm
        target={'download'}
        menuFilter={<MenuSearchFilter target="download" />}
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
export default DownloadHistoryScenes;
