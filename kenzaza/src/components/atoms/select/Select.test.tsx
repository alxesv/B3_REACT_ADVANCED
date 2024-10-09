import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from './Select';
import type { Option } from './Select';
import userEvent from '@testing-library/user-event';

const mockOptions: Option[] = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3', disabled: true },
    { value: '4', label: 'Option 4' },
];

test('renders select', () => {
    render(<Select options={mockOptions} label="Select one option" />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(4);
});

test('call handleChange when clicked', () => {
    const handleChange = jest.fn();
    render(<Select options={mockOptions} label="Select one option" onChange={handleChange} />);
    const selectElement = screen.getByRole('combobox');
    userEvent.click(selectElement);
    const options = screen.getAllByRole('option');
    userEvent.selectOptions(selectElement, options[1]);
    expect(handleChange).toHaveBeenCalled();
});

test('multiple select working correctly', () => {
    render(<Select options={mockOptions} label="Select one or more" multiple />);
    const selectElement = screen.getByText("Select one or more").nextElementSibling;
    if(!selectElement) throw new Error("Select element not found");
    userEvent.click(selectElement);
    const options = screen.getAllByRole('option');
    userEvent.selectOptions(selectElement, [options[1], options[3]]);
    expect(selectElement).toHaveValue(['2', '4']);
});
