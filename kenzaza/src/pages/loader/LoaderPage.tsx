import React, { useState, useEffect } from 'react';
import Button from '../../components/atoms/button/Button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; // Import Prism for syntax highlighting
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'; // One Dark theme
import { DataProp } from '../../interface/TableInterface';
import { columnsProp } from '../../model/ColumnDemo';
import Table from '../../components/organisms/table/Table';
import Loader from '../../components/atoms/loader/loader';

const LoaderPage: React.FC = () => {

  const [progress, setProgress] = useState<number>(50);
  const [progress2, setProgress2] = useState<number>(50);
  const [progress3, setProgress3] = useState<number>(50);
  const [progress4, setProgress4] = useState<number>(50);
  const [copySuccess, setCopySuccess] = useState('Copy');


  const codeString = `
    <Loader type="spinner" colorType='primary' radius={10} />
    <Loader type="spinner" colorType='secondary' radius={10} />
    <Loader type="spinner" colorType='danger' radius={10} />
    <Loader type="spinner" colorType='warning' radius={10} />
 `;

  const codeString2 = `
      <Loader type="progress" colorType= 'primary' width={progress} height={1} />
      <input type="range" value={progress} onChange={(e) => setProgress(parseInt(e.target.value))} />

      <Loader type="progress" colorType= 'secondary' width={progress} height={2} />
      <input type="range" value={progress} onChange={(e) => setProgress(parseInt(e.target.value))} />

      <Loader type="progress" colorType= 'danger' width={progress} height={3} />
      <input type="range" value={progress} onChange={(e) => setProgress(parseInt(e.target.value))} />

      <Loader type="progress" colorType= 'warning' width={progress} height={4} />
      <input type="range" value={progress} onChange={(e) => setProgress(parseInt(e.target.value))} />
  `;

  const changeCopySuccess = () => {
    console.log('Copied!');
    setCopySuccess('Copied!')
    setTimeout(() => setCopySuccess('Copy'), 3000);
  };

  const data: DataProp[] = [
    { prop: 'type', options: 'spinner | progress', description: 'Defines the type of loader.', default: 'spinner', type: 'string' },
    { prop: 'radius', options: 'a number', description: 'Defines the size of the spinner.', default: '10', type: 'number' },
    { prop: 'colorType', options: 'primary | secondary | danger | warning', description: 'Defines the color of the spinner.', default: 'primary', type: 'string' },
    { prop: 'radius', options: 'a number', description: 'Defines the size of the spinner.', default: '10', type: 'number' },
  ];

  const data2: DataProp[] = [
    { prop: 'type', options: 'spinner | progress', description: 'Defines the type of loader.', default: 'spinner', type: 'string' },
    { prop: 'width', options: 'a number', description: 'Defines the width of the progress bar.', default: '10', type: 'number' },
    { prop: 'height', options: 'a number', description: 'Defines the height of the progress bar.', default: '1', type: 'number' },
    { prop: 'colorType', options: 'primary | secondary | danger | warning', description: 'Defines the color of the progress bar.', default: 'primary', type: 'string' },
  ];


  return (
    <div className='page-container'>
      <h1>Loaders Component Documentation</h1>
      <p>The spinner component can be used to create a loader.</p>
      <h2>Props Overview</h2>


      <Table
        columns={columnsProp}
        data={data}
        type='secondary'
      />

      <h2>Usage Examples</h2>


      <div className='example-code-block'>
        <div className='example-block justify-around'>
          <Loader type="spinner" colorType='primary' radius={10} />
          <Loader type="spinner" colorType='secondary' radius={10} />
          <Loader type="spinner" colorType='danger' radius={10} />
          <Loader type="spinner" colorType='warning' radius={10} />
        </div>
        <div className='example-code'>
          <Button type="secondary" cssClass='copy-button' textToCopy={codeString} onClickCopy={changeCopySuccess}>{copySuccess}</Button>
          <SyntaxHighlighter language="tsx" style={oneDark}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
      <p>The progress bar coponent can be used to create a loader</p>
      <h2>Props Overview</h2>

      <Table
        columns={columnsProp}
        data={data2}
        type='secondary'
      />

      <h2>Usage Examples</h2>

      <div className='example-code-block'>
        <div className='example-block justify-around'>
          <Loader type="progress" colorType='primary' width={progress} height={1} />
          <input type="range" value={progress} onChange={(e) => setProgress(parseInt(e.target.value))} />

          <Loader type="progress" colorType='secondary' width={progress2} height={2} />
          <input type="range" value={progress2} onChange={(e) => setProgress2(parseInt(e.target.value))} />

          <Loader type="progress" colorType='danger' width={progress3} height={3} />
          <input type="range" value={progress3} onChange={(e) => setProgress3(parseInt(e.target.value))} />

          <Loader type="progress" colorType='warning' width={progress4} height={4} />
          <input type="range" value={progress4} onChange={(e) => setProgress4(parseInt(e.target.value))} />
        </div>
        <div className='example-code'>
          <Button type="secondary" cssClass='copy-button' textToCopy={codeString2} onClickCopy={changeCopySuccess}>{copySuccess}</Button>
          <SyntaxHighlighter language="tsx" style={oneDark}>
            {codeString2}
          </SyntaxHighlighter>
        </div>
      </div>

    </div>
  );

};

export default LoaderPage;
