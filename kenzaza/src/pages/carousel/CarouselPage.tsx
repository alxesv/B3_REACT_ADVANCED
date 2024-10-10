import { useState } from 'react';
import Button from '../../components/atoms/button/Button';
import Card from '../../components/molecules/card/Card';
import Carousel from '../../components/organisms/carousel/Carousel';
import Table from '../../components/organisms/table/Table';
import { columnsProp } from '../../model/ColumnDemo';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { DataProp } from '../../interface/TableInterface';

const CarouselPage = () => {
  const [copySuccess, setCopySuccess] = useState('Copy');

  const slides = [<Card
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
  <p>p test </p>
  ]

  const changeCopySuccess = () => {
    setCopySuccess('Copied!')
    setTimeout(() => setCopySuccess('Copy'), 3000);
};

  const codeString = `
  <Carousel slides={slides} autoplay={false} interval={3000} />
  <Carousel slides={slides} autoplay={true} interval={3000} buttonPagination={false} />

  const slides = [
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
  <p>p test </p>
  ]
  `;

  const data: DataProp[] = [
    { prop: 'slides', description: 'Array of ReactNode elements to be displayed as slides in the carousel.', type: 'React.ReactNode[]', default: 'N/A', options: 'React.ReactNode[]' },
    { prop: 'autoplay', description: 'Boolean value to determine if the carousel should autoplay.', type: 'boolean', default: 'false', options: 'true, false' },
    { prop: 'interval', description: 'The interval in milliseconds between each slide change.', type: 'number', default: '3000', options: 'number' }
  ];

  return (
    <div className='page-container'>
      <h1>Carousel Component Documentation</h1>
      <p>The Carousel component can be used to display a series of slides in a carousel format.</p>

      <h2>Props Overview</h2>
      <Table
        columns={columnsProp}
        data={data}
        type='secondary'
      />

      <h2>Usage Examples</h2>
      <div className='example-code-block'>
        <div className='example-block d-flex-center'>
          <div>
            <Carousel slides={slides} />
            <Carousel slides={slides} autoplay={true} interval={3000} buttonPagination={false} />
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

export default CarouselPage;
