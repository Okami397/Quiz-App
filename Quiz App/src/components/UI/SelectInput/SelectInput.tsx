import React from "react";
import styles from "./SelectInput.module.css";
import Select from "react-select";

interface OptionType {
  value: string | number;
  label: string | number;
  id?: number;
}

interface SelectInputProps {
  label: string;
  value: string | number | { id: number; value: string };
  onChange: (value: string | number) => void;
  options: OptionType[];
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  value,
  onChange,
  options,
}) => {
  const handleChange = (selectedOption: any) => {
    if (selectedOption) {
      onChange(selectedOption.value);
    }
  };

  const selectedOption = options.find((option) => option.value == value);

  return (
    <div className={styles.wrapper}>
      <label>{label}</label>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};

export default SelectInput;
