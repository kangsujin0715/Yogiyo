import * as React from 'react';
import { Grid, TextField, TextFieldProps } from '@mui/material';
import { FilterStyledLabel } from 'src/components/ui/filter/shared/FilterStyledComponents';

/**
 * 필터 인풋 컴포넌트
 * @param {TextFieldProps} props
 * @returns {React.JSX.Element}
 * @since 2023.10.26
 * @author yhju@coopnc.com
 */
const SearchFilterInput = (props: TextFieldProps) => {
  const { id, name, label } = props;
  return (
    <Grid item xs={3}>
      <FilterStyledLabel htmlFor={id ?? name}>{label}</FilterStyledLabel>
      <TextField {...props} fullWidth variant="outlined" size="small" id={id ?? name} label={''} />
    </Grid>
  );
};

export default SearchFilterInput;
