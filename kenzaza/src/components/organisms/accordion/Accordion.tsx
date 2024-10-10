import './accordion.css';
import React, { useEffect, useRef, useState } from 'react';
import Button from '../../atoms/button/Button';

type AccordionProps = {
  items: { title: string; content: React.ReactNode; bgColor?: string; color?: string; titleColor?: string; }[];
  allowMultiple?: boolean;
};

const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false }) => {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (allowMultiple) {
      setActiveIndexes((prevIndexes) =>
        prevIndexes.includes(index)
          ? prevIndexes.filter((i) => i !== index)
          : [...prevIndexes, index]
      );
    } else {
      setActiveIndexes((prevIndexes) =>
        prevIndexes.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button className={`accordion-title ${item.bgColor}-bg ${item.titleColor}-color`} onClick={() => handleToggle(index)}>
            {item.title}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={activeIndexes.includes(index) ? 'rotate' : ''}><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
          </button>
          {activeIndexes.includes(index) && (
            <div className={`accordion-content ${item.color}-color`}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
