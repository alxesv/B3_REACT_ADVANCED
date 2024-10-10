import { render, screen } from '@testing-library/react';
import CardPage from '../../../pages/card/CardPage';

jest.mock('react-syntax-highlighter', () => {
  return {
    Prism: ({ children }: any) => <div>{children}</div>,
  };
});

jest.mock('react-syntax-highlighter/dist/esm/styles/prism', () => ({
  oneDark: {},
}));

test('renders CardPage', () => {
  render(<CardPage />);
  const heading = screen.getByText('Card Component Documentation');
  expect(heading).toBeInTheDocument();
  const card1 = screen.getByText('Yes this is the description for Card 1, And no this is not the description for Card 2 lol.');
  expect(card1).toBeInTheDocument();
  const button = screen.getByRole('button', { name: 'Primary' });
  expect(button).toBeInTheDocument();
});
