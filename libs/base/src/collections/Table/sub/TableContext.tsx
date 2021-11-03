import React from 'react';

export interface TableContextType {
  bordered?: boolean;
}

const TableContext = React.createContext<TableContextType | null>(null);
const TableAreaContext = React.createContext<'header' | 'body' | null>(null);

export interface TableContextProviderProps {
  bordered?: boolean;
}

/* Custom Provider  */
export const TableContextProvider: React.FC<TableContextProviderProps> = ({
  bordered,
  children,
}) => {
  return (
    <TableContext.Provider
      value={{
        bordered,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export const TableHeaderContextProvider: React.FC = ({ children }) => {
  return (
    <TableAreaContext.Provider value="header">
      {children}
    </TableAreaContext.Provider>
  );
};

export const TableBodyContextProvider: React.FC = ({ children }) => {
  return (
    <TableAreaContext.Provider value="body">
      {children}
    </TableAreaContext.Provider>
  );
};

// Hooks
export const useTableContext = () => {
  // context값에 접근할 수 있는 통로
  const context = React.useContext(TableContext);
  return context;
};

export const useTableAreaContext = () => {
  return React.useContext(TableAreaContext);
};
