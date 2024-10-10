import React, { useState } from 'react';
import Breadcrumb from '../../components/organisms/breadcrumb/Breadcrumb';
import Table from '../../components/organisms/table/Table';
import Button from '../../components/atoms/button/Button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { DataProp } from '../../interface/TableInterface';
import { columnsProp } from '../../model/ColumnDemo';

const BreadcrumbPage: React.FC = () => {
    const [copySuccess, setCopySuccess] = useState('Copy');

    const breadcrumbItems = [
        { label: 'Home', path: '/' },
        { label: 'Library', path: '/library', color: "danger" as "danger"  },
        { label: 'Data', path: '/library/data', color: "primary" as "primary" },
        { label: 'Current', path: '/library/data/current' },
    ];

    const breadcrumbItems2 = [
        { label: 'Home', path: '/', separator: '>', color: "dark" as "dark" },
        { label: 'Button', path: '/button', separator: '>' },
        { label: 'Breadcrumb', path: '/button/breadcrumb' },
    ];

    const breadcrumbItems3 = [
        { label: 'Home', path: '/', separator: '\\', color: "secondary" as "secondary" },
        { label: 'Breadcrumb', path: '/button/breadcrumb', color: "primary" as "primary" },
    ];

    const codeString = `
        <Breadcrumb items={breadcrumbItems} />
        <Breadcrumb items={breadcrumbItems2} />
        <Breadcrumb items={breadcrumbItems3} />

        const breadcrumbItems = [
            { label: 'Home', path: '/' },
            { label: 'Library', path: '/library' },
            { label: 'Data', path: '/library/data' },
            { label: 'Current', path: '/library/data/current' },
        ];

        const breadcrumbItems2 = [
            { label: 'Home', path: '/', separator: '>' },
            { label: 'Button', path: '/button', separator: '>' },
            { label: 'Breadcrumb', path: '/button/breadcrumb' },
        ];

        const breadcrumbItems3 = [
            { label: 'Home', path: '/', separator: '\\' },
            { label: 'Breadcrumb', path: '/button/breadcrumb' },
        ];
  `;

    const breadcrumbItem = `
    List of BreadcrumbItem:{
        label: string;
        path: string;
        separator?: string;
        color?: 'primary' | 'secondary' | 'danger' | 'dark';
    }`

    const data: DataProp[] = [
        { prop: 'items', options: 'Array of BreadcrumbItem', description: 'Array of items to display in the breadcrumb.', default: 'cannot be empty', type: breadcrumbItem },
    ];

    const changeCopySuccess = () => {
        setCopySuccess('Copied!')
        setTimeout(() => setCopySuccess('Copy'), 3000);
    };


    return (
        <div className='page-container'>
            <h1>Breadcrumb Component Documentation</h1>
            <p>The Breadcrumb component displays a navigation path for the user to understand their current location within a website or application.</p>
            <h2>Props Overview</h2>
            <Table
                columns={columnsProp}
                data={data}
                type='secondary'
            />
            <h2>Usage Examples</h2>
            <div className='example-code-block'>
                <div className='example-block'>
                    <Breadcrumb items={breadcrumbItems} />
                    <Breadcrumb items={breadcrumbItems2} />
                    <Breadcrumb items={breadcrumbItems3} />
                </div>
                <div className='example-code'>
                    <Button type="secondary" cssClass='copy-button' textToCopy={codeString} onClickCopy={changeCopySuccess}>{copySuccess}</Button>
                    <SyntaxHighlighter language="tsx" style={oneDark}>
                        {codeString}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
};

export default BreadcrumbPage;
