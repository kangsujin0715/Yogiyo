import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { CouponFilterType } from 'src/components/page-scenes/coupon/common/Coupon-constants';
import Stack from '@mui/material/Stack';
import * as React from 'react';

export interface CouponManageFilterInputProps {
  title?: string;
  options?: any;
  type?: CouponFilterType;
  onChanged: (typeValue: string) => void;
}

interface FilterOptionType {
  title: string;
  typeValue: number;
}

/**
 *
 * @returns {JSX.Element}
 * @constructor
 * @author jockbal@coopnc.com
 * @since 2023.10.23
 */
const CouponManageFilterInput = (props: CouponManageFilterInputProps) => {
  const defaultProps = {
    options: props.options,
    getOptionLabel: (option: FilterOptionType) => option.title,
  };

  return (
    <div>
      <Stack spacing={2}>
        {props.title} {'  '}
        {props.type == CouponFilterType.SELECT && (
          <Autocomplete
            sx={{ width: 170, height: 80 }}
            {...defaultProps}
            id="CouponManageFilterInput"
            getOptionDisabled={(option) => props.type == CouponFilterType.INPUT}
            onChange={(event: any, newValue: any) => {
              props.onChanged(String(newValue.typeValue));
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={props.options[0].title}
                variant="standard"
              />
            )}
          />
        )}
        {props.type == CouponFilterType.INPUT && (
          <TextField
            sx={{ width: 170, height: 80 }}
            id="outlined-basic"
            label="Standard"
            variant="standard"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              props.onChanged(event.target.value);
            }}
          />
        )}
      </Stack>
    </div>
  );
};

export default CouponManageFilterInput;
