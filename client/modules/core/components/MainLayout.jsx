import React from 'react';
import { PageHeader } from 'react-bootstrap';
const Layout = ({content}) => (
  <div>
    <PageHeader>Impossible List </PageHeader>
    {content()} 
  </div>
);
export default Layout
