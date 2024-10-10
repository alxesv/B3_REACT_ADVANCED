import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Modal from './Modal';
import userEvent from '@testing-library/user-event';

test('renders modal', () => {
    render(<Modal isOpen={true}>
        <h1>Modal title</h1>
        </Modal>)
    const modalElement = screen.getByText(/Modal title/i);
    expect(modalElement).toBeInTheDocument();
});

test('does not render modal when isOpen is false', () => {
    render(
        <Modal isOpen={false}>
            <h1>Modal title</h1>
        </Modal>
    );
    const modalElement = screen.queryByText(/Modal title/i);
    expect(modalElement).not.toBeVisible();
});


test('closes modal when close button is clicked', async () => {
    const handleClose = jest.fn();
    render(
        <Modal isOpen={true} onClose={handleClose}>
            <h1>Modal title</h1>
        </Modal>
    );

    const closeButton = screen.getByRole('button');
    userEvent.click(closeButton);

    await waitFor(() => {
        expect(handleClose).toHaveBeenCalled();
    });
});