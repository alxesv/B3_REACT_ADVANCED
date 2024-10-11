import React from 'react';
import Button from '../components/atoms/button/Button';
import Card from '../components/molecules/card/Card';
import { useNavigate } from 'react-router-dom';
import './Mainpage.css';

function MainPage() {

  const navigate = useNavigate();
  const handleClick = (url: string) => {
    navigate(url);
  }

  const cards = [
  { title:'INPUT',
    description:'An input is a field where users can enter data, such as text, numbers, or selections, into a form.',
    imageUrl:'/screenshots/INPUT.png',
    actions: [
        <Button type="secondary" state="active" onClick={() => handleClick('/input')}>Click</Button>
    ]
    },

    { title:'CHECKBOX',
      description:'A checkbox is a small box that can be checked or unchecked to select an option, allowing multiple selections in a group',
      imageUrl:'/screenshots/CHECKBOX.png',
      actions: [
        <Button type="secondary" state="active" onClick={() => handleClick('/checkbox')}>Click</Button>
      ]
      },

      { title:'SELECT',
        description:'A select is a dropdown menu that allows users to choose one or more options from a predefined list.',
        imageUrl:'/screenshots/SELECT.png',
        actions: [
          <Button type="secondary" state="active" onClick={() => handleClick('/select')}>Click</Button>
        ]
        },

        { title:'RADIO',
          description:'A radio button allows users to select only one option from a group of choices. It appears as a small circle that can be filled when selected',
          imageUrl:'/screenshots/RADIO.png',
          actions: [
            <Button type="secondary" state="active" onClick={() => handleClick('/radio')}>Click</Button>
          ]
          },

          { title:'TOGGLE',
            description:'A toggle is a switch that allows users to turn a setting on or off by sliding or clicking it.',
            imageUrl:'/screenshots/TOGGLE.png',
            actions: [
              <Button type="secondary" state="active" onClick={() => handleClick('/toggle')}>Click</Button>
            ]
            },

            { title:'BUTTON',
              description:'A button is a clickable element that triggers an action or submits a form when pressed.',
              imageUrl:'/screenshots/BUTTONS.png',
              actions: [
                <Button type="secondary" state="active" onClick={() => handleClick('/button')}>Click</Button>
              ]
              },

              { title:'LOADER',
                description:'A loader is an animated element that indicates progress or loading while content or data is being processed.',
                imageUrl:'/screenshots/LOADER.png',
                actions: [
                  <Button type="secondary" state="active" onClick={() => handleClick('/loader')}>Click</Button>
                ]
                },

  ]

  const cards2 = [

    { title:'ALERT',
      description:'An alert is a message box that appears on the screen to provide important information or notifications to the user. It requires acknowledgment before the user can proceed.',
      imageUrl:'/screenshots/ALERT.png',
      actions: [
        <Button type="secondary" state="active" onClick={() => handleClick('/alert')}>Click</Button>
      ]
      },

      { title:'BREADCRUMB',
        description:'A breadcrumb is a navigational aid that displays the users current location within a site as a series of links',
        imageUrl:'/screenshots/BREADCRUMB.png',
        actions: [
          <Button type="secondary" state="active" onClick={() => handleClick('/breadcrumb')}>Click</Button>
        ]
        },

        { title:'CARD',
          description:'Cards are flexible containers that display content and actions related to a single subject, often featuring images, text, and buttons.',
          imageUrl:'/screenshots/CARD.png',
          actions: [
            <Button type="secondary" state="active" onClick={() => handleClick('/card')}>Click</Button>
          ]
          },
  ]

  const cards3 = [


    { title:'ACCORDION',
      description:'An accordion is a UI component that expands and collapses sections of content, allowing users to view or hide information in a compact space.',
      imageUrl:'/screenshots/ACCORDION.png',
      actions: [
        <Button type="secondary" state="active" onClick={() => handleClick('/accordion')}>Click</Button>
      ]
      },
      { title:'CAROUSEL',
        description:'A carousel is a rotating display of images or content items that allows users to cycle through a set of items, typically with navigation controls like arrows or dots.',
        imageUrl:'/screenshots/CAROUSEL.png',
        actions: [
          <Button type="secondary" state="active" onClick={() => handleClick('/carousel')}>Click</Button>
        ]
        },
        { title:'MODAL',
          description:'A modal is a dialog box that appears on top of the main content, requiring user interaction before returning to the underlying page, often used for notifications, confirmations, or forms.',
          imageUrl:'/screenshots/MODAL.png',
          actions: [
            <Button type="secondary" state="active" onClick={() => handleClick('/modal')}>Click</Button>
          ]
          },
          { title:'TABS',
            description:'Tabs are UI elements that allow users to switch between different sections of content within the same interface, providing a way to organize and access related information easily.',
            imageUrl:'/screenshots/TABS.png',
            actions: [
              <Button type="secondary" state="active" onClick={() => handleClick('/tabs')}>Click</Button>
            ]
            },
            { title:'TABLE',
              description:'A table is a structured arrangement of data organized in rows and columns, making it easy to read, compare, and analyze information.',
              imageUrl:'/screenshots/TABLE.png',
              actions: [
                <Button type="secondary" state="active" onClick={() => handleClick('/table')}>Click</Button>
              ]
              },
  ]

  return (
    // add a background image to this div : style={{backgroundImage: `url(${background})`}}
    <div className='mainpage'>
      <h1 className='kenzaza'>KENZAZA LIBRAIRY</h1>
      <h2 className='atomic-design'>ATOMS</h2>

      <div className='box-container'>
        {cards.map((card, index) => (
          <div className='row-card'>
            <Card key={index} {...card} fontWeight='lighter'/>
          </div>
       ))}
      </div>


      <h2 className='atomic-design'>MOLECULES</h2>

      <div className='box-container'>
      {cards2.map((card, index) => (
         <div className='row-card'>
         <Card key={index} {...card} />
       </div>
      ))}
      </div>

      <h2 className='atomic-design'>ORGANISMES</h2>

      <div className='box-container'>
      {cards3.map((card, index) => (
         <div className='row-card'>
         <Card key={index} {...card} />
       </div>
      ))}
      </div>
    </div>

  );
}

export default MainPage;
