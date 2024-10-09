import React, { useState } from 'react';
import Toggle from '../../components/atoms/toggle/Toggle';
import Button from '../../components/atoms/button/Button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; // Import Prism for syntax highlighting
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'; // One Dark theme

const TogglePage: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState('Copy');

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
                      <td><code>type</code></td>
                      <td>string</td>
                      <td>round | square</td>
                      <td>Defines the shape of the toggle switch.</td>
                      <td><code>round</code></td>
                  </tr>
                  <tr>
                        <td><code>color</code></td>
                        <td>string</td>
                        <td>primary | secondary | danger | dark</td>
                        <td>Defines the color of the toggle switch.</td>
                        <td><code>primary</code></td>
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
                  <tr>
                        <td><code>customClass</code></td>
                        <td>string</td>
                        <td>a string</td>
                        <td>Optional custom CSS class.</td>
                        <td><code>undefined</code></td>
                  </tr>
              </tbody>
          </table>

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
