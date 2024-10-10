import React, { useState } from 'react';
import './table.css';


interface TableProps<T> {
    type: TableType;
    columns: ColumnProps<T>[];
    data: T[];
    pageSize?: number;
    select?: boolean;
    pagination?: boolean;
    onSelectRow?: (selectedData: T[]) => void;
    onSelectCellules?: (selectedCellules: SelectedCellules[]) => void;
}

interface ColumnProps<T> {
    key: keyof T;
    label: string;
}

interface SelectedCellules {
    key: string;
    index: number;
    value: string
}

type TableType = 'primary' | 'secondary' | 'danger' | 'warning';


const Table = <T extends object>({ type = 'primary', columns, data, pageSize = data.length, select = false, pagination = false, onSelectRow, onSelectCellules }: TableProps<T>) => {

    const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: 'asc' | 'desc' } | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [selectedCellules, setSelectedCellules] = useState<SelectedCellules[]>([]);

    const sortedData = React.useMemo(() => {
        if (sortConfig) {
            return [...data].sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }
        return data;
    }, [data, sortConfig]);

    // Pagination logic
    const paginatedData = React.useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize;
        return sortedData.slice(startIndex, startIndex + pageSize);
    }, [currentPage, pageSize, sortedData]);

    // Handle sorting
    const handleSort = (key: keyof T) => {
        setSortConfig(prev => {
            if (prev && prev.key === key) {
                return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' };
            }
            return { key, direction: 'asc' };
        });
    };

    // handle row selection
    const handleRowSelection = (index: number) => {
        const absoluteIndex = (currentPage - 1) * pageSize + index;
        setSelectedRows(prev => {
            const newSelectedRows = prev.includes(absoluteIndex)
                ? prev.filter(rowIndex => rowIndex !== absoluteIndex)
                : [...prev, absoluteIndex];
            if (onSelectRow) {
                onSelectRow(newSelectedRows.map(rowIndex => data[rowIndex]));
            }
            return newSelectedRows;
        });
    };

    // Handle cellule selection
    const handleCelluleSelection = (key: string, index: number, value: string) => () => {
        setSelectedCellules(prev => {
            let newSelectedCellules;
            let isAlreadySelected = isCelluleSelected(key, index, value);
            console.log(isAlreadySelected);
            if (isAlreadySelected) {
                newSelectedCellules = prev.filter(cellule => cellule.key !== key || cellule.index !== index || cellule.value !== value);
            } else {
                newSelectedCellules = [...prev, { key: key, index: index, value: value }];
            }
            if (onSelectCellules) {
                onSelectCellules(newSelectedCellules);
            }
            return newSelectedCellules;
        })
    }

    // check if a cellule is selected
    const isCelluleSelected = (key: string, index: number, value: string) => {
        let isSelected = false;
        selectedCellules.map(cellule => {
            if (cellule.key === key && cellule.index === index && cellule.value === value) {
                isSelected = true;
            }
        });
        return isSelected;
    }

    return (
        <div className='table-container'>
            <table className='table'>
                <thead>
                    <tr>
                        {select ? <th className={type}>Select</th> : null} {/* Select column */}
                        {/* column from props */}
                        {columns.map(column => (
                            <th className={type} key={column.key as string} onClick={() => handleSort(column.key)}>
                                {column.label}
                                {sortConfig?.key === column.key ? (sortConfig.direction === 'asc' ? ' ▲' : ' ▼') : ''}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((row, index) => {
                        const absoluteIndex = (currentPage - 1) * pageSize + index;

                        return (
                            <tr key={absoluteIndex} className={selectedRows.includes(absoluteIndex) ? 'selected' : ''}>
                                {select ? /* select checkbox */
                                    <td>
                                        <input
                                            type='checkbox'
                                            checked={selectedRows.includes(absoluteIndex)} // Use absolute index here
                                            onChange={() => handleRowSelection(index)}
                                        />
                                    </td>
                                    : null
                                }
                                {columns.map(column => (
                                    <td className={isCelluleSelected(column.key.toString(), index, row[column.key] as string) ? 'selectedCellule' : ''}
                                        onClick={handleCelluleSelection(column.key.toString(), index, row[column.key] as string)} key={column.key as string}>
                                        {String(row[column.key])}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {/* Pagination */}
            {pagination && (
                <div className='pagination'>
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    >
                        Previous
                    </button>
                    <span>
                        Page {currentPage} of {Math.ceil(data.length / pageSize)}
                    </span>
                    <button
                        disabled={currentPage === Math.ceil(data.length / pageSize)}
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(data.length / pageSize)))}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default Table;
