import React, { useState } from 'react';
import Card from '../../components/molecules/card/Card';
import Table from '../../components/organisms/table/Table';
import { columnsProp } from '../../model/ColumnDemo';
import { DataProp } from '../../interface/TableInterface';
import Button from '../../components/atoms/button/Button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CardPage: React.FC = () => {
    const [copySuccess, setCopySuccess] = useState('Copy');

    const data: DataProp[] = [
        { prop: 'title', type: 'string', options: 'a string', description: 'The title of the card.', default: 'undefined' },
        { prop: 'description', options: 'a string', type: 'string', description: 'The description of the card.', default: 'undefined' },
        { prop: 'imageUrl', options: 'an string url', type: 'string', description: 'The image URL of the card.', default: 'undefined' },
        { prop: 'actions', options: 'a React.ReactNode[]', type: 'React.ReactNode[]', description: 'The actions to be displayed on the card.', default: 'undefined' },
        { prop: 'width', options: 'a number in a string', type: 'string', description: 'The width of the card.', default: '20' }
    ];

    const codeString = `
    <Card
        title='Card 1'
        description='Yes this is the description for Card 1, And no this is not the description for Card 2 lol.'
        imageUrl='https://www.ambient-it.net/wp-content/uploads/2023/06/React-vs-Angular.png'
        actions={[
            <Button type="primary" state="active">Primary</Button>,
            <Button type="secondary" state="active">Secondary</Button>
        ]}
    />
    <Card
        title='Card 2'
        description='Another description for Card 2, but not the same as the description for Card 1, cause that would be weird..'
        imageUrl='https://media.licdn.com/dms/image/D5612AQHZ_hsfU7BLVg/article-cover_image-shrink_600_2000/0/1712295977172?e=2147483647&v=beta&t=w1P5fSObT8Q9ewBqKF4Hk31Wu5cB3Ba0GrzYkZ9KSe4'
    />
    <Card
        title='Card 3'
        description='And definitely Angular is better than React, but React is still good.'
        actions={[
            <Button type="primary" state="active" cssClass='m-2' onClick={() => alert('Button clicked!')}>
                Click Me
            </Button>
        ]}
        width='10'
    />
    `;

    const changeCopySuccess = () => {
        setCopySuccess('Copied!')
        setTimeout(() => setCopySuccess('Copy'), 3000);
    };

    return (
        <div className='page-container'>
            <h1>Card Component Documentation</h1>
            <p>The Card component can be used to display information in a visually appealing way.</p>


            <h2>Props Overview</h2>

            <Table
                columns={columnsProp}
                data={data}
                type='secondary'
            />

            <h2>Usage Examples</h2>
            <div className='example-code-block'>
                <div className='example-block'>
                    <Card
                        title='Card 1'
                        description='Yes this is the description for Card 1, And no this is not the description for Card 2 lol.'
                        imageUrl='https://www.ambient-it.net/wp-content/uploads/2023/06/React-vs-Angular.png'
                        actions={[
                            <Button type="primary" state="active">Primary</Button>,
                            <Button type="secondary" state="active">Secondary</Button>
                        ]}
                    />
                    <Card
                        title='Card 2'
                        description='Another description for Card 2, but not the same as the description for Card 1, cause that would be weird..'
                        imageUrl='https://media.licdn.com/dms/image/D5612AQHZ_hsfU7BLVg/article-cover_image-shrink_600_2000/0/1712295977172?e=2147483647&v=beta&t=w1P5fSObT8Q9ewBqKF4Hk31Wu5cB3Ba0GrzYkZ9KSe4'
                    />
                    <Card
                        title='Card 3'
                        description='And definitely Angular is better than React, but React is still good.'
                        actions={[
                            <Button type="primary" state="active" cssClass='m-2' onClick={() => alert('Button clicked!')}>
                                Click Me
                            </Button>
                        ]}
                        width='10'
                    />
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

export default CardPage;
