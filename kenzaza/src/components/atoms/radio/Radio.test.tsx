import React from 'react';
import { render, screen } from '@testing-library/react';
import Radio from './Radio';
import userEvent from '@testing-library/user-event';

test('renders radio', () => {
    render(<Radio label="Radio" name="radio" value="radio" />);
    const radioElement = screen.getAllByRole('radio');
    expect(radioElement).toHaveLength(1);
})

test('call handleChange when clicked', () => {
    const handleChange = jest.fn();
    render(<Radio label="Radio" name="radio" value="radio" onChange={handleChange} />);
    const radioElement = screen.getByRole('radio');
    userEvent.click(radioElement);
    expect(handleChange).toHaveBeenCalled();
}
);

test('radios checks and unchecks', () => {
    render(<Radio label="Radio 1" name="radio" value="radio1" />);
    render(<Radio label="Radio 2" name="radio" value="radio2" />);
    const radioElement = screen.getAllByRole('radio');
    expect(radioElement[0]).not.toBeChecked();
    expect(radioElement[1]).not.toBeChecked();
    userEvent.click(radioElement[0]);
    expect(radioElement[0]).toBeChecked();
    expect(radioElement[1]).not.toBeChecked();
    userEvent.click(radioElement[1]);
    expect(radioElement[0]).not.toBeChecked();
    expect(radioElement[1]).toBeChecked();
}
)