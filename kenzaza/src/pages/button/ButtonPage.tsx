import React, { useState } from 'react';
import Button from '../../components/atoms/button/Button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; // Import Prism for syntax highlighting
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'; // One Dark theme

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

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeString)
            .then(() => setCopySuccess('Copied!'))
            .catch(err => console.error('Failed to copy text: ', err));
        setTimeout(() => setCopySuccess('Copy'), 3000);
    };

    return (
        <div className='page-container'>
            <h1>Button Component Documentation</h1>
            <p>The Button component can be used to trigger various actions and can be styled in multiple ways.</p>

            <h2>Props Overview</h2>
            <table>
                <thead>
                    <tr>
                        <th>Prop</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Default</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>type</code></td>
                        <td>primary | secondary | danger | icon</td>
                        <td>Defines the style of the button.</td>
                        <td><code>primary</code></td>
                    </tr>
                    <tr>
                        <td><code>state</code></td>
                        <td>active | disabled | loading</td>
                        <td>Defines the state of the button.</td>
                        <td><code>active</code></td>
                    </tr>
                    <tr>
                        <td><code>onClick</code></td>
                        <td>() =&gt; void</td>
                        <td>Callback when the button is clicked.</td>
                        <td><code>undefined</code></td>
                    </tr>
                    <tr>
                        <td><code>cssClass</code></td>
                        <td>string</td>
                        <td>Optional custom CSS class.</td>
                        <td><code>undefined</code></td>
                    </tr>
                </tbody>
            </table>

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
                    <Button type="secondary" cssClass='copy-button' onClick={copyToClipboard}>{copySuccess}</Button>
                    <SyntaxHighlighter language="tsx" style={oneDark}>
                        {codeString}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    );
};

export default ButtonPage;
