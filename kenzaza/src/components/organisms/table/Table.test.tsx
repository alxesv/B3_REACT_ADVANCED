import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { DataDemo, Column } from '../../../interface/TableInterface';
import Table from './Table';

const dataDemo: DataDemo[] = [
    { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane@example.com' },
    { id: 3, name: 'Mike Johnson', age: 35, email: 'mike@example.com' },
    { id: 4, name: 'Alice Brown', age: 28, email: 'alice@example.com' },
    { id: 5, name: 'David White', age: 42, email: 'david@example.com' },
    { id: 6, name: 'Emily Green', age: 22, email: 'emily@example.com' },
    { id: 7, name: 'Chris Black', age: 50, email: 'chris@example.com' },
];

const columnsDemo: Column<DataDemo>[] = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'email', label: 'Email' },
];

test('renders table with columns and data', () => {
    render(<Table columns={columnsDemo} data={dataDemo} type="primary" />);
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    const columnHeaders = screen.getAllByRole('columnheader');
    expect(columnHeaders.length).toBe(columnsDemo.length);
    dataDemo.forEach(row => {
        expect(screen.getByText(row.name)).toBeInTheDocument();
        expect(screen.getByText(row.email)).toBeInTheDocument();
    });
});

test('sorts columns when header is clicked', () => {
    render(<Table columns={columnsDemo} data={dataDemo} type="primary" />);
    const nameHeader = screen.getByText('Name');
    expect(screen.getAllByRole('row')[1]).toHaveTextContent('John Doe');
    fireEvent.click(nameHeader);
    expect(screen.getAllByRole('row')[1]).toHaveTextContent('Alice Brown');
    fireEvent.click(nameHeader);
    expect(screen.getAllByRole('row')[1]).toHaveTextContent('Mike Johnson');
});

test('selects and deselects rows', () => {
    const mockSelectRow = jest.fn();
    render(<Table columns={columnsDemo} data={dataDemo} type="primary" select={true} onSelectRow={mockSelectRow} />);
    const firstCheckbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(firstCheckbox);

    expect(firstCheckbox).toBeChecked();
    expect(mockSelectRow).toHaveBeenCalledWith([dataDemo[0]]);
    fireEvent.click(firstCheckbox);
    expect(firstCheckbox).not.toBeChecked();
    expect(mockSelectRow).toHaveBeenCalledWith([]);
});

test('selects and deselects individual cells', () => {
    const mockSelectCellules = jest.fn();
    render(<Table columns={columnsDemo} data={dataDemo} type="primary" onSelectCellules={mockSelectCellules} />);
    const firstCell = screen.getByText('John Doe');
    fireEvent.click(firstCell); // Select first cell
    expect(mockSelectCellules).toHaveBeenCalledWith([{ key: 'name', index: 0, value: 'John Doe' }]);
    fireEvent.click(firstCell); // Deselect first cell
    expect(mockSelectCellules).toHaveBeenCalledWith([]);
});

test('handles pagination correctly', () => {
    render(<Table columns={columnsDemo} data={dataDemo} type="primary" pagination={true} pageSize={2} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByText('Mike Johnson')).toBeInTheDocument();
    expect(screen.getByText('Alice Brown')).toBeInTheDocument();
});

test('calls onSelectRow callback when row is selected', () => {
    const mockSelectRow = jest.fn();
    render(<Table columns={columnsDemo} data={dataDemo} type="primary" select={true} onSelectRow={mockSelectRow} />);
    const checkbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(checkbox);
    expect(mockSelectRow).toHaveBeenCalledTimes(1);
    expect(mockSelectRow).toHaveBeenCalledWith([dataDemo[0]]);
});

test('calls onSelectCellules callback when cell is selected', () => {
    const mockSelectCellules = jest.fn();
    render(<Table columns={columnsDemo} data={dataDemo} type="primary" onSelectCellules={mockSelectCellules} />);
    const firstCell = screen.getByText('John Doe');
    fireEvent.click(firstCell);
    expect(mockSelectCellules).toHaveBeenCalledWith([{ key: 'name', index: 0, value: 'John Doe' }]);
});
