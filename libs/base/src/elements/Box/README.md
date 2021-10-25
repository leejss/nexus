# 1. Box의 역할

what: content를 담을 가장 기본적인 레이아웃 요소. 내부의 content를 center 배치한다.
when: 내용을 구분하기 위해 사용

# 2. Usecase

```ts
   <Box />
   <Box width={} height={} />
   <Box background="" />
   <Box padding={{
     top,
     left,
     right,
     bottom
   }} /> or
   <Box padding={10} />
   <Box border={{
     direction => 생략하면 all
     color,
     style,
     width
   }} />
   <Box responsive />
   <Box size={{
     width,
     height
   }} />
   <Box hover={{
     // hover에 적용할 스타일
   }} />
```
