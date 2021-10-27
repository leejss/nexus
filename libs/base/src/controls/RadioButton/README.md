# Radio Button

## usecases

```ts
<RadioButton />
<RadioButton label="" name="" value="" />
<RadioButton label="" name="" value="" checked />
<RadioButton label="" name="" value="" onChange={} />

const[value, setValue ] = useState("apple")

<div>
  <RadioButton onClick={} value= />
  <button>Change value</button>
</div>
```

value를 부여하고 onClick를 통해서 값을 가져올 수 있다.

## 일지

RadioButton에 value를 주입. 그리고 그 value를 변화시킬 수 있는 onClick handler를 같이 주입.

상위 컴포넌트와 통신할 수 있는 수단.

라디오 버튼의 역할?

select one thing among multiple choices

How to get a value from RadioButton??

e.target.value를 통해서 값을 가져올 수 있다.
라디오 버튼에 onClick 핸들러를 부여하면 한가지 값을 가져올 수있다.

handleClick(
onClick()
)

라디오 버튼의 checked는 뭐야??

radio타입의 인풋은 checked로 표현된다.
checked의 value를 가져온다.

```ts
// selected, unselected
const [options, setOptions] = React.useState([])
const [ selected, setSelected ] = React.useState("")

<div>

{options.map((option, index) => {
  return <RadioButton key={index} value={option} checked={option === selected} onChange={(changeEvnet) => {setSelected(changeEvent.target.value)}} />

})}

<div>
```
이게 체크인지 아닌지는 밖에서 판단.
