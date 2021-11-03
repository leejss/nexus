import React from 'react';
import { Table } from './Table';
import { ComponentMeta } from '@storybook/react';
import { TableBody, TableCell, TableHeader } from './sub';
import TableRow from './sub/TableRow';

export default {
  title: 'Collections/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

export const Basic = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow border={{ color: 'black', width: 0.5 }}>
          <TableCell>Cell1</TableCell>
          <TableCell colSpan={2}>Cell2</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Cell3</TableCell>
          <TableCell>Cell4</TableCell>
          <TableCell>Cell2</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cell3</TableCell>
          <TableCell>Cell4</TableCell>
          <TableCell>Cell2</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Cell3</TableCell>
          <TableCell>Cell4</TableCell>
          <TableCell>Cell2</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
