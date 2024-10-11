import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import '@testing-library/jest-dom/extend-expect';

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('Breadcrumb Component', () => {
  const items = [
    { label: 'Home', path: '/', color: 'primary' as 'primary' },
    { label: 'Products', path: '/products', color: 'primary' as 'primary' },
    { label: 'Electronics', path: '/products/electronics' },
    { label: 'Smartphones', path: '/products/electronics/smartphones', color: 'primary' as 'primary' }
  ];

  const items2 = [
    { label: 'Home', path: '/', color: 'primary' as 'primary' },
    { label: 'Products', path: '/products', color: 'primary' as 'primary' },
    { label: 'Electronics', path: '/products/electronics' },
    { label: 'Smartphones', path: '/products/electronics/smartphones'}
  ];
  test('renders breadcrumb items', () => {
    renderWithRouter(<Breadcrumb items={items2} />);
    items.forEach(item => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  test('renders breadcrumb links except for the last item', () => {
    renderWithRouter(<Breadcrumb items={items} />);
    expect(screen.getByText('Smartphones')).not.toHaveAttribute('href');
    items.slice(0, -1).forEach(item => {
      expect(screen.getByText(item.label)).toHaveAttribute('href', item.path);
    });
  });

  test('renders the default separator', () => {
    renderWithRouter(<Breadcrumb items={items} />);
    const separators = screen.getAllByText('/');
    expect(separators.length).toBe(items.length - 1);
  });

  test('renders custom separator', () => {
    const customItems = items.map(item => ({ ...item, separator: '>' }));
    renderWithRouter(<Breadcrumb items={customItems} />);
    const separators = screen.getAllByText('>');
    expect(separators.length).toBe(customItems.length - 1);
  });

  test('last item is active and not a link', () => {
    renderWithRouter(<Breadcrumb items={items} />);
    const lastItem = screen.getByText('Smartphones');
    expect(lastItem.tagName).toBe('SPAN');
  });
});
