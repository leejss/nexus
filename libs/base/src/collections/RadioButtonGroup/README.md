# RadioButtonGroup

## usecases

```ts
const [ value, setValue ] = React.useState("one")
<RadioButtonGroup 
  name="" 
  options={['one', 'two']}
  value={value}
  onChange={event => setValue(event.target.value)}
/>
```
