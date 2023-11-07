import { useRef, useState } from 'react';
import { Button, ButtonGroup, Menu, MenuItem } from '@mui/material';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface SplitButtonOptionType {
  tag: number;
  title: string;
}

interface SplitButtonGroupProps {
  options: SplitButtonOptionType[];
  handleButtonClick?: () => void;
  handleOptionClick: (tag: number, title: string) => void;
}

const SplitButtonGroup = (props: SplitButtonGroupProps) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleMenuItemClick = (index: number, tag: number, title: string) => {
    setSelectedIndex(index);
    setOpen(false);
    props.handleOptionClick(tag, title);
  };
  return (
    <>
      <ButtonGroupSelectorStyle ref={anchorRef}>
        <ButtonSelectStyle onClick={props.handleButtonClick}>
          {props.options[selectedIndex].title}
        </ButtonSelectStyle>
        <IconButton
          id="selecter"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <ArrowDropDownIcon fontSize="large" />
        </IconButton>
      </ButtonGroupSelectorStyle>
      <MenuStyle open={open} onClose={() => setOpen(false)} anchorEl={anchorRef.current}>
        {props.options.map((option, index) => (
          <MenuItemStyle
            key={option.tag}
            selected={index === selectedIndex}
            onClick={() => handleMenuItemClick(index, option.tag, option.title)}
          >
            {option.title}
          </MenuItemStyle>
        ))}
      </MenuStyle>
    </>
  );
};
export default SplitButtonGroup;

const ButtonGroupSelectorStyle = styled(ButtonGroup)`
  height: 36px;
  display: flex;
  padding: var(--none, 0px);
  align-items: center;
  gap: var(--none, 0px);
  border-radius: var(--borderRadius, 4px);
  border: 1px solid var(--common-black-outlined-border, rgba(0, 0, 0, 0.5));
`;

const ButtonSelectStyle = styled(Button)`
  display: flex;
  padding: 6px var(--2, 16px);
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: var(--none, 0px);
  border-radius: var(--borderRadius, 4px);
  color: var(--text-primary, rgba(0, 0, 0, 0.87));
  border-color: transparent;
`;

const MenuStyle = styled(Menu)`
  display: flex;
  padding: 8px 0px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const MenuItemStyle = styled(MenuItem)`
  display: flex;
  padding: 8px 0px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  color: var(--text-primary, rgba(0, 0, 0, 0.87));
  font-feature-settings:
    'clig' off,
    'liga' off;
  padding: var(--borderRadius, 4px) var(--2, 16px);

  /* menu/itemDense */
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.17px;
`;
