import React from 'react';

interface Option {
  value: string | number;
  title: string;
  disabled?: boolean;
}

interface SelectProps {
  options: Option[];
  onChange: (value: string | number) => void;
  disabled?: boolean;
  id?: string;
}

const Select: React.FC<SelectProps> = ({ options, onChange, disabled = false, id = '' }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select id={id} disabled={disabled} onChange={handleChange}>
      {options.map((option, index) => (
        <option key={option.value || index} value={option.value} disabled={option.disabled}>
          {option.title}
        </option>
      ))}
    </select>
  );
};

export default Select;
