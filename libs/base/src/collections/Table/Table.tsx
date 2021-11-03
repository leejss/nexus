import React from 'react';
import { TableContextProvider } from './sub';
import './Table.scss';

export interface TableProps {
  // 전체 테이블이 bordered인지 아닌지 스위치
  bordered?: boolean;
}

export const Table: React.FC<TableProps> = ({ children, bordered }) => {
  // props로 받아서 context에 전달해야 한다.

  return (
    <TableContextProvider bordered={bordered}>
      <table className="Table">{children}</table>
    </TableContextProvider>
  );
};
