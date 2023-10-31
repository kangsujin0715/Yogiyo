import * as React from 'react';
import { useRecoilState } from 'recoil';
import { MenuItem, SelectChangeEvent } from '@mui/material';
import { useQuery } from 'react-query';
import { HistoryMenuFilterService } from 'src/services/system/history/HistoryService';
import { historyAtomMapper } from 'src/components/page-scenes/system/history/shared/HistorySearchFilterForm';
import SearchFilterSelect from 'src/components/ui/filter/SearchFilterSelect';

interface Props {
  target: 'read' | 'upload' | 'download';
}

/**
 * 메뉴 뎁스 검색 필터
 * @param {"read" | "upload" | "download"} target
 * @returns {React.JSX.Element}
 */
const MenuSearchFilter = ({ target }: Props) => {
  const [filter, setFilter] = useRecoilState(historyAtomMapper[target]);

  const firstMenu = useQuery([`${target}-first-menu`], () =>
    HistoryMenuFilterService.getMenuList({ depth: 0 })
  );

  const secondMenu = useQuery([`${target}-second-menu`, filter.menu.first], () =>
    HistoryMenuFilterService.getMenuList({
      depth: 1,
      code: filter.menu.first,
    })
  );

  const thirdMenu = useQuery([`${target}-third-menu`, filter.menu.second], () =>
    HistoryMenuFilterService.getMenuList({
      depth: 2,
      code: filter.menu.second,
    })
  );

  const handleChangeFirst = ({ target: { value } }: SelectChangeEvent<unknown>) => {
    setFilter({
      ...filter,
      menu: { ...filter.menu, first: value as string, second: 'A', third: 'A' },
    });
  };

  const handleChangeSecond = ({ target: { value } }: SelectChangeEvent<unknown>) => {
    setFilter({
      ...filter,
      menu: { ...filter.menu, second: value as string, third: 'A' },
    });
  };

  const handleChangeThird = ({ target: { value } }: SelectChangeEvent<unknown>) => {
    setFilter({
      ...filter,
      menu: { ...filter.menu, third: value as string },
    });
  };

  return (
    <>
      <SearchFilterSelect
        name="first"
        label="1Depth"
        value={filter.menu.first}
        onChange={handleChangeFirst}
        startWith={<MenuItem value={'A'}>전체</MenuItem>}
      >
        {firstMenu?.data?.map(({ name, code }) => (
          <MenuItem key={code} value={code}>
            {name}
          </MenuItem>
        ))}
      </SearchFilterSelect>

      <SearchFilterSelect
        label="2Depth"
        name="second"
        value={filter.menu.second}
        onChange={handleChangeSecond}
        startWith={<MenuItem value={'A'}>전체</MenuItem>}
      >
        {secondMenu?.data?.map(({ name, code }) => (
          <MenuItem key={code} value={code}>
            {name}
          </MenuItem>
        ))}
      </SearchFilterSelect>

      <SearchFilterSelect
        label="3Depth"
        name="third"
        value={filter.menu.third}
        onChange={handleChangeThird}
        startWith={<MenuItem value={'A'}>전체</MenuItem>}
      >
        {thirdMenu?.data?.map(({ name, code }) => (
          <MenuItem key={code} value={code}>
            {name}
          </MenuItem>
        ))}
      </SearchFilterSelect>
    </>
  );
};
export default MenuSearchFilter;
