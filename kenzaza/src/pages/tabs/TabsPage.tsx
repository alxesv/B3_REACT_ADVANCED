import React, { useState } from 'react';
import Tabs from '../../components/organisms/tabs/Tabs';
import Card from '../../components/molecules/card/Card';
import Button from '../../components/atoms/button/Button';
import Table from '../../components/organisms/table/Table';
import { columnsProp } from '../../model/ColumnDemo';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { DataProp } from '../../interface/TableInterface';

const TabsPage = () => {
  const tabNames = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'];  // Names for each tab
  const tabContents = [
    <Card
      title='Card 1'
      description='Yes this is the description for Card 1.'
      imageUrl='https://www.ambient-it.net/wp-content/uploads/2023/06/React-vs-Angular.png'
      actions={[
        <Button type="primary" state="active">Primary</Button>,
        <Button type="secondary" state="active">Secondary</Button>
      ]}
    />,
    <Card
      title='Card 2'
      description='Another description for Card 2, but not the same as the description for Card 1, cause that would be weird..'
      imageUrl='https://media.licdn.com/dms/image/D5612AQHZ_hsfU7BLVg/article-cover_image-shrink_600_2000/0/1712295977172?e=2147483647&v=beta&t=w1P5fSObT8Q9ewBqKF4Hk31Wu5cB3Ba0GrzYkZ9KSe4'
    />,
    <Card
      title='Card 3'
      description='And definitely Angular is better than React, but React is still good.'
      actions={[
        <Button type="primary" state="active" cssClass='m-2' onClick={() => alert('Button clicked!')}>
          Click Me
        </Button>
      ]}
      width='10'
    />,
    <Card
      title='Card 1'
      description='Yes this is the description for Card 1.'
      imageUrl='https://www.ambient-it.net/wp-content/uploads/2023/06/React-vs-Angular.png'
      actions={[
        <Button type="primary" state="active">Primary</Button>,
        <Button type="secondary" state="active">Secondary</Button>
      ]}
    />
  ];

  const tabNames2 = ['Tab 1', 'Tab 2', 'Tab 3'
  ];  // Names for each tab
  const tabContents2 = [
    <Card
      title='Card 1'
      description='Yes this is the description for Card 1.'
      imageUrl='https://www.ambient-it.net/wp-content/uploads/2023/06/React-vs-Angular.png'
      actions={[
        <Button type="primary" state="active">Primary</Button>,
        <Button type="secondary" state="active">Secondary</Button>
      ]}
    />,
    <Card
      title='Card 2'
      description='Another description for Card 2, but not the same as the description for Card 1, cause that would be weird..'
      imageUrl='https://media.licdn.com/dms/image/D5612AQHZ_hsfU7BLVg/article-cover_image-shrink_600_2000/0/1712295977172?e=2147483647&v=beta&t=w1P5fSObT8Q9ewBqKF4Hk31Wu5cB3Ba0GrzYkZ9KSe4'
    />,
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
  ];

  const [copySuccess, setCopySuccess] = useState('Copy');

  const codeString = `
  <Tabs tabs={tabNames} tabContent={tabContents} height='35' width='25' buttonType='danger' />
  <Tabs tabs={tabNames2} tabContent={tabContents2} height='35' width='25' />

  const tabNames = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'];
  const tabContents = [
    <Card
      title='Card 1'
      description='Yes this is the description for Card 1.'
      imageUrl='https://www.ambient-it.net/wp-content/uploads/2023/06/React-vs-Angular.png'
      actions={[
        <Button type="primary" state="active">Primary</Button>,
        <Button type="secondary" state="active">Secondary</Button>
      ]}
    />,
    <Card
      title='Card 2'
      description='Another description for Card 2, but not the same as the description for Card 1, cause that would be weird..'
      imageUrl='https://media.licdn.com/dms/image/D5612AQHZ_hsfU7BLVg/article-cover_image-shrink_600_2000/0/1712295977172?e=2147483647&v=beta&t=w1P5fSObT8Q9ewBqKF4Hk31Wu5cB3Ba0GrzYkZ9KSe4'
    />,
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
  ];
  `;

  const changeCopySuccess = () => {
      setCopySuccess('Copied!')
      setTimeout(() => setCopySuccess('Copy'), 3000);
  };


  const data: DataProp[] = [
      { prop: 'tabs', description: 'Array of tab names', type: 'string[]', default: 'cannot be empty' , options: 'string[]' },
      { prop: 'tabContent', description: 'Array of content for each tab', type: 'React.ReactNode[]', default: 'cannot be empty', options: 'React.ReactNode[]' },
      { prop: 'width', description: 'Width of the tabs', type: 'string', default: '20', options: 'a string' },
      { prop: 'height', description: 'Height of the tabs', type: 'string', default: '20', options: 'a string' },
      { prop: 'buttonType', description: 'Type of button', type: 'primary | secondary | danger | icon', default: 'primary', options: 'primary | secondary | danger | icon' },
  ];
  return (

    <div className='page-container'>
      <h1>Tabs Component Documentation</h1>
      <p>The Tabs component can be used to create a tabbed interface.</p>
      <h2>Props Overview</h2>
      <Table
        columns={columnsProp}
        data={data}
        type='secondary'
      />

      <h2>Usage Examples</h2>
      <div className='example-code-block'>
        <div className='example-block justify-around'>
          <Tabs tabs={tabNames} tabContent={tabContents} height='35' width='25' buttonType='danger' />
          <Tabs tabs={tabNames2} tabContent={tabContents2} height='35' width='25' />
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

export default TabsPage;
