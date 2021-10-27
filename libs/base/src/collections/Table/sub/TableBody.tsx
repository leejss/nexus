import React from 'react';
import TableContext from './TableContext';

const TBody: React.FC = ({ children }) => {
  return <tbody>{children}</tbody>;
};

export const TableBody: React.FC = (props) => {
  return (
    <TableContext.Provider value="body">
      <TBody {...props} />
    </TableContext.Provider>
  );
};
