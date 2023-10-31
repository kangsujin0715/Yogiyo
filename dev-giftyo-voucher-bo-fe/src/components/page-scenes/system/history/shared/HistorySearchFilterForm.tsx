import * as React from 'react';
import { ReactNode } from 'react';
import { MenuItem } from '@mui/material';
import { useRecoilState, useResetRecoilState } from 'recoil';
import {
  downloadHistoryFilterAtom,
  loginHistoryFilterAtom,
  modifyHistoryFilterAtom,
  readHistoryFilterAtom,
  uploadHistoryFilterAtom,
} from 'src/recoil/system/history/historyAtom';
import { HistorySearchFilter } from 'src/interface/system/history/History';
import SearchFilterBox from 'src/components/ui/filter/SearchFilterBox';
import SearchFilterInput from 'src/components/ui/filter/SearchFilterInput';
import SearchFilterSelect from 'src/components/ui/filter/SearchFilterSelect';

interface Props {
  modType?: boolean;
  menuFilter?: ReactNode;
  onSearch: (filter: HistorySearchFilter) => void;
  target: 'login' | 'modify' | 'read' | 'upload' | 'download';
}

export const historyAtomMapper = {
  login: loginHistoryFilterAtom,
  modify: modifyHistoryFilterAtom,
  read: readHistoryFilterAtom,
  upload: uploadHistoryFilterAtom,
  download: downloadHistoryFilterAtom,
};

/**
 * 이력 검색 필터 양식
 * @param {boolean | undefined} modType
 * @param {(filter: HistorySearchFilter) => void} onSearch
 * @param {"login" | "modify" | "read" | "upload" | "download"} target
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | undefined | null} menuFilter
 * @returns {React.JSX.Element}
 */
const HistorySearchFilterForm = ({ modType, onSearch, target, menuFilter }: Props) => {
  const reset = useResetRecoilState(historyAtomMapper[target]);
  const [filter, setFilter] = useRecoilState(historyAtomMapper[target]);
  const handleChange = (name: string, value: string) => {
    setFilter({ ...filter, [name]: value });
  };

  return (
    <>
      <SearchFilterBox onSearch={() => onSearch(filter)} onReset={reset}>
        <SearchFilterInput
          label="ID"
          name="id"
          value={filter.id}
          onChange={({ target: { name, value } }) => handleChange(name, value)}
        />
        <SearchFilterInput
          label="이름"
          name="name"
          value={filter.name}
          onChange={({ target: { name, value } }) => handleChange(name, value)}
        />
        <SearchFilterInput
          label="IP"
          name="ip"
          value={filter.ip}
          onChange={({ target: { name, value } }) => handleChange(name, value)}
        />
        {modType && (
          <SearchFilterSelect
            label="유형"
            name="modType"
            value={filter.modType}
            onChange={({ target: { name, value } }) => handleChange(name, value as string)}
            startWith={<MenuItem value={'A'}>전체</MenuItem>}
          >
            <MenuItem value={'C'}>등록</MenuItem>
            <MenuItem value={'U'}>수정</MenuItem>
            <MenuItem value={'D'}>삭제</MenuItem>
          </SearchFilterSelect>
        )}
        {!!menuFilter && menuFilter}
      </SearchFilterBox>
    </>
  );
};
export default HistorySearchFilterForm;
