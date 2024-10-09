import { render, screen } from '@testing-library/react';
import Button from './Button';

// Mock navigator.clipboard.writeText
Object.assign(navigator, {
    clipboard: {
        writeText: jest.fn(),
    },
});

test('renders Button', () => {
    render(<Button type="primary">Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
});

test('renders Button with loading state', () => {
    render(<Button type="primary" state="loading">Click me</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Loading...');
});


test('handleClick is called when button is clicked', () => {
    const handleClick = jest.fn();
    render(<Button type="primary" onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button');
    button.click();
    expect(handleClick).toHaveBeenCalled();
});

test('handleClick is called when button with onClickCopy', () => {
    const onClickCopy = jest.fn();
    render(<Button type="primary" onClickCopy={onClickCopy} textToCopy="text">Click me</Button>);
    const button = screen.getByRole('button');
    button.click();
    expect(onClickCopy).toHaveBeenCalled();
});