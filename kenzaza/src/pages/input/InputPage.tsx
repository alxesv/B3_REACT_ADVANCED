import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; // Import Prism for syntax highlighting
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'; // One Dark theme
import { DataProp } from '../../interface/TableInterface';
import { columnsProp } from '../../model/ColumnDemo';
import Button from '../../components/atoms/button/Button';
import Input from '../../components/atoms/input/Input';
import Table from '../../components/organisms/table/Table';


const InputPage: React.FC = () => {

    const [copySuccess, setCopySuccess] = useState('Copy');


    const codeString = `
            <Input type='password' height={2} radius={10} width={18} placeholder="password" background='danger-bg' required={true}/>
            <Input type='text' height={2} radius={10} width={18} placeholder="text" background='secondary-bg' color='danger-color'/>
            <Input type='email' height={2} radius={10} width={18} placeholder="email" onChange={() => alert('Email changed!')}/>
            <Input type='text' height={2} radius={10} width={18} value="VALUE" disabled />
    `;

    const changeCopySuccess = () => {
      setCopySuccess('Copied!')
      setTimeout(() => setCopySuccess('Copy'), 3000);
    };


    const data: DataProp[] = [
      { prop: 'label', type: 'string', description: 'Defines the text to display next to the input field.', default: 'text', options: 'string' },
      { prop: 'placeholder', type: 'string', description: 'Defines the text to display in the input field when it is empty.', default: 'undefined', options: 'string' },
      { prop: 'type', type: 'text | password | email | number | tel | date', description: 'Defines the type of input field.', default: 'undefined', options: 'text | password | email | number | tel | date' },
      { prop: 'onChange', type: '() => void', description: 'Callback when the input field value changes.', default: 'undefined', options: 'function' },
      { prop: 'value', type: 'string', description: 'Defines the value of the input field.', default: 'undefined', options: 'string' },
      { prop: 'disabled', type: 'boolean', description: 'Defines if the input field is disabled.', default: 'false', options: 'boolean' },
      { prop: 'width', type: 'number', description: 'Defines the width of the input field.', default: '18', options: 'number' },
      { prop: 'height', type: 'number', description: 'Defines the height of the input field.', default: '2', options: 'number' },
      { prop: 'radius', type: 'number', description: 'Defines the border radius of the input field.', default: '30', options: 'number' },
      { prop: 'padding', type: 'number', description: 'Defines the padding of the input field.', default: '2', options: 'number' },
      { prop: 'background', type: 'string', description: 'Defines the background color of the input field.', default: 'undefined', options: 'string' },
      { prop: 'color', type: 'string', description: 'Defines the text color of the input field.', default: 'dark-color', options: 'string' },
      { prop: 'required', type: 'boolean', description: 'Defines if the input field is required.', default: 'false', options: 'boolean' },
    ];



    return (

      <div className='page-container'>
        <h1>Input Component Documentation</h1>
        <p>The Input component can be used to create an input field with a label.</p>
        <h2>Props Overview</h2>

        <Table
        columns={columnsProp}
        data={data}
        type='secondary'
        />
        
        <h2>Usage Examples</h2>

        <div className='example-code-block'>
          <div className='example-block justify-around'>
            <Input type='password' height={2} radius={10} width={18} placeholder="password" background='danger-bg' required={true}/>
            <Input type='text' height={2} radius={10} width={18} placeholder="text" background='secondary-bg' color='danger-color'/>
            <Input type='email' height={2} radius={10} width={18} placeholder="email" onChange={() => alert('Email changed!')}/>
            <Input type='text' height={2} radius={10} width={18} value="VALUE" disabled />
            <Input type='date' height={2} radius={10} width={18} placeholder="password" background='primary-bg' required={true} color='dark-color'/>
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
  export default InputPage;
