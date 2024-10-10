import React, { useState } from 'react';
import Modal from '../../components/organisms/modal/Modal';
import Button from '../../components/atoms/button/Button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; // Import Prism for syntax highlighting
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'; // One Dark theme
import { DataProp } from '../../interface/TableInterface';
import { columnsProp } from '../../model/ColumnDemo';
import Table from '../../components/organisms/table/Table';
import Card from '../../components/molecules/card/Card';

const SelectPage: React.FC = () => {
  const [copySuccess, setCopySuccess] = useState('Copy');

  const [modalOpen, setModalOpen] = useState(false);

  const DataProp: DataProp[] = [
    { prop: 'isOpen', options: 'true or false', description: 'Defines if the modal is open.', default: 'cannot be empty', type: 'boolean' },
    { prop: 'onClose', options: 'Function', description: 'Function to call when the modal is closed.', default: 'undefined', type: 'function' },
    { prop: 'children', options: 'ReactNode', description: 'Content to display inside the modal.', default: 'cannot be empty', type: 'ReactNode' },
    { prop: 'cssClass', options: 'a string', description: 'Optional custom CSS class.', default: '""', type: 'string' },
  ];

  const handleClose = () => {
    setModalOpen(false);
    setTimeout(() => alert("Modal closed!"), 50);
    }


  const codeString = `
        <Button type="primary" onClick={() => setModalOpen(true)}>Open Modal</Button>
        <Modal isOpen={modalOpen} onClose={() => handleClose()}>
            <Card title="Modal Title" description="Modal description" />
        </Modal>
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
          <p>The Modal component can be used to create a modal window.</p>
          <h2>Props Overview</h2>
            <Table
                columns={columnsProp}
                data={DataProp}
                type='secondary'
            />

          <h2>Usage Examples</h2>
          <div className='example-code-block'>
              <div className='example-block justify-around'>
                <Button type="primary" onClick={() => setModalOpen(true)}>Open Modal</Button>
                <Modal isOpen={modalOpen} onClose={() => handleClose()}>
                    <Card title="Modal Title" description="Modal description" />
                </Modal>
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

export default SelectPage;
