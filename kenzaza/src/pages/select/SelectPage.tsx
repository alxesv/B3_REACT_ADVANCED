import React, { useState } from 'react';
import Select from '../../components/atoms/select/Select';
import type { Option } from '../../components/atoms/select/Select';
import Button from '../../components/atoms/button/Button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; // Import Prism for syntax highlighting
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'; // One Dark theme

const SelectPage: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState('Copy');

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
          <table>
              <thead>
                  <tr>
                      <th>Prop</th>
                      <th>Type</th>
                      <th>Options</th>
                      <th>Description</th>
                      <th>Default</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td><code>label</code></td>
                      <td>string</td>
                      <td>a string</td>
                      <td>Text to display above the select input.</td>
                      <td><code>cannot be empty</code></td>
                  </tr>
                  <tr>
                      <td><code>onChange</code></td>
                      <td>function</td>
                      <td>Function</td>
                      <td>Function to call when an option is selected.</td>
                      <td><code>undefined</code></td>
                  </tr>
                  <tr>
                      <td><code>multiple</code></td>
                      <td>boolean</td>
                      <td><code>true</code> or <code>false</code></td>
                      <td>Defines if multiple options can be selected using ctrl(win) or cmd(mac).</td>
                      <td><code>false</code></td>
                  </tr>
                  <tr>
                    <td><code>options</code></td>
                    <td>Option[]</td>
                    <td>Array of Option objects</td>
                    <td>Array of options to display in the dropdown (see options code).</td>
                    <td><code>cannot be empty</code></td>
                  </tr>
                  <tr>
                    <td><code>defaultValue</code></td>
                    <td>string</td>
                    <td>a string</td>
                    <td>Value of the default selected option.</td>
                    <td><code>undefined</code></td>
                  </tr>
              </tbody>
          </table>

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
              <span>Options code</span>
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
