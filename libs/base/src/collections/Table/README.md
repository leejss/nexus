# Table component

## usecases

```ts
<Table>
  <TableHeader>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Name</TableCell>
    </TableRow>
  </TableHeader>
  <TableBody></TableBody>
</Table>
```

```ts
<TableCell border={}>
  Cell
<TableCell>
```

테이블 cell은 자기가 head인지 아닌지를 알아야 한다.

scope를 통해서 row인지 col인지 결정할 수 있다.

TableContextProvider를 통해서 borderde를 전달하게 되는데

테이블에서 어떻게 데이터를 렌더링할 것인가?

header를 vertical로 배치하고 싶다면?

