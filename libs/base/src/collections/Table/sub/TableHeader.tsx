import React from 'react';
import { TableHeaderContextProvider } from './TableContext';

export const TableHeader: React.FC = ({ children }) => {
  return (
    <TableHeaderContextProvider>
      <thead className="TableHeader">{children}</thead>
    </TableHeaderContextProvider>
  );
};
