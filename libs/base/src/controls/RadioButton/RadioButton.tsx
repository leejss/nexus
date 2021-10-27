import React from 'react';
import { Stack } from '../../layouts/Stack';
import cx from 'classnames';
import './RadioButton.scss';
import { RadioCircle } from '../../common/RadioCircle';

  export interface RadioButtonProps {
  label?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  onChange?(changeEvent: React.ChangeEvent<HTMLInputElement>): void;
}

export const RadioButton = ({
  checked,
  label,
  name,
  value,
  onChange,
}: RadioButtonProps) => {
  const classnames = cx('RadioButton');
  const inputMarkup = (
    <input
      type="radio"
      aria-label={label}
      value={value}
      name={name}
      checked={checked}
      onChange={onChange}
    />
  );
  const inputLabel = label && <span>{label}</span>;
  return (
    <label className={classnames}>
      <Stack horizontal inline justify="between" align="center" gutter={10}>
        <RadioCircle
          border={{
            color: 'gray',
          }}
          checked={checked}
        />
        {inputLabel}
        {inputMarkup}
      </Stack>
    </label>
  );
};
