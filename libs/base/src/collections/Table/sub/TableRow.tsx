import React from 'react';
import cx from 'classnames';
import { css } from '@emotion/css';

export type TableRowBorderType = {
  color?: string;
  width?: number;
};

export interface TableRowProps {
  border?: TableRowBorderType;
}

const TableRow: React.FC<TableRowProps> = ({ children, border }) => {
  const borderStyle = css`
    & {
      border-bottom: ${border?.width}px solid ${border?.color};
    }
  `;
  const classnames = cx('TableRow', border && borderStyle);
  return <tr className={classnames}>{children}</tr>;
};

export default TableRow;
