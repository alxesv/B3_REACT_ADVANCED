import React, { useState, useEffect } from 'react';
import Accordion from '../../components/organisms/accordion/Accordion';
import Button from '../../components/atoms/button/Button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; // Import Prism for syntax highlighting
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'; // One Dark theme
import { DataProp } from '../../interface/TableInterface';
import { columnsProp } from '../../model/ColumnDemo';
import Table from '../../components/organisms/table/Table';

const AccordionPage: React.FC = () => {
    const [copySuccess, setCopySuccess] = useState('Copy');

    const accordionItems1 = [
        { title: 'Section 1', content: <p>This is the content for section 1</p> },
        { title: 'Section 2', content: <p>This is the content for section 2</p>, bgColor: 'primary' },
        { title: 'Section 3', content: <p>This is the content for section 3</p>, color: 'danger' },
      ];

    const accordionItems2 = [
        { title: 'Section 1', content: <p>This is the content for section 1</p> },
        { title: 'Section 2', content: <p>This is the content for section 2</p>, bgColor: 'dark', titleColor: 'light' },
        { title: 'Section 3', content: <p>This is the content for section 3</p>, bgColor: 'danger' },
        { title: 'Section 4', content: <p>This is the content for section 4</p>, color: 'secondary' },
      ];

    const codeString = `
    <Accordion items={accordionItems1} />
    <Accordion items={accordionItems2} allowMultiple={true} />
    `;

    const codeStringItems = `
    const accordionItems1 = [
        { title: 'Section 1', content: <p>This is the content for section 1</p> },
        { title: 'Section 2', content: <p>This is the content for section 2</p>, bgColor: 'primary' },
        { title: 'Section 3', content: <p>This is the content for section 3</p>, color: 'danger' },
      ];

    const accordionItems2 = [
        { title: 'Section 1', content: <p>This is the content for section 1</p> },
        { title: 'Section 2', content: <p>This is the content for section 2</p>, bgColor: 'dark', titleColor: 'light' },
        { title: 'Section 3', content: <p>This is the content for section 3</p>, bgColor: 'danger' },
        { title: 'Section 4', content: <p>This is the content for section 4</p>, color: 'secondary' },
      ];
      `

    const changeCopySuccess = () => {
        setCopySuccess('Copied!')
        setTimeout(() => setCopySuccess('Copy'), 3000);
    };


    const data: DataProp[] = [
        { prop: 'items', options: 'AccordionItem[]', description: 'Array of objects with title and content for each section.', default: 'cannot be empty', type: 'array' },
        { prop: 'allowMultiple', options: 'true or false', description: 'Defines if multiple sections can be open at the same time.', default: 'false', type: 'boolean' },
    ];


    return (
        <div className='page-container'>
            <h1>Accordion Component Documentation</h1>
            <p>The Accordion component can be used to create an accordion with multiple sections.</p>

            <h2>Props Overview</h2>

            <Table
                columns={columnsProp}
                data={data}
                type='secondary'
            />
            
            <h2>Usage Examples</h2>
            <div className='example-code-block'>
                <div className='example-block'>
                <Accordion items={accordionItems1} />
                <Accordion items={accordionItems2} allowMultiple={true} />
                </div>

                <div className='example-code'>
                    <Button type="secondary" cssClass='copy-button' textToCopy={codeString} onClickCopy={changeCopySuccess}>{copySuccess}</Button>
                    <SyntaxHighlighter language="tsx" style={oneDark}>
                        {codeString}
                    </SyntaxHighlighter>
                </div>
                <p>Accordion items example</p>
                <div className='example-code'>
                    <Button type="secondary" cssClass='copy-button' textToCopy={codeString} onClickCopy={changeCopySuccess}>{copySuccess}</Button>
                    <SyntaxHighlighter language="tsx" style={oneDark}>
                        {codeStringItems}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
};

export default AccordionPage;

