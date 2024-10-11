import React from 'react';
import './breadcrumb.css';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

interface BreadcrumbItem {
  label: string;
  path: string;
  separator?: string;
  color?: 'primary' | 'secondary' | 'danger' | 'dark';
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.path} className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
              {isLast ? (
                <span className={item.color ? item.color+'-color' : ''}>{item.label}</span>
              ) : (
                <Link className={item.color ? item.color+'-color' : 'base-item-color'} to={item.path}>{item.label}</Link>
              )}
              {!isLast && <span className="breadcrumb-separator">{item.separator ? item.separator : '/'}</span>} {/* Separator */}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
export type { BreadcrumbItem };
