import React from 'react';
import { RadioButton } from './RadioButton';
import { ComponentMeta } from '@storybook/react';

export default {
  title: 'Controls/RadioButton',
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

export const Basic = () => {
  const [options, setOptions] = React.useState(['React', 'Angular', 'Vue']);
  const [selectedOption, setSelectedOption] = React.useState('React');
  const handleChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(changeEvent.target.value);
  };
  return (
    <div>
      {options.map((option, index) => {
        return (
          <RadioButton
            key={index}
            value={option}
            label={option}
            checked={option === selectedOption}
            onChange={handleChange}
          />
        );
      })}
    </div>
  );
};
