import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './Input';

test('renders input with label', () => {
    render(<Input label="Username" type="text" placeholder="Enter username" />);
    expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
});

test('renders input without label', () => {
    render(<Input type="text" placeholder="No label input" />);
    expect(screen.queryByLabelText('No label')).not.toBeInTheDocument();
    expect(screen.getByPlaceholderText('No label input')).toBeInTheDocument();
});

test('renders disabled input', () => {
    render(<Input type="text" placeholder="Disabled input" disabled />);
    const input = screen.getByPlaceholderText('Disabled input');
    expect(input).toBeDisabled();
});

test('handles input change', () => {
    const handleChange = jest.fn();
    render(<Input type="text" onChange={handleChange} placeholder="Change input" color='ye' required={true} background='cestleratioduchef'/>);
    const input = screen.getByPlaceholderText('Change input');
    fireEvent.change(input, { target: { value: 'New value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
});

test('applies custom styles', () => {
    render(<Input type="text" width={20} height={3} radius={10} padding={1} placeholder="Styled input" />);
    const input = screen.getByPlaceholderText('Styled input');
    expect(input).toHaveStyle('width: 20rem');
    expect(input).toHaveStyle('height: 3rem');
    expect(input).toHaveStyle('border-radius: 10px');
    expect(input).toHaveStyle('padding: 1rem');
});

test('renders required input', () => {
    render(<Input type="text" required placeholder="Required input" />);
    const input = screen.getByPlaceholderText('Required input');
    expect(input).toBeRequired();
});
