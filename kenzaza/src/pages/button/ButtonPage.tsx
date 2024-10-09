import React, { useState } from 'react';
import Button from '../../components/atoms/button/Button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { DataProp } from '../../interface/TableInterface';
import Tableau from '../../components/atoms/table/Table'; import { columnsProp } from '../../model/ColumnDemo';

const ButtonPage: React.FC = () => {
    const [copySuccess, setCopySuccess] = useState('Copy');

    const codeString = `
        <Button type="primary" state="active" cssClass='m-2'>Primary</Button>
        <Button type="secondary" state="active" cssClass='m-2'>Secondary</Button>
        <Button type="danger" state="active" cssClass='m-2'>Danger</Button>
        <Button type="icon" state="active" cssClass='m-2'>
            <i className="fa fa-solid fa-gear"></i>
        </Button>
        <Button type="primary" state="disabled" cssClass='m-2'>Disabled</Button>
        <Button type="primary" state="loading" cssClass='m-2'></Button>
        <Button type="primary" state="active" cssClass='m-2' onClick={() => alert('Button clicked!')}>
            Click Me
        </Button>
    `;

    const changeCopySuccess = () => {
        console.log('Copied!');
        setCopySuccess('Copied!')
        setTimeout(() => setCopySuccess('Copy'), 3000);
    };


    const data: DataProp[] = [
        { prop: 'type', value: 'primary | secondary | danger | icon', description: 'Defines the style of the button.', default: 'primary' },
        { prop: 'state', value: 'active | disabled | loading', description: 'Defines the state of the button.', default: 'active' },
        { prop: 'onClick', value: '() => void', description: 'Callback when the button is clicked.', default: 'undefined' },
        { prop: 'cssClass', value: 'string', description: 'Optional custom CSS class.', default: 'undefined' },
        { prop: 'onClickCopy', value: '() => void', description: 'Callback when the button is clicked to copy text.', default: 'undefined' },
        { prop: 'textToCopy', value: 'string', description: 'Text to copy to clipboard.', default: 'undefined' },
      ];


    return (
        <div className='page-container'>
            <h1>Button Component Documentation</h1>
            <p>The Button component can be used to trigger various actions and can be styled in multiple ways.</p>

            <h2>Props Overview</h2>

            <Tableau
                columns={columnsProp}
                data={data}
                type='secondary'
            />

            <h2>Usage Examples</h2>
            <div className='example-code-block'>
                <div className='example-block'>
                    <Button type="primary" state="active" cssClass='m-2'>Primary</Button>
                    <Button type="secondary" state="active" cssClass='m-2'>Secondary</Button>
                    <Button type="danger" state="active" cssClass='m-2'>Danger</Button>
                    <Button type="icon" state="active" cssClass='m-2'>
                        <i className="fa fa-solid fa-gear"></i>
                    </Button>
                    <Button type="primary" state="disabled" cssClass='m-2'>Disabled</Button>
                    <Button type="primary" state="loading" cssClass='m-2'></Button>
                    <Button type="primary" state="active" cssClass='m-2' onClick={() => alert('Button clicked!')}>
                        Click Me
                    </Button>
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

export default ButtonPage;
