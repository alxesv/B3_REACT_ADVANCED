import React, { useState } from 'react';
import Toggle from '../../components/atoms/toggle/Toggle';
import Button from '../../components/atoms/button/Button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; // Import Prism for syntax highlighting
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'; // One Dark theme
import { DataProp } from '../../interface/TableInterface';
import { columnsProp } from '../../model/ColumnDemo';
import Table from '../../components/organisms/table/Table';

const TogglePage: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState('Copy');

  const DataProp: DataProp[] = [
    { prop: 'type', options: 'round | square', description: 'Defines the shape of the toggle switch.', default: 'round', type: 'string' },
    { prop: 'color', options: 'primary | secondary | danger | dark', description: 'Defines the color of the toggle switch.', default: 'primary', type: 'string' },
    { prop: 'defaultChecked', options: 'true or false', description: 'Defines if the toggle switch is checked by default.', default: 'false', type: 'boolean' },
    { prop: 'onChange', options: 'Function', description: 'Function to call when the toggle switch is clicked.', default: 'undefined', type: 'function' },
    { prop: 'value', options: 'a string', description: 'Value attribute of the toggle switch.', default: 'undefined', type: 'string' },
    { prop: 'customClass', options: 'a string', description: 'Optional custom CSS class.', default: 'undefined', type: 'string' },
    ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => alert("Toggle clicked!"), 400);
    }

  const codeString = `
    <Toggle />
    <Toggle defaultChecked={true}  color="secondary" onChange={handleChange} />
    <Toggle defaultChecked={false} color="danger" />
    <Toggle defaultChecked={true} type="square" color="dark" />
  `;

  const copyToClipboard = () => {
      navigator.clipboard.writeText(codeString)
          .then(() => setCopySuccess('Copied!'))
          .catch(err => console.error('Failed to copy text: ', err));
      setTimeout(() => setCopySuccess('Copy'), 3000);
  };

  return (
      <div className='page-container'>
          <h1>Toggle Component Documentation</h1>
          <p>The Toggle component can be used to create a toggle switch input.</p>
          <h2>Props Overview</h2>
          
            <Table
                columns={columnsProp}
                data={DataProp}
                type='secondary'
            />

          <h2>Usage Examples</h2>
          <div className='example-code-block'>
              <div className='example-block justify-around'>
                <Toggle />
                <Toggle defaultChecked={true}  color="secondary" onChange={handleChange} />
                <Toggle defaultChecked={false} color="danger" />
                <Toggle defaultChecked={true} type="square" color="dark" />
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

export default TogglePage;
