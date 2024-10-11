import React from 'react';
import Breadcrumb from '../components/organisms/breadcrumb/Breadcrumb';

const getBreadcrumbs = (route: string) => {
    const baseBreadcrumb = [{ label: 'Home', path: '/', color: 'primary' }];
    
    switch (route) {
      case '/loader':
        return [...baseBreadcrumb, { label: 'Loader', path: '/loader', color: 'secondary' }];
      case '/checkbox':
        return [...baseBreadcrumb, { label: 'Checkbox', path: '/checkbox', color: 'secondary' }];
      // Add more cases for other routes
      default:
        return baseBreadcrumb;
    }
  };
  
  export default getBreadcrumbs;
  