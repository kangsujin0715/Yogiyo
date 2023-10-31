import {
  Stack,
  StackProps,
  TextField,
  TextFieldProps,
  Typography
} from '@mui/material';
import styled from 'styled-components';
import { PropsWithChildren } from 'react';
import {
  FieldPath,
  FieldValues,
  useController,
  UseControllerProps
} from 'react-hook-form';

/**
 * 커스텀 라벨 텍스트 필드 컴포넌트
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | undefined | null | (React.ReactElement<any, string | React.JSXElementConstructor<any>> & undefined) | (Iterable<React.ReactNode> & undefined) | (React.ReactPortal & undefined)} children
 * @param {Omit<React.PropsWithChildren<(OutlinedTextFieldProps & UseControllerProps<TFieldValues, TName>) | (StandardTextFieldProps & UseControllerProps<TFieldValues, TName>) | (FilledTextFieldProps & UseControllerProps<TFieldValues, TName>)>, "children">} props
 * @returns {JSX.Element}
 * @constructor
 */

type TextFiledType = TextFieldProps & {
  width?: string;
};

interface MuiProps {
  textFieldProps?: TextFiledType;
  stackProps?: StackProps;
}

const LabelTextField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  children,
  textFieldProps,
  stackProps,
  ...props
}: MuiProps & PropsWithChildren<UseControllerProps<TFieldValues, TName>>) => {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <TextFieldContainer {...stackProps}>
      <StyledTypography>{children}</StyledTypography>
      <StyledTextField
        {...textFieldProps}
        {...field}
        error={!!error}
        helperText={!!error && error.message}
      ></StyledTextField>
    </TextFieldContainer>
  );
};

export default LabelTextField;

const TextFieldContainer = styled(Stack)`
  align-items: center;
`;

const StyledTypography = styled(Typography)`
  width: 50px;
  line-height: 18px;
  color: var(--text-secondary, rgba(0, 0, 0, 0.6));
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

const StyledTextField = styled(TextField)<TextFiledType>`
  width: ${(props) => (props?.width ? props.width : '200')}px;
`;
