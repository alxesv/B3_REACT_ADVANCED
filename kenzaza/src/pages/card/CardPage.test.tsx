import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import CardPage from './CardPage';

jest.useFakeTimers();

describe('CardPage', () => {
  test('renders CardPage and verifies changeCopySuccess behavior', () => {
    render(<CardPage />);
    const copyButton = screen.getByText('Copy');
    expect(copyButton).toBeInTheDocument();
    fireEvent.click(copyButton);
    expect(copyButton.textContent).toBe('Copied!');
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(copyButton.textContent).toBe('Copy');
  });
});
