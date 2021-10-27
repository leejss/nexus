import React from 'react';

export interface TableContextType {
  bordered?: boolean;
  area?: 'header' | 'body';
}

const TableContext = React.createContext<TableContextType | null>(null);

export const useTableContext = () => {
  const context = React.useContext(TableContext);
  return context;
};

export default TableContext;
