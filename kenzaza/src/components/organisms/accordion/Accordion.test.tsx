import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Accordion from './Accordion';
import userEvent from '@testing-library/user-event';

const accordionItems1 = [
  { title: 'Section 1', content: <p>This is the content for section 1</p> },
  { title: 'Section 2', content: <p>This is the content for section 2</p>, bgColor: 'primary' },
  { title: 'Section 3', content: <p>This is the content for section 3</p>, color: 'danger' },
];

test('renders accordion', () => {
  render(<Accordion items={accordionItems1} allowMultiple={true} />);
  const section1Element = screen.getByText(/Section 1/i);
  const section2Element = screen.getByText(/Section 2/i);
  const section3Element = screen.getByText(/Section 3/i);

  expect(section1Element).toBeInTheDocument();
  expect(section2Element).toBeInTheDocument();
  expect(section3Element).toBeInTheDocument();
});

test('opens and closes accordion sections', async () => {
  render(<Accordion items={accordionItems1} />);

  const section1Button = screen.getByText(/Section 1/i);
  userEvent.click(section1Button);

  await waitFor(() => {
    expect(screen.getByText(/This is the content for section 1/i)).toBeInTheDocument();
  });

  userEvent.click(section1Button);

  await waitFor(() => {
    expect(screen.queryByText(/This is the content for section 1/i)).not.toBeInTheDocument();
  });
});

test('applies background and text colors correctly', () => {
  render(<Accordion items={accordionItems1} />);

  const section2Button = screen.getByText(/Section 2/i);
  expect(section2Button).toHaveClass('primary-bg');

  const section3Button = screen.getByText(/Section 3/i);
  userEvent.click(section3Button);

  waitFor(() => {
    const section3Content = screen.getByText(/This is the content for section 3/i);
    expect(section3Content).toHaveClass('danger-color');
  });
});

test('allows multiple sections to open and close', async () => {
  render(<Accordion items={accordionItems1} allowMultiple={true} />);
  const section1Button = screen.getByText(/Section 1/i);
  const section2Button = screen.getByText(/Section 2/i);
  userEvent.click(section1Button);
  await waitFor(() => {
    expect(screen.getByText(/This is the content for section 1/i)).toBeInTheDocument();
  });
  userEvent.click(section2Button);
  await waitFor(() => {
    expect(screen.getByText(/This is the content for section 2/i)).toBeInTheDocument();
  });
  userEvent.click(section1Button);
  await waitFor(() => {
    expect(screen.queryByText(/This is the content for section 1/i)).not.toBeInTheDocument();
  });
  expect(screen.getByText(/This is the content for section 2/i)).toBeInTheDocument();
  userEvent.click(section2Button);
  await waitFor(() => {
    expect(screen.queryByText(/This is the content for section 2/i)).not.toBeInTheDocument();
  });
});
