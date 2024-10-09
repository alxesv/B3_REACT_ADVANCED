import React, { useState } from 'react';
import Select from '../../components/atoms/select/Select';
import type { Option } from '../../components/atoms/select/Select';
import Button from '../../components/atoms/button/Button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; // Import Prism for syntax highlighting
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'; // One Dark theme
import { DataProp } from '../../interface/TableInterface';
import { columnsProp } from '../../model/ColumnDemo';
import Table from '../../components/organisms/table/Table';

const SelectPage: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState('Copy');

  const DataProp: DataProp[] = [
    { prop: 'label', options: 'a string', description: 'Text to display above the select input.', default: 'cannot be empty', type: 'string' },
    { prop: 'onChange', options: 'Function', description: 'Function to call when an option is selected.', default: 'undefined', type: 'function' },
    { prop: 'multiple', options: 'true or false', description: 'Defines if multiple options can be selected using ctrl(win) or cmd(mac).', default: 'false', type: 'boolean' },
    { prop: 'options', options: 'Option[]', description: 'Array of options to display in the dropdown (see options code).', default: 'cannot be empty', type: 'array' },
    { prop: 'defaultValue', options: 'a string', description: 'Value of the default selected option.', default: 'undefined', type: 'string' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeout(() => alert("Option " + e.target.value +  " selected!"), 50);
    }

  const mockOptions1: Option[] = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2', disabled: true },
    { value: '3', label: 'Option 3' }
  ];

  const mockOptions2: Option[] = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4' },
  ];

  const mockOptions3: Option[] = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4', disabled: true },
    { value: '5', label: 'Option 5' }
  ];

  const jsCodeString = `
    type Option = {
        label: string;
        value: string;
        disabled?: boolean;
    };

    import type { Option } from ...

    const mockOptions1: Option[] = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2', disabled: true },
        { value: '3', label: 'Option 3' }
    ];

    const mockOptions2: Option[] = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
        { value: '4', label: 'Option 4' },
    ];

    const mockOptions3: Option[] = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
        { value: '4', label: 'Option 4', disabled: true },
        { value: '5', label: 'Option 5' }
    ];
  `
  const codeString = `
    <Select options={mockOptions1} label="Select one option" onChange={(e) =>{ handleChange(e)}} />
    <Select options={mockOptions2} label="Select one option" defaultValue='3' />
    <Select options={mockOptions3} label="Select one or more" multiple/>
  `;

  const copyToClipboard = () => {
      navigator.clipboard.writeText(codeString)
          .then(() => setCopySuccess('Copied!'))
          .catch(err => console.error('Failed to copy text: ', err));
      setTimeout(() => setCopySuccess('Copy'), 3000);
  };

  return (
      <div className='page-container'>
          <h1>Select Component Documentation</h1>
          <p>The Select component can be used to create a dropdown input with a label and multiple options.</p>
          <h2>Props Overview</h2>
            <Table
                columns={columnsProp}
                data={DataProp}
                type='secondary'
            />

          <h2>Usage Examples</h2>
          <div className='example-code-block'>
              <div className='example-block justify-around'>
                <Select options={mockOptions1} label="Select one option" onChange={(e) =>{ handleChange(e)}} />
                <Select options={mockOptions2} label="Select one option" defaultValue='3' />
                <Select options={mockOptions3} label="Select one or more" multiple/>
              </div>

              <div className='example-code'>
                  <Button type="secondary" cssClass='copy-button' onClick={copyToClipboard}>{copySuccess}</Button>
                  <SyntaxHighlighter language="tsx" style={oneDark}>
                      {codeString}
                  </SyntaxHighlighter>
              </div>
              <p>Options code</p>
              <div className='example-code'>
                  <Button type="secondary" cssClass='copy-button' onClick={copyToClipboard}>{copySuccess}</Button>
                  <SyntaxHighlighter language="tsx" style={oneDark}>
                      {jsCodeString}
                  </SyntaxHighlighter>
              </div>
          </div>
      </div>
  );
};

export default SelectPage;
