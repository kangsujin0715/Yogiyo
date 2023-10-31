import * as React from 'react';
import { useState } from 'react';
import { initializeHistorySearchFilter } from 'src/recoil/system/history/historyAtom';
import ResultTable from 'src/components/ui/table/ResultTable';
import MenuSearchFilter from 'src/components/page-scenes/system/history/shared/MenuSearchFilter';
import { useInformationReadHistory } from 'src/query/system/history/useHistory';
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
 * 개인정보 열람 이력 데이터 레이어 페이지
 * @returns {React.JSX.Element}
 */
const InformationReadHistoryScenes = () => {
  const [searchParams, setSearchParams] = useState<HistorySearchFilter>(
    initializeHistorySearchFilter
  );
  const { data } = useInformationReadHistory(searchParams);

  return (
    <>
      <HistorySearchFilterForm
        target={'read'}
        menuFilter={<MenuSearchFilter target="read" />}
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
export default InformationReadHistoryScenes;
