import React, { useState } from 'react';
import Button from '../../components/atoms/button/Button';
import Alert from '../../components/molecules/alert/Alert';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { DataProp } from '../../interface/TableInterface';
import Table from '../../components/organisms/table/Table';
import { columnsProp } from '../../model/ColumnDemo';

const ButtonPage: React.FC = () => {
    const [copySuccess, setCopySuccess] = useState('Copy');

    const [autoCloseAlert, setAutoCloseAlert] = useState(false);

    const [primaryAlert, setPrimaryAlert] = useState(false);

    const [secondaryAlert, setSecondaryAlert] = useState(false);

    const [dangerAlert, setDangerAlert] = useState(false);

    const changeCopySuccess = () => {
        setCopySuccess('Copied!')
        setTimeout(() => setCopySuccess('Copy'), 3000);
    };

    const codeString = `
        <Alert message="This is a primary alert" onClose={() => setPrimaryAlert(false)} /> : null}
        <Alert type="secondary" message="This is a secondary alert" onClose={handleClose} /> : null}
        <Alert type="danger" message="This is a danger alert" onClose={() => setDangerAlert(false)} /> : null}
        <Alert type="dark" message="This is a dark alert" autoClose={true} onClose={() => setAutoCloseAlert(false)} /> : null}
    `;

    const handleClose = () => {
        setSecondaryAlert(false);
        setTimeout(() => alert('Alert closed!'), 50);
    }


    const data: DataProp[] = [
        { prop: 'type', options: 'primary | secondary | danger | dark', description: 'Defines the style of the alert.', default: 'primary', type: 'string' },
        { prop: 'message', options: 'a string', description: 'Message to display in the alert.', default: 'cannot be empty', type: 'string' },
        { prop: 'autoClose', options: 'true or false', description: 'Defines if the alert should close automatically after 4 seconds.', default: 'false', type: 'boolean' },
    ];


    return (
        <div className='page-container'>
            <h1>Alert Component Documentation</h1>
            <p>The Alert component can be used to display a message to the user.</p>

            <h2>Props Overview</h2>

            <Table
                columns={columnsProp}
                data={data}
                type='secondary'
            />

            <h2>Usage Examples</h2>
            <div className='example-code-block'>
                <div className='example-block'>
                    <Button cssClass='button-alert' type="primary" state="active" onClick={() => setPrimaryAlert(true)}>Display a primary alert</Button>
                    {primaryAlert ? <Alert message="This is a primary alert" onClose={() => setPrimaryAlert(false)} /> : null}
                    <Button cssClass='button-alert' type="secondary" state="active" onClick={() => setSecondaryAlert(true)}>Display a secondary alert</Button>
                    {secondaryAlert ? <Alert type="secondary" message="This is a secondary alert" onClose={handleClose} /> : null}
                    <Button cssClass='button-alert' type="danger" state="active" onClick={() => setDangerAlert(true)}>Display a danger alert</Button>
                    {dangerAlert ? <Alert type="danger" message="This is a danger alert" onClose={() => setDangerAlert(false)} /> : null}
                    <Button cssClass='button-alert' type="primary" state="active" onClick={() => setAutoCloseAlert(true)}>Display an auto closing alert</Button>
                    {autoCloseAlert ? <Alert type="dark" message="This is a dark alert" autoClose={true} onClose={() => setAutoCloseAlert(false)} /> : null}
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

export default ButtonPage;
