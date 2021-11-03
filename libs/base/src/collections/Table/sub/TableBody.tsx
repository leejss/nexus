import React from 'react';
import { TableBodyContextProvider } from './TableContext';

export const TableBody: React.FC = ({ children }) => {
  return (
    <TableBodyContextProvider>
      <tbody>{children}</tbody>
    </TableBodyContextProvider>
  );
};
