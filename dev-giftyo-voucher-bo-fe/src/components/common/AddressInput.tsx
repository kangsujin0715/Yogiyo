import * as React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Address } from 'react-daum-postcode/lib/loadPostcode';
import { useDaumPostcodePopup } from 'react-daum-postcode';

interface Props {
  zonecode?: string;
  address?: string;
  lessAddress?: string;
  onChange: (addr: Address) => void;
}
const AddressInput = ({ zonecode, address, lessAddress, onChange }: Props) => {
  const open = useDaumPostcodePopup();

  const handleComplete = (arg: Address) => {
    onChange(arg);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <Box>
      <Box mb="16px" display="flex" alignItems="center">
        <TextField
          sx={{ width: '176px', marginRight: '8px' }}
          id="zone"
          disabled
          value={zonecode}
        />
        <Button color="info" onClick={handleClick}>
          주소검색
        </Button>
      </Box>
      <TextField sx={{ marginRight: '16px' }} id="address" disabled value={address} />
      <TextField id="lessAddress" value={lessAddress} />
    </Box>
  );
};
export default AddressInput;
