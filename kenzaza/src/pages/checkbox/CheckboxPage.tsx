import React, { useState } from 'react';
import Checkbox from '../../components/atoms/checkbox/Checkbox';
import Button from '../../components/atoms/button/Button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; // Import Prism for syntax highlighting
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'; // One Dark theme
import Tableau from '../../components/atoms/table/Table';
import { DataProp } from '../../interface/TableInterface';
import { columnsProp } from '../../model/ColumnDemo';


const CheckboxPage: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState('Copy');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.nextSibling){
        e.target.checked ? e.target.nextSibling.textContent = "Uncheck me" : e.target.nextSibling.textContent = "Check me";
    }
}

const DataProp: DataProp[] = [
    { prop: 'label', options: 'a string', description: 'Text to display next to the checkbox.', default: 'cannot be empty', type: 'string' },
    { prop: 'defaultChecked', options: 'true or false', description: 'Defines if the checkbox is checked by default.', default: 'false', type: 'boolean' },
    { prop: 'onChange', options: 'Function', description: 'Function to call when the checkbox is clicked.', default: 'undefined', type: 'function' },
    { prop: 'value', options: 'a string', description: 'Value attribute of the checkbox.', default: 'undefined', type: 'string' },
  ];

  const codeString = `
  <Checkbox label="Check me" defaultChecked={false} onChange={(e) => (handleChange(e))} />
  <Checkbox label="Default checked" defaultChecked={true} value="defaultChecked" />
  `;



  const copyToClipboard = () => {
      navigator.clipboard.writeText(codeString)
          .then(() => setCopySuccess('Copied!'))
          .catch(err => console.error('Failed to copy text: ', err));
      setTimeout(() => setCopySuccess('Copy'), 3000);
  };

  return (
      <div className='page-container'>
          <h1>Checkbox Component Documentation</h1>
          <p>The Checkbox component can be used to create a checkbox input with a label.</p>
          <h2>Props Overview</h2>
            <Tableau
                columns={columnsProp}
                data={DataProp}
                type='secondary'
            />

          <h2>Usage Examples</h2>
          <div className='example-code-block'>
              <div className='example-block justify-around'>
              <Checkbox label="Check me" defaultChecked={false} onChange={(e) => (handleChange(e))} />
              <Checkbox label="Default checked" defaultChecked={true} value="defaultChecked" />
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

export default CheckboxPage;
