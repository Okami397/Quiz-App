import React from 'react';
import Select, { ActionMeta } from 'react-select';

interface OptionType {
    value: string;
    label: string;
}

interface SelectInputProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: OptionType[];
}

const SelectInput: React.FC<SelectInputProps> = ({ label, value, onChange, options }) => {

    const handleChange = (selectedOption: OptionType | null, actionMeta: ActionMeta<OptionType>) => {
        if (selectedOption) {
            onChange(selectedOption.value);
        }
    };

    const selectedOption = options.find(option => option.value === value);

    return (
        <div>
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







