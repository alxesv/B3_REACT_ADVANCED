import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkbox from './Checkbox';
import userEvent from '@testing-library/user-event';

test('renders checkbox', () => {
    render(<Checkbox label="Check me" />);
    const checkboxElement = screen.getByText(/Check me/i);
    expect(checkboxElement).toBeInTheDocument();
});

test('call handleChange when clicked', () => {
    const handleChange = jest.fn();
    render(<Checkbox label="Check me" defaultChecked={true} onChange={handleChange} />);
    const checkboxElement = screen.getByText(/Check me/i);
    const checkboxInput = checkboxElement.previousElementSibling;
    expect(checkboxInput).toBeInTheDocument();
    if (checkboxInput) {
        userEvent.click(checkboxInput);
        expect(handleChange).toHaveBeenCalled();
    }
}
);
