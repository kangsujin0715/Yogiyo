import { MenuItem, Select, SelectProps, Stack, StackProps, Typography } from '@mui/material';
import { FieldPath, FieldValues, useController, UseControllerProps } from 'react-hook-form';
import styled from 'styled-components';
import { PropsWithChildren } from 'react';

interface LabelSelectProps<T> {
  items: Array<T>;
  getItemLabel: (item: T) => string;
  getItemValue: (item: T) => string;
  selectProps?: SelectProps;
  stackProps?: StackProps;
}

/**
 * 제네릭 커스텀 라펠(가로 or 세로) 셀렉트 컴포넌트
 *
 * @param {React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | undefined | null} children
 * @param {Array<T>} items
 * @param {string} value
 * @param {<T>(item: T) => string} getItemLabel
 * @param {<T>(item: T) => string} getItemValue
 * @param {SelectProps<unknown> | undefined} selectProps
 * @param {(StackOwnProps & CommonProps & DistributiveOmit<React.PropsWithoutRef<React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>> & {ref?: Exclude<string | ((instance: (HTMLDivElement | null)) => void) | React.RefObject<HTMLDivElement> | null, string> | undefined}, "children" | "direction" | "spacing" | "divider" | "useFlexGap" | "sx" | "border" | "borderTop" | "borderRight" | "borderBottom" | "borderLeft" | "borderColor" | "borderRadius" | "display" | "displayPrint" | "overflow" | "textOverflow" | "visibility" | "whiteSpace" | "flexBasis" | "flexDirection" | "flexWrap" | "justifyContent" | "alignItems" | "alignContent" | "order" | "flex" | "flexGrow" | "flexShrink" | "alignSelf" | "justifyItems" | "justifySelf" | "gap" | "columnGap" | "rowGap" | "gridColumn" | "gridRow" | "gridAutoFlow" | "gridAutoColumns" | "gridAutoRows" | "gridTemplateColumns" | "gridTemplateRows" | "gridTemplateAreas" | "gridArea" | "bgcolor" | "color" | "zIndex" | "position" | "top" | "right" | "bottom" | "left" | "boxShadow" | "width" | "maxWidth" | "minWidth" | "height" | "maxHeight" | "minHeight" | "boxSizing" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft" | "marginX" | "marginY" | "marginInline" | "marginInlineStart" | "marginInlineEnd" | "marginBlock" | "marginBlockStart" | "marginBlockEnd" | "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft" | "paddingX" | "paddingY" | "paddingInline" | "paddingInlineStart" | "paddingInlineEnd" | "paddingBlock" | "paddingBlockStart" | "paddingBlockEnd" | "typography" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "letterSpacing" | "lineHeight" | "textAlign" | "textTransform" | "className" | "style" | "classes"> & {component?: React.ElementType}) | undefined} stackProps
 * @param {Omit<React.PropsWithChildren<LabelSelectProps<T> & UseControllerProps<TFieldValues, TName>>, "getItemLabel" | "children" | "stackProps" | "selectProps" | "items" | "value" | "getItemValue">} props
 * @returns {JSX.Element}
 * @constructor
 */
const GenericLabelSelect = <
  T,
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  children,
  items,
  getItemLabel,
  getItemValue,
  selectProps,
  stackProps,
  ...props
}: PropsWithChildren<LabelSelectProps<T> & UseControllerProps<TFieldValues, TName>>) => {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <Stack {...stackProps}>
      {children && <StyledTypography>{children}</StyledTypography>}
      <Select {...selectProps} {...field}>
        {items.map((data, index) => {
          const itemLabel = getItemLabel(data);
          const itemValue = getItemValue(data);
          return (
            <MenuItem key={`${index}_${data}`} value={itemValue}>
              {itemLabel}
            </MenuItem>
          );
        })}
      </Select>
    </Stack>
  );
};

export default GenericLabelSelect;

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
