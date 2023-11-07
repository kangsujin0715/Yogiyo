import * as React from 'react';
import { FormControlLabel, Radio, RadioGroup, RadioGroupProps } from '@mui/material';
import styled from 'styled-components';

type RadioOption = {
  name: string;
  value: string | number;
};
interface Props extends RadioGroupProps {
  options: RadioOption[];
}
const FormRadioElement = (props: Props) => {
  const { name, options } = props;
  return (
    <StyledFormRadioGroup>
      <RadioGroup
        {...props}
        row
        sx={{ display: 'flex' }}
        defaultValue={props.defaultValue}
        name={name}
      >
        {options.map(({ name, value }) => (
          <FormControlLabel key={name} value={value} control={<Radio />} label={name} />
        ))}
      </RadioGroup>
    </StyledFormRadioGroup>
  );
};
export default FormRadioElement;

const StyledFormRadioGroup = styled.div`
  & label span {
    font-size: 1.6rem;
    margin: 0 !important;
  }
`;
