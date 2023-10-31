import { ChangeEvent } from 'react';
import styled from './LargeCheckBox.module.css';

interface LargeCheckBoxProps {
  label: string;
  marginTop?: number;
  isChecked?: boolean;
  onChanged?: (checked: boolean) => void;
}

const LargeCheckBox = (props: LargeCheckBoxProps) => {
  return (
    <div
      className={styled.ch_area}
      style={props.marginTop != null ? { marginTop: props.marginTop } : {}}>
      <div className={styled.check_box_all}>
        <label>
          <input
            type="checkbox"
            checked={props.isChecked}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              props.onChanged?.(e.target.checked)
            }
          />
          {props.label}
        </label>
      </div>
    </div>
  );
};

export default LargeCheckBox;
