import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card'; // Adjust the path as necessary

test('renders card with title and description', () => {
  render(<Card title="Card Title" description="This is a card description" />);

  // Check that the title and description are rendered
  expect(screen.getByText('Card Title')).toBeInTheDocument();
  expect(screen.getByText('This is a card description')).toBeInTheDocument();
});

test('renders card with image when imageUrl is provided', () => {
  const imageUrl = 'https://via.placeholder.com/150';
  render(<Card title="Card with Image" description="This card has an image" imageUrl={imageUrl} />);

  // Check that the image is rendered with the correct src and alt attributes
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', imageUrl);
  expect(img).toHaveAttribute('alt', 'Card with Image');
});

test('renders card without image when imageUrl is not provided', () => {
  render(<Card title="Card without Image" description="This card does not have an image" />);

  // Check that the img element is not rendered
  expect(screen.queryByRole('img')).toBeNull();
});

test('renders card with actions when actions are provided', () => {
  render(
    <Card
      title="Card with Actions"
      description="This card has actions"
      actions={[<button key="1">Action 1</button>, <button key="2">Action 2</button>]}
    />
  );

  // Check that the actions are rendered
  expect(screen.getByText('Action 1')).toBeInTheDocument();
  expect(screen.getByText('Action 2')).toBeInTheDocument();
});

test('renders card with correct width', () => {
  render(<Card title="Card Width Test" description="This card has a custom width" width="25" />);

  // Check that the card has the correct inline style for width
  const card = screen.getByText('Card Width Test').closest('.card');
  expect(card).toHaveStyle('width: 25rem');
});
