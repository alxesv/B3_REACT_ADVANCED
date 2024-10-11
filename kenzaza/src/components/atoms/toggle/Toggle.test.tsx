import React from 'react';
import { render, screen } from '@testing-library/react';
import Toggle from './Toggle';
import userEvent from '@testing-library/user-event';

test('renders toggle', () => {
    render(<Toggle />);
    const toggleElement = screen.getByRole('checkbox');
    expect(toggleElement).toBeInTheDocument();
});

test('call handleChange when clicked', () => {
    const handleChange = jest.fn();
    render(<Toggle onChange={handleChange} />);
    const toggleElement = screen.getByRole('checkbox');
    userEvent.click(toggleElement);
    expect(handleChange).toHaveBeenCalled();
});

test('correct class is applied', () => {
    render(<Toggle color="secondary" type="square" defaultChecked={true}/>);
    const sliderElement = screen.getByRole('checkbox').nextElementSibling;
    expect(sliderElement).toHaveClass('slider square secondary');
}
);