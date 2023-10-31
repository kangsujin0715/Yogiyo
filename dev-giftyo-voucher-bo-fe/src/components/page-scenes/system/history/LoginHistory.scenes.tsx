import * as React from 'react';
import { useState } from 'react';
import { initializeHistorySearchFilter } from 'src/recoil/system/history/historyAtom';
import { useLoginHistory } from 'src/query/system/history/useHistory';
import ResultTable from 'src/components/ui/table/ResultTable';
import HistorySearchFilterForm from 'src/components/page-scenes/system/history/shared/HistorySearchFilterForm';
import { History, HistorySearchFilter } from 'src/interface/system/history/History';

const columns = [
  { name: 'no', text: 'No' },
  { name: 'id', text: 'ID' },
  { name: 'name', text: '이름' },
  { name: 'ip', text: 'IP' },
  { name: 'work', text: '수행업무' },
  { name: 'result', text: '결과' },
  { name: 'etc', text: '비고' },
  { name: 'date', text: '접속일시' },
];
/**
 * 로그인 이력 데이터 레이어 페이지
 * @returns {React.JSX.Element}
 */
const LoginHistoryScenes = () => {
  const [searchParams, setSearchParams] = useState<HistorySearchFilter>(
    initializeHistorySearchFilter
  );
  const { data } = useLoginHistory(searchParams);

  return (
    <>
      <HistorySearchFilterForm
        target={'login'}
        onSearch={(filter) => setSearchParams(filter)}
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
export default LoginHistoryScenes;
