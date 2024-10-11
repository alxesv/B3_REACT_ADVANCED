import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tabs from './Tabs'; // Adjust the path as necessary

// Mock Button component
jest.mock('../../atoms/button/Button', () => {
    const MockButton = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
        <button onClick={onClick}>{children}</button>
    );
    return {
        __esModule: true,
        default: MockButton,
    };
});

test('renders tabs and switches content on click', () => {
    render(
        <Tabs
            tabs={['Tab 1', 'Tab 2']}
            tabContent={[<div>Content for Tab 1</div>, <div>Content for Tab 2</div>]}
            height='10'
            width='10'
        />
    );

    // Verify the first tab and its content are rendered by default
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Content for Tab 1')).toBeInTheDocument();

    // Verify the second tab is also rendered
    expect(screen.getByText('Tab 2')).toBeInTheDocument();

    // Click on the second tab
    fireEvent.click(screen.getByText('Tab 2'));

    // Check that the content of the second tab is displayed
    expect(screen.getByText('Content for Tab 2')).toBeInTheDocument();

    // Check that the first tab's content is no longer displayed
    expect(screen.queryByText('Content for Tab 1')).toBeNull();
});

test('renders tabs with default width and height', () => {
    render(
        <Tabs
            tabs={['Tab 1', 'Tab 2']}
            tabContent={[<div>Content for Tab 1</div>, <div>Content for Tab 2</div>]}
            buttonType='secondary'
        />
    );

    // Verify the default width and height are applied
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Content for Tab 1')).toBeInTheDocument();
});