import React, { useState } from 'react';
import './select.css';

interface SelectProps {
    options: string[]; // Array of options for the select component
    multiple?: boolean; // To support multiple selections
    label?: string; // Optional label for the select
}

const Select: React.FC<SelectProps> = ({ options, multiple = false, label }) => {
    const [selectedOption, setSelectedOption] = useState<string | string[]>(multiple ? [] : '');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValues = Array.from(e.target.selectedOptions, option => option.value);
        setSelectedOption(multiple ? selectedValues : e.target.value);
    };

    return (
        <div className='select-container'>
            {label && <label className='select-label'>{label}</label>}
            <select
                className='select'
                multiple={multiple}
                value={selectedOption}
                onChange={handleChange}
            >
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <div className='selected-value'>
                <strong>Selected:</strong> {multiple ? (selectedOption as string[]).join(', ') : selectedOption}
            </div>
        </div>
    );
};

export default Select;
