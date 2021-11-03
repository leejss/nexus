import { css } from '@emotion/css';
import React from 'react';
import cx from 'classnames';
import { useTableContext } from './TableContext';
import { useTableAreaContext } from './TableContext';

export type TableCellBorderType = {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
};

export type TableCellAlignType = 'left' | 'center' | 'right';

export interface TableCellProps {
  border?: TableCellBorderType;
  borderColor?: string;
  colSpan?: number;
  rowSpan?: number;
  align?: string;
}

export const TableCell: React.FC<TableCellProps> = ({
  children,
  border,
  borderColor,
  colSpan,
  rowSpan,
  align = 'center',
}) => {
  // context에 접근
  const tableContext = useTableContext();
  const area = useTableAreaContext();
  const bordered = tableContext?.bordered;
  const borderStyle = css`
    & {
      border-left: ${border?.left ?? 0}px;
      border-right: ${border?.right ?? 0}px;
      border-bottom: ${border?.bottom ?? 0}px;
      border-top: ${border?.top ?? 0}px;
      border-color: ${borderColor};
      border-style: solid;
    }
  `;
  const classnames = cx(
    'TableCell',
    border && borderStyle,
    align && align,
    bordered && 'bordered'
  );

  return area === 'header' ? (
    <th className={classnames} colSpan={colSpan} rowSpan={rowSpan}>
      {children}
    </th>
  ) : (
    <td className={classnames} colSpan={colSpan} rowSpan={rowSpan}>
      {children}
    </td>
  );
};
