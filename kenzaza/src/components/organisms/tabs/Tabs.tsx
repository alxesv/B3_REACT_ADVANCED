import React, { useState } from 'react';
import './tabs.css';
import Button from '../../atoms/button/Button';

interface TabsProps {
  tabs: string[];
  tabContent: React.ReactNode[];
  width?: string;
  height?: string;
  buttonType?: 'primary' | 'secondary' | 'danger' | 'icon';
}

const Tabs: React.FC<TabsProps> = ({ tabs, tabContent, width=20, height=20, buttonType='primary' }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            onClick={() => setActiveTab(index)} 
            type={activeTab === index ? 'secondary' as 'secondary' : buttonType}
            state={activeTab === index ? 'disable' as 'disabled' : 'active' as 'active'}
          >
            {tab}
            </Button>
          ))}
      </div>
      <div className="tab-content d-flex-center" style={{ width: `${width}rem`, height: `${height}rem` }}>
        {tabContent[activeTab]}  {/* Render the content of the active tab */}
      </div>
    </div>
  );
};

export default Tabs;
