import * as React from 'react';
import { ReactNode } from 'react';
import { Grid, Select, SelectProps } from '@mui/material';
import { FilterStyledLabel } from 'src/components/ui/filter/shared/FilterStyledComponents';

interface Props extends SelectProps {
  name: string;
  startWith?: ReactNode;
  useSelect?: boolean;
}

/**
 * 필터 셀렉트 컴포넌트
 * @param {Props} props
 * @returns {React.JSX.Element}
 * @since 2023.10.26
 * @author yhju@coopnc.com
 */
const SearchFilterSelect = (props: Props) => {
  const { id, name, children, label, startWith } = props;

  const targetId = id ?? name;

  return (
    <Grid item xs={3}>
      <FilterStyledLabel id={targetId}>{label}</FilterStyledLabel>
      <Select
        {...props}
        size="small"
        fullWidth
        label=""
        labelId={targetId}
        inputProps={{ 'data-testid': targetId }}
      >
        {!!startWith && startWith}
        {children}
      </Select>
    </Grid>
  );
};
export default SearchFilterSelect;
