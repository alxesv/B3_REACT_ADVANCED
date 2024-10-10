import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Alert from './Alert';
import userEvent from '@testing-library/user-event';

test('renders alert', () => {
    render(<Alert message="Alert message" />);
    const alertElement = screen.getByText(/Alert message/i);
    expect(alertElement).toBeInTheDocument();
});

test('closes alert when close button is clicked', () => {
    const onClose = jest.fn();
    render(<Alert message="Alert message" onClose={onClose} />);
    const closeButton = screen.getByText(/X/i);
    userEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
});

test('auto-closes alert after the specified time', async () => {
    const onClose = jest.fn();
    render(<Alert message="Auto-close alert" autoClose={true} onClose={onClose} />);
    const alertElement = screen.getByText(/Auto-close alert/i);
    expect(alertElement).toBeInTheDocument();

    await waitFor(() => {
        expect(onClose).toHaveBeenCalled();
    }, { timeout: 5000 });
});

test('renders progress bar when autoClose is true', () => {
    render(<Alert message="Alert with progress bar" autoClose={true} />);
    const progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toBeInTheDocument();
});
