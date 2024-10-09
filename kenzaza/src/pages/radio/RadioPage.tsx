import React, { useState } from 'react';
import Radio from '../../components/atoms/radio/Radio';
import Button from '../../components/atoms/button/Button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; // Import Prism for syntax highlighting
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'; // One Dark theme

const TogglePage: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState('Copy');



  const codeString = `
   <div id="group-1">
        <Radio label="Option 1" name="group-1" onChange={(e) =>{ setTimeout(() => alert("Option 1 selected!"), 50);}} color="primary" value="option1"/>
        <Radio label="Option 2" defaultChecked={false} name="group-1" color="secondary" value="option2"/>
        <Radio label="Option 3" defaultChecked={false} name="group-1" color="primary" value="option3"/>
    </div>
    <div id="group-2">
        <Radio label="Option 1" defaultChecked={false} name="group-2" color="danger" value="option1"/>
        <Radio label="Option 2" defaultChecked={true} name="group-2" color="dark" value="option2"/>
    </div>
  `;

  const copyToClipboard = () => {
      navigator.clipboard.writeText(codeString)
          .then(() => setCopySuccess('Copied!'))
          .catch(err => console.error('Failed to copy text: ', err));
      setTimeout(() => setCopySuccess('Copy'), 3000);
  };

  return (
      <div className='page-container'>
          <h1>Radio Component Documentation</h1>
          <p>The Radio component can be used to create a radio button input with a label.</p>
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
                      <td>Defines the text to display next to the radio button.</td>
                      <td><code>cannot be empty</code></td>
                  </tr>
                  <tr>
                        <td><code>name</code></td>
                        <td>string</td>
                        <td>a string</td>
                        <td>Defines the name attribute of the radio button. Different radio buttons with the same name belong to the same group.</td>
                        <td><code>cannot be empty</code></td>
                  </tr>
                  <tr>
                        <td><code>color</code></td>
                        <td>string</td>
                        <td>primary | secondary | danger | dark</td>
                        <td>Defines the color of the radio button.</td>
                        <td><code>primary</code></td>
                  </tr>
                  <tr>
                      <td><code>defaultChecked</code></td>
                      <td>boolean</td>
                      <td><code>true</code> or <code>false</code></td>
                      <td>Defines if the radio button is checked by default.</td>
                      <td><code>false</code></td>
                  </tr>
                  <tr>
                      <td><code>onChange</code></td>
                      <td>function</td>
                      <td>Function</td>
                      <td>Function to call when the radio button is clicked.</td>
                      <td><code>undefined</code></td>
                  </tr>
                  <tr>
                      <td><code>value</code></td>
                      <td>string</td>
                      <td>a string</td>
                      <td>Value attribute of the radio button.</td>
                      <td><code>cannot be empty</code></td>
                  </tr>
              </tbody>
          </table>

          <h2>Usage Examples</h2>
          <div className='example-code-block'>
              <div className='example-block justify-around'>
                <div id="group-1">
                    <Radio label="Option 1" name="group-1" onChange={(e) =>{ setTimeout(() => alert("Option 1 selected!"), 50);}} color="primary" value="option1"/>
                    <Radio label="Option 2" defaultChecked={false} name="group-1" color="secondary" value="option2"/>
                    <Radio label="Option 3" defaultChecked={false} name="group-1" color="primary" value="option3"/>
                </div>
                <div id="group-2">
                    <Radio label="Option 1" defaultChecked={false} name="group-2" color="danger" value="option1"/>
                    <Radio label="Option 2" defaultChecked={true} name="group-2" color="dark" value="option2"/>
                </div>
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
