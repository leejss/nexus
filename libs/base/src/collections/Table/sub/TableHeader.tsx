import React from 'react';
import TableContext from './TableContext';

const THeader: React.FC = ({ children }) => {
  return <thead>{children}</thead>;
};

export const TableHeader: React.FC = (props) => {
  return (
    <TableContext.Provider value="header">
      <THeader {...props} />
    </TableContext.Provider>
  );
};
