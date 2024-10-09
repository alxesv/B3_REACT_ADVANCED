import React, { useState } from 'react';
import Checkbox from '../../components/atoms/checkbox/Checkbox';
import Button from '../../components/atoms/button/Button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; // Import Prism for syntax highlighting
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'; // One Dark theme

const CheckboxPage: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState('Copy');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.nextSibling){
        e.target.checked ? e.target.nextSibling.textContent = "Uncheck me" : e.target.nextSibling.textContent = "Check me";
    }
}

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
                      <td>Text to display next to the checkbox.</td>
                      <td><code>cannot be empty</code></td>
                  </tr>
                  <tr>
                      <td><code>defaultChecked</code></td>
                      <td>boolean</td>
                      <td><code>true</code> or <code>false</code></td>
                      <td>Defines if the checkbox is checked by default.</td>
                      <td><code>false</code></td>
                  </tr>
                  <tr>
                      <td><code>onChange</code></td>
                      <td>function</td>
                      <td>Function</td>
                      <td>Function to call when the checkbox is clicked.</td>
                      <td><code>undefined</code></td>
                  </tr>
                  <tr>
                      <td><code>value</code></td>
                      <td>string</td>
                      <td>a string</td>
                      <td>Value attribute of the checkbox.</td>
                      <td><code>undefined</code></td>
                  </tr>
              </tbody>
          </table>

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
