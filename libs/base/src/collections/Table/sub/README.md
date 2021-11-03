# Table sub component

## usecases

Context를 활용하여 cell의 state 관리.

총 세 가지 context를 가질 수 있을 것이다.

1. TableContext => Wrap the table
2. TableHeaderContext => Wrap the header
3. TableBodyContext => Wrap the body

굳이 세 가지 context를 나눠가질 필요가 있을까?

Header컴포넌트에서 context를 하나 생성해서 Header밑의 table cell은 "header"상태값을 가지도록 하면 된다.

그러면 header컴포넌트에서 "header"라는 컨텍스트를 가지게 하고 하면 된다.

그렇가면 bordered는 어떻게? bordered는 전체 Table의 state값이기 때문에
전체 테이블에 Provide해야 한다.

```ts
export const Table = ({ bordered, children }) => {
  return (
    <TableContextProvider bordered={bordered}>
      <table>{children}</table>
    </TableContextProvider>
  );
};
```

이런 식으로 작성

세가지 context를 작성해야 할거 같은데;

그러면 Table Context안에 Header context가 있어야 하고,, BodyContext가 들어가야 한다는 말인데

```ts
export const TableHeader: React.FC = () => {
  return (
    <TableContextProvider area="header">
      <THeader />
    </TableContextProvider>
  );
};
```

Props로 context를 설정할 수는 없나?

지금 여러 개의 Provider가 있어서 그런가

Provider안에 Provider. 그러면 세 가지의 다른 context를 사용
