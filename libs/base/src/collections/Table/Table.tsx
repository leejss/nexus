import React from 'react';
import './Table.scss';

export interface TableProps {
  bordered?: boolean;
}

export const Table: React.FC<TableProps> = ({ children, bordered }) => {
  // props로 받아서 context에 전달해야 한다.
  
  return <table className="Table">{children}</table>;
};
