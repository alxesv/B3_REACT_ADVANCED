import React, { useState } from 'react';
import Table from '../../components/organisms/table/Table';
import { Column, DataDemo, DataProp } from '../../interface/TableInterface';
import { columnsProp } from '../../model/ColumnDemo';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Button from '../../components/atoms/button/Button';


const TablePage: React.FC = () => {

  const [copySuccess, setCopySuccess] = useState('Copy');

  const [selectedData, setSelectedData] = useState<DataDemo[]>([]);
  const [selectedCellule, setSelectedCellule] = useState<any[]>([]);

  const codeString = `

          <Table columns={columnsDemo} data={dataDemo} select={true}
            pagination={true} onSelect={handleSelect} pageSize={5} type='primary' onSelectCellules={handleSelectCellules} />

          <Table columns={columnsDemo} data={selectedData} type='secondary' />
  `;

  const dataDemo: DataDemo[] = [
    { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane@example.com' },
    { id: 3, name: 'Mike Johnson', age: 35, email: 'mike@example.com' },
    { id: 4, name: 'Alice Brown', age: 28, email: 'alice@example.com' },
    { id: 5, name: 'David White', age: 42, email: 'david@example.com' },
    { id: 6, name: 'Emily Green', age: 22, email: 'emily@example.com' },
    { id: 7, name: 'Chris Black', age: 50, email: 'chris@example.com' },
  ];

  const columnsDemo: Column<DataDemo>[] = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'email', label: 'Email' },
  ];


  const dataProp: DataProp[] = [
    { prop: 'type', options: 'primary | secondary | danger | warning', description: 'Defines the background color of table header', default: 'primary', type: 'string' },
    { prop: 'columns', options: 'ColumnProps<T>[]', description: 'Defines the columns of the table', default: 'cannot be empty', type: 'ColumnProps<T>[]' },
    { prop: 'data', options: 'T[]', description: 'Defines the data of the table', default: 'cannot be empty', type: 'T[]' },
    { prop: 'pageSize', options: 'true or false', description: 'Defines the number of rows per page', default: 'data.length', type: 'number' },
    { prop: 'select', options: 'true or false', description: 'Defines if the rows are selectable', default: 'false', type: 'boolean' },
    { prop: 'pagination', options: 'true or false', description: 'Defines if the table is paginated', default: 'false', type: 'boolean' },
    { prop: 'onSelectRow', options: '(selectedData: T[]) => void', description: 'Function to handle selection', default: 'undefined', type: 'function' },
  ];


  const changeCopySuccess = () => {
    setCopySuccess('Copied!')
    setTimeout(() => setCopySuccess('Copy'), 3000);
  };


  const handleSelect = (selectedRows: DataDemo[]) => {
    setSelectedData(selectedRows);
  };

  const handleSelectCellules = (selectedCellules: any[]) => {
    setSelectedCellule(selectedCellules);
  }
  return (
    <div className='page-container'>
      <h1>Table Demo Page</h1>
      <p>The Table component can be used to display data in a tabular format.</p>

      <Table
        columns={columnsProp}
        data={dataProp}
        type='secondary'
      />

      <h2>Usage Examples</h2>
      <div className='example-code-block'>
        <div className='example-block'>
          <div className='w-100'>
            <Table
              columns={columnsDemo}
              data={dataDemo}
              select={true}
              pagination={true}
              onSelectRow={handleSelect}
              pageSize={5}
              type='primary'
              onSelectCellules={handleSelectCellules}
            />

            <Table columns={columnsDemo} data={selectedData} type='secondary' />

            <p>Last selected cellule : {selectedCellule.map((cellule, index) => <span key={index}>{cellule.value} </span>)}</p>
          </div>
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

export default TablePage;
